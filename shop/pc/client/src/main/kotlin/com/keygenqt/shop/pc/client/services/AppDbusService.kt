package com.keygenqt.shop.pc.client.services

import ch.qos.logback.classic.Logger
import com.keygenqt.shop.pc.client.services.app.Pong
import com.keygenqt.shop.pc.client.services.client.TestClass
import com.keygenqt.shop.pc.client.utils.Constants
import com.keygenqt.shop.pc.client.utils.Constants.SERVICE_DBUS_CLIENT
import org.freedesktop.dbus.connections.impl.DBusConnection
import org.freedesktop.dbus.errors.ServiceUnknown
import org.freedesktop.dbus.exceptions.DBusExecutionException
import org.freedesktop.dbus.interfaces.CallbackHandler
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import javax.security.auth.callback.Callback

class AppDbusService private constructor(
    connect: DBusConnection
) : KoinComponent {

    private val logger: Logger by inject()

    companion object {

        /**
         * D-Bus connect
         */
        private val connect: DBusConnection =
            DBusConnection.getConnection(DBusConnection.DBusBusType.SESSION)

        /**
         * Init D-Bus service
         */
        fun init() {
            connect.requestBusName(SERVICE_DBUS_CLIENT)
            connect.exportObject(TestClass())
        }

        private lateinit var instance: AppDbusService
        fun getInstance(): AppDbusService {
            if (::instance.isInitialized) {
                throw RuntimeException("Instance already exist!")
            } else {
                instance = AppDbusService(connect)
                return instance
            }
        }
    }

    /**
     * Object Pong
     */
    private val objPong =
        connect.getRemoteObject(Constants.SERVICE_DBUS_APP, "/", Pong::class.java) as Pong

    /**
     * Methods object [Pong]
     */
    fun callPong(
        method: String,
        arguments: List<Any>,
        response: (Any?) -> Unit = {}
    ) {
        logger.info("D-Bus service call '$method' with params: $arguments")
        connect.callWithCallback(
            objPong,
            method,
            object : javax.security.auth.callback.CallbackHandler, CallbackHandler<Any> {

                override fun handle(p0: Array<out Callback>?) {}

                override fun handle(r: Any?) {
                    response.invoke(r)
                }

                override fun handleError(e: DBusExecutionException) {
                    if (e is ServiceUnknown) {
                        throw RuntimeException("Dbus '${Constants.SERVICE_DBUS_APP}' service not found!")
                    }
                    e.printStackTrace()
                }
            },
            *arguments.toTypedArray()
        )
    }
}