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
    CLOSE_CLIENT("closeApp"),
    LOGIN("login")
}

@DBusInterfaceName("com.keygenqt.shop.client.ClientFeatures")
interface IClientFeatures : DBusInterface {
    fun closeApp()
    fun login(login: String, passw: String): Int
    fun logout()
}

class ClientFeatures : IClientFeatures, KoinComponent {

    private val request: ServiceRequest by inject()
    private val logger: Logger by inject()

    override fun getObjectPath(): String {
        return "/"
    }

    override fun closeApp() {
        logger.error("Close client!")
        exitProcess(0)
    }

    override fun logout() {
        File(Constants.PATH_COOKIE_FILE).deleteOnExit()
    }

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
}