package com.keygenqt.shop.pc.client.base

import com.keygenqt.shop.base.AESEncryption
import com.keygenqt.shop.data.responses.NotificationAction
import com.keygenqt.shop.data.responses.NotificationResponse
import com.keygenqt.shop.pc.client.services.AppDbusService
import io.ktor.client.*
import io.ktor.client.plugins.websocket.*
import io.ktor.http.*
import io.ktor.websocket.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.freedesktop.dbus.types.UInt32
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class AppWebSocket(
    val secret: String
) : KoinComponent {

    private val dbus: AppDbusService by inject()

    val client = HttpClient {
        install(WebSockets)
    }

    fun init() {
        runBlocking {
            client.webSocket(
                method = HttpMethod.Get,
                host = "localhost",
                port = 8086,
                path = "/api/websocket/$secret"
            ) {
                while (true) {
                    when (val receive = incoming.receive()) {
                        is Frame.Binary -> AESEncryption.decrypt(secret, receive.readBytes())?.let { value ->
                            val obj = Json.decodeFromString<NotificationResponse>(value)
                            when(obj.action) {
                                NotificationAction.ORDER -> {
                                    // update state qt app count new order
                                    dbus.callPong("updateOrder", listOf(UInt32(obj.count)))
                                }
                                NotificationAction.HELP -> {
                                    // update state qt app count new help message
                                    dbus.callPong("updateHelp", listOf(UInt32(obj.count)))
                                }
                            }
                        }
                        is Frame.Text -> println(receive.readText())
                        else -> {}
                    }
                }
            }
        }
        client.close()
        println("Connection closed. Goodbye!")
    }
}