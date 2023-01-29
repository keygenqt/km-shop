package com.keygenqt.shop.pc.client.base

import ch.qos.logback.classic.Logger
import com.keygenqt.shop.base.AESEncryption
import com.keygenqt.shop.data.responses.NotificationAction
import com.keygenqt.shop.data.responses.NotificationResponse
import com.keygenqt.shop.pc.client.services.AppDbusService
import com.keygenqt.shop.pc.client.services.app.AppDbusMethods
import com.keygenqt.shop.services.ServiceRequest
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

    private val log: Logger by inject()
    private val dbus: AppDbusService by inject()
    private val request: ServiceRequest by inject()

    private val client = HttpClient {
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
                        is Frame.Binary -> AESEncryption.decrypt(secret, receive.readBytes())
                            ?.let { value ->
                                val obj = Json.decodeFromString<NotificationResponse>(value)
                                when (obj.action) {
                                    NotificationAction.ORDER_CHANGE -> {
                                        try {
                                            // get count in kmm module
                                            val countNewOrder = request.get.countNewOrder().count
                                            // update state qt app count new order
                                            dbus.call(
                                                AppDbusMethods.UPDATE_ORDER.method,
                                                listOf(secret, UInt32(countNewOrder.toLong()))
                                            )
                                        } catch (e: Exception) {
                                            log.error("Error update new order count")
                                        }
                                    }
                                    NotificationAction.HELP_CHANGE -> {
                                        try {
                                            // get count in kmm module
                                            val countHelpNotChecked =
                                                request.get.countHelpNotChecked().count
                                            // update state qt app count new help message
                                            dbus.call(
                                                AppDbusMethods.UPDATE_HELP.method,
                                                listOf(secret, UInt32(countHelpNotChecked.toLong()))
                                            )
                                        } catch (e: Exception) {
                                            log.error("Error update help messages count")
                                        }
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