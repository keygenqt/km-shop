package com.keygenqt.shop.pc.client.services.client

import ch.qos.logback.classic.Logger
import com.keygenqt.shop.data.requests.LoginRequest
import com.keygenqt.shop.exception.ResponseException
import com.keygenqt.shop.pc.client.base.AppWebSocket
import com.keygenqt.shop.pc.client.extensions.checkResponseCount
import com.keygenqt.shop.pc.client.extensions.save
import com.keygenqt.shop.pc.client.extensions.toCookie
import com.keygenqt.shop.pc.client.interfaces.IMethod
import com.keygenqt.shop.pc.client.services.AppDbusService
import com.keygenqt.shop.pc.client.services.app.AppDbusMethods
import com.keygenqt.shop.pc.client.utils.Constants
import com.keygenqt.shop.services.ServiceRequest
import kotlinx.coroutines.*
import org.freedesktop.dbus.annotations.DBusInterfaceName
import org.freedesktop.dbus.interfaces.DBusInterface
import org.freedesktop.dbus.types.UInt32
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import java.io.File
import kotlin.system.exitProcess

enum class ClientFeaturesMethods(override val value: String) : IMethod {
    LOGIN("login"),
    COUNT_NEW_ORDER("getCountNewOrder"),
    COUNT_HELP_NOT_CHECKED("getCountHelpNotChecked"),
    LISTEN_WEB_SOCKET("listenWebSocket"),
    CLOSE_CLIENT("closeApp"),
    LOGOUT("logout"),
}

@DBusInterfaceName("com.keygenqt.shop.client.ClientFeatures")
interface IClientFeatures : DBusInterface {
    fun login(login: String, passw: String): Int
    fun getCountNewOrder(): Int
    fun getCountHelpNotChecked(): Int
    fun listenWebSocket(secret: String)
    fun closeApp()
    fun logout()
}

class ClientFeatures : IClientFeatures, KoinComponent {

    private val request: ServiceRequest by inject()
    private val dbus: AppDbusService by inject()
    private val logger: Logger by inject()

    override fun getObjectPath(): String {
        return "/"
    }

    /**
     * Close app
     */
    override fun closeApp() {
        logger.error("Close client!")
        exitProcess(0)
    }

    /**
     * Remove file cookie
     */
    override fun logout() {
        File(Constants.PATH_COOKIE_FILE).deleteOnExit()
    }

    /**
     * Login user
     */
    override fun login(
        login: String,
        passw: String
    ): Int {
        return runBlocking {
            try {
                val resp = request.post.loginCookie(
                    LoginRequest(
                        email = login,
                        password = passw
                    )
                )
                resp.save()
                request.setCookie(resp.toCookie())
                200
            } catch (e: ResponseException) {
                e.code
            } catch (e: Exception) {
                500
            }
        }
    }

    /**
     * Get count order with status NEW
     * Error has negative code, positive value it's response
     */
    override fun getCountNewOrder(): Int {
        return runBlocking {
            try {
                request.get.countNewOrder().count
            } catch (e: ResponseException) {
                e.code * -1
            } catch (e: Exception) {
                -500
            }
        }
    }

    /**
     * Get count not read message
     * Error has negative code, positive value it's response
     */
    override fun getCountHelpNotChecked(): Int {
        return runBlocking {
            try {
                request.get.countHelpNotChecked().count
            } catch (e: ResponseException) {
                e.code * -1
            } catch (e: Exception) {
                -500
            }
        }
    }

    override fun listenWebSocket(
        secret: String
    ) {
        try {
            println("Server connection...")

            // get count new order and check auth
            val countNewOrder = getCountNewOrder().checkResponseCount()

            // get count message help and check auth
            val countHelpNotChecked = getCountHelpNotChecked().checkResponseCount()

            println("Current data: order status NEW: $countNewOrder, message not read: $countHelpNotChecked.")

            if (System.getenv("SECRET_KEY") === null) {
                AppWebSocket(
                    secret = secret
                ).init(countNewOrder, countHelpNotChecked)
            } else {
                CoroutineScope(Dispatchers.Default).launch {
                    AppWebSocket(
                        secret = secret
                    ).init(countNewOrder, countHelpNotChecked)
                }
            }
        } catch (e: ResponseException) {
            // send app state
            dbus.call(
                AppDbusMethods.INIT_ERROR,
                listOf(secret, UInt32(e.code.toLong()), e.message)
            )
            // print app state
            println(e.message)
            // exit if run CLI
            if (System.getenv("SECRET_KEY") === null) {
                runBlocking {
                    delay(1000)
                    exitProcess(0)
                }
            }
        }
    }
}