package com.keygenqt.shop.api.base

import io.ktor.websocket.*

/**
 * Session data connect
 */
data class SessionWebSocket(
    val secret: String,
    val session: DefaultWebSocketSession
)