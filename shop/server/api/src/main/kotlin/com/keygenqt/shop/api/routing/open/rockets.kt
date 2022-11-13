package com.keygenqt.shop.api.routing.open

import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.RocketsService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject

fun Route.rockets() {

    val rocketsService: RocketsService by inject()

    get("/rockets") {
        call.respond(rocketsService.transaction {
            getAllLaunchSuccess().toModels()
        })
    }
}