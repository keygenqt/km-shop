package com.keygenqt.shop.api.routing.security

import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.OrdersService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject

fun Route.orders() {

    val ordersService: OrdersService by inject()

    get("/orders") {
        call.respond(ordersService.transaction {
            getAll().toModels()
        })
    }
}