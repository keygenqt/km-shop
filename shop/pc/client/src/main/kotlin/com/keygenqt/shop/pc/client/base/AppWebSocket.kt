package com.keygenqt.shop.pc.client.base

import ch.qos.logback.classic.Logger
import com.keygenqt.shop.base.AESEncryption
import com.keygenqt.shop.data.responses.NotificationAction
import com.keygenqt.shop.data.responses.NotificationResponse
import com.keygenqt.shop.exception.ResponseException
import com.keygenqt.shop.pc.client.services.AppDbusService
import com.keygenqt.shop.pc.client.services.app.AppDbusMethods
import com.keygenqt.shop.pc.client.utils.Constants
import com.keygenqt.shop.services.ServiceRequest
import com.keygenqt.shop.utils.constants.AppConstants
import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory
import io.ktor.client.*
import io.ktor.client.plugins.*
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

    fun init(countNewOrder: Int, countHelpNotChecked: Int) {
        try {
            runBlocking {
                val block: suspend DefaultClientWebSocketSession.() -> Unit = {
                    while (true) {
                        when (val receive = incoming.receive()) {
                            is Frame.Binary -> AESEncryption.decrypt(secret, receive.readBytes())
                                ?.let { value ->
                                    val obj = Json.decodeFromString<NotificationResponse>(value)
                                    when (obj.action) {
                                        NotificationAction.ORDER_CHANGE -> {
                                            try {
                                                // get count in kmm module
                                                val response = request.get.countNewOrder().count
                                                // print output
                                                println("Update orders. New count: $response.")
                                                // update state qt app count new order
                                                dbus.call(
                                                    AppDbusMethods.UPDATE_ORDER,
                                                    listOf(secret, UInt32(response.toLong()))
                                                )
                                            } catch (e: ResponseException) {
                                                log.error(e.getLocalizedMessage())
                                            } catch (e: Exception) {
                                                log.error("Error update orders count.")
                                            }
                                        }
                                        NotificationAction.HELP_CHANGE -> {
                                            try {
                                                // get count in kmm module
                                                val response =
                                                    request.get.countHelpNotChecked().count
                                                // print output
                                                println("Update help messages. New count: $response.")
                                                // update state qt app count new help message
                                                dbus.call(
                                                    AppDbusMethods.UPDATE_HELP,
                                                    listOf(secret, UInt32(response.toLong()))
                                                )
                                            } catch (e: ResponseException) {
                                                log.error(e.getLocalizedMessage())
                                            } catch (e: Exception) {
                                                log.error("Error update help messages count.")
                                            }
                                        }
                                    }
                                }
                            is Frame.Text -> {
                                // only init call string
                                println(receive.readText())
                                // send app state
                                dbus.call(
                                    AppDbusMethods.INIT_SUCCESS,
                                    listOf(
                                        secret,
                                        UInt32(countNewOrder.toLong()),
                                        UInt32(countHelpNotChecked.toLong())
                                    )
                                )
                            }
                            else -> {}
                        }
                    }
                }
                if (Constants.IS_DEVELOPMENT) {
                    client.ws(
                        method = HttpMethod.Get,
                        host = Constants.GET_DOMAIN,
                        port = 8086,
                        path = "/api/websocket/$secret",
                        block = block
                    )
                } else {
                    client.wss(
                        method = HttpMethod.Get,
                        host = Constants.GET_DOMAIN,
                        port = 443,
                        path = "/api/websocket/$secret",
                        block = block
                    )
                }
            }
            client.close()
        } catch (e: Exception) {
            e.printStackTrace()
            throw ResponseException(500, "Failed to connect to the server. Try later.")
        }
    }
}