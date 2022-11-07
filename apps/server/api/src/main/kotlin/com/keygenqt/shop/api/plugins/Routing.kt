package com.keygenqt.shop.api.plugins

import com.keygenqt.shop.Greeting
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {

    val greeting = Greeting().greeting()

    routing {
        get("/") {
            call.respondText(greeting)
        }
    }
}
