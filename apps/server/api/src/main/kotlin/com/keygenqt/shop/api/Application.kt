package com.keygenqt.shop.api

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.keygenqt.shop.api.plugins.configureRouting
import com.keygenqt.shop.api.plugins.configureSecurity

fun main() {
    embeddedServer(Netty, port = 3001, host = "localhost", module = Application::module)
        .start(wait = true)
}

fun Application.module() {
    configureSecurity()
    configureRouting()
}
