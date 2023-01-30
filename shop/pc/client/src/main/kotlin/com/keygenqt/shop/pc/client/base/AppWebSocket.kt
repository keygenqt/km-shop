package com.keygenqt.shop.pc.client.base

import ch.qos.logback.classic.Logger
import com.keygenqt.shop.base.AESEncryption
import com.keygenqt.shop.data.responses.NotificationAction
import com.keygenqt.shop.data.responses.NotificationResponse
import com.keygenqt.shop.exception.ResponseException
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
import kotlin.system.exitProcess

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
        try {
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
                                                // print output
                                                println("Update orders. New count: $countNewOrder.")
                                                // update state qt app count new order
                                                dbus.call(
                                                    AppDbusMethods.UPDATE_ORDER,
                                                    listOf(secret, UInt32(countNewOrder.toLong()))
                                                )
                                            } catch (e: ResponseException) {
                                                println("\nThe orders have been updated.")
                                                if (e.code == 403) {
                                                    println("It was not possible to get the quantity, authorization is required.")
                                                }
                                                log.error(e.message)
                                            } catch (e: Exception) {
                                                log.error("Error update orders count.")
                                            }
                                        }
                                        NotificationAction.HELP_CHANGE -> {
                                            try {
                                                // get count in kmm module
                                                val countHelpNotChecked =
                                                    request.get.countHelpNotChecked().count
                                                // print output
                                                println("Update help messages. New count: $countHelpNotChecked.")
                                                // update state qt app count new help message
                                                dbus.call(
                                                    AppDbusMethods.UPDATE_HELP,
                                                    listOf(secret, UInt32(countHelpNotChecked.toLong()))
                                                )
                                            } catch (e: ResponseException) {
                                                println("\nThe messages have been updated.")
                                                if (e.code == 403) {
                                                    println("It was not possible to get the quantity, authorization is required.")
                                                }
                                                log.error(e.message)
                                            } catch (e: Exception) {
                                                log.error("Error update help messages count.")
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
        } catch (_: Exception) {}
        client.close()
        println("Failed to connect to the server. Try later.")
        exitProcess(0)
    }
}