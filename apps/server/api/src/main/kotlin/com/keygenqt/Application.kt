package com.keygenqt

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.keygenqt.plugins.*

fun main() {
    embeddedServer(Netty, port = 3001, host = "localhost", module = Application::module)
        .start(wait = true)
}

fun Application.module() {
    configureSecurity()
    configureRouting()
}
