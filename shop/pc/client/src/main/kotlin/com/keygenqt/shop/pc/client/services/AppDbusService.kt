package com.keygenqt.shop.pc.client.services

import com.keygenqt.shop.pc.client.interfaces.IMethod
import com.keygenqt.shop.pc.client.services.app.AppDbus
import com.keygenqt.shop.pc.client.services.app.AppDbusMethods
import com.keygenqt.shop.pc.client.services.client.ClientFeatures
import com.keygenqt.shop.pc.client.services.client.ClientFeaturesMethods
import com.keygenqt.shop.pc.client.services.client.IClientFeatures
import com.keygenqt.shop.pc.client.utils.Constants
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import org.freedesktop.dbus.connections.impl.DBusConnection
import org.freedesktop.dbus.errors.ServiceUnknown
import org.freedesktop.dbus.exceptions.DBusExecutionException
import org.freedesktop.dbus.interfaces.CallbackHandler
import javax.security.auth.callback.Callback

class AppDbusService private constructor(
    private val connect: DBusConnection
) {
    companion object {
        /**
         * D-Bus connect
         */
        private val connect: DBusConnection =
            DBusConnection.getConnection(DBusConnection.DBusBusType.SESSION)
        /**
         * Instance [AppDbusService]
         */
        private lateinit var instance: AppDbusService
        /**
         * Register Dbus
         */
        private fun register() {
            connect.requestBusName(Constants.SERVICE_DBUS_CLIENT)
            connect.exportObject(ClientFeatures())
        }
        /**
         * Get Instance
         */
        fun getInstance(): AppDbusService {
            if (::instance.isInitialized) {
                throw RuntimeException("Instance already exist!")
            } else {
                try {
                    // create service
                    instance = AppDbusService(connect)
                    // register dbus
                    register()
                } catch (e: Exception) {
                    // stop copy
                    instance.call(ClientFeaturesMethods.CLOSE_CLIENT)
                    // register dbus
                    runBlocking {
                        delay(1000)
                        register()
                    }
                }
                return instance
            }
        }
    }

    /**
     * Object [AppDbus]
     */
    private val objAppDbus = connect.getRemoteObject(
        Constants.SERVICE_DBUS_APP,
        "/",
        AppDbus::class.java
    ) as AppDbus

    /**
     * Object [ClientFeatures]
     */
    private val objClientFeatures = connect.getRemoteObject(
        Constants.SERVICE_DBUS_CLIENT,
        "/",
        IClientFeatures::class.java
    ) as IClientFeatures

    /**
     * Methods call
     */
    fun call(
        method: IMethod,
        arguments: List<Any> = emptyList(),
        response: (Any?) -> Unit = {}
    ) {
        connect.callWithCallback(
            when(method) {
                is AppDbusMethods -> objAppDbus
                is ClientFeaturesMethods -> objClientFeatures
                else -> null
            },
            method.value,
            object : javax.security.auth.callback.CallbackHandler, CallbackHandler<Any> {
                override fun handle(p0: Array<out Callback>?) {}
                override fun handleError(e: DBusExecutionException) {}
                override fun handle(r: Any?) { response.invoke(r) }
            },
            *arguments.toTypedArray()
        )
    }
}