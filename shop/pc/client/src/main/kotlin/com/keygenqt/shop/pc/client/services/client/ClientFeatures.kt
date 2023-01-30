package com.keygenqt.shop.pc.client.services.client

import ch.qos.logback.classic.Logger
import com.keygenqt.shop.data.requests.LoginRequest
import com.keygenqt.shop.exception.ResponseException
import com.keygenqt.shop.pc.client.extensions.save
import com.keygenqt.shop.pc.client.extensions.toCookie
import com.keygenqt.shop.pc.client.interfaces.IMethod
import com.keygenqt.shop.pc.client.utils.Constants
import com.keygenqt.shop.services.ServiceRequest
import kotlinx.coroutines.runBlocking
import org.freedesktop.dbus.annotations.DBusInterfaceName
import org.freedesktop.dbus.interfaces.DBusInterface
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import java.io.File
import kotlin.system.exitProcess

enum class ClientFeaturesMethods(override val value: String) : IMethod {
    LOGIN("login"),
    COUNT_NEW_ORDER("getCountNewOrder"),
    COUNT_HELP_NOT_CHECKED("getCountHelpNotChecked"),
    CLOSE_CLIENT("closeApp"),
    LOGOUT("logout"),
}

@DBusInterfaceName("com.keygenqt.shop.client.ClientFeatures")
interface IClientFeatures : DBusInterface {
    fun login(login: String, passw: String): Int
    fun getCountNewOrder(): Int
    fun getCountHelpNotChecked(): Int
    fun closeApp()
    fun logout()
}

class ClientFeatures : IClientFeatures, KoinComponent {

    private val request: ServiceRequest by inject()
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
}