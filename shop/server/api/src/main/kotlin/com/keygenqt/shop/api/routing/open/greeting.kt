package com.keygenqt.shop.api.routing.open

import com.keygenqt.shop.Greeting
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.greeting() {

    val greeting = Greeting().greeting()

    get("/greeting") {
        call.respondText("Greeting: $greeting")
    }
}