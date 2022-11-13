package com.keygenqt.shop.api.routing.security

import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.UploadsService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject

fun Route.uploads() {

    val uploadsService: UploadsService by inject()

    get("/uploads") {
        call.respond(uploadsService.transaction {
            getAll().toModels()
        })
    }
}