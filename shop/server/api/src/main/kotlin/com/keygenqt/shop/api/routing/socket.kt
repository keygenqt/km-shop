/*
 * Copyright 2023 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
