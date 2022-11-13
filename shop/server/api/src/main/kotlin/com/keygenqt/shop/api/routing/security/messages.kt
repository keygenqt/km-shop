package com.keygenqt.shop.api.routing.security

import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.MessagesService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject

fun Route.messages() {

    val messagesService: MessagesService by inject()

    get("/messages") {
        call.respond(messagesService.transaction {
            getAll().toModels()
        })
    }
}