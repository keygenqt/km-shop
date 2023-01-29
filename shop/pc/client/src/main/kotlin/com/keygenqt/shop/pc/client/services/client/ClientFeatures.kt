package com.keygenqt.shop.pc.client.services.client

import com.keygenqt.shop.data.requests.LoginRequest
import com.keygenqt.shop.pc.client.extensions.save
import com.keygenqt.shop.pc.client.extensions.toCookie
import com.keygenqt.shop.services.ServiceRequest
import kotlinx.coroutines.runBlocking
import org.freedesktop.dbus.annotations.DBusInterfaceName
import org.freedesktop.dbus.interfaces.DBusInterface
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import kotlin.system.exitProcess

@DBusInterfaceName("com.keygenqt.shop.client.ClientFeatures")
interface IClientFeatures : DBusInterface {
    fun closeApp()
    fun login(login: String, passw: String): Boolean
}

class ClientFeatures : IClientFeatures, KoinComponent {

    private val request: ServiceRequest by inject()

    override fun getObjectPath(): String {
        return "/"
    }

    override fun closeApp() {
        exitProcess(0)
    }

    override fun login(
        login: String,
        passw: String
    ): Boolean {
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
                true
            } catch (_: Exception) {
                false
            }
        }
    }
}