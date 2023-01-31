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
package com.keygenqt.shop.api.utils

import com.keygenqt.shop.api.base.SessionWebSocket
import io.ktor.server.application.*
import io.ktor.server.routing.*
import io.ktor.websocket.*
import java.util.*

object AppHelper {
    /**
     * Connections WebSocket session
     */
    val connectionsWebSocket: MutableSet<SessionWebSocket> =
        Collections.synchronizedSet(LinkedHashSet())
}
