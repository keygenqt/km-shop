package com.keygenqt.shop.api.routing

import com.keygenqt.shop.api.base.SessionWebSocket
import com.keygenqt.shop.api.extension.getStringParam
import com.keygenqt.shop.api.utils.AppHelper.connectionsWebSocket
import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import io.ktor.websocket.*

fun Route.socket() {
    webSocket("/websocket/{secret}") {
        // get request
        val secret = call.getStringParam("secret")

        // create connection
        val connection = SessionWebSocket(
            secret = secret,
            session = this
        )

        // add connection
        connectionsWebSocket += connection

        // listen query
        try {
            send("You are connected to listen!")
            for (frame in incoming) {
                frame as? Frame.Text ?: continue
                val received = frame.readText()
                connectionsWebSocket.forEach {
                    it.session.send(received)
                }
            }
        } catch (e: Exception) {
            println(e.localizedMessage)
        } finally {
            println("Removing $connection!")
            connectionsWebSocket -= connection
        }
    }
}