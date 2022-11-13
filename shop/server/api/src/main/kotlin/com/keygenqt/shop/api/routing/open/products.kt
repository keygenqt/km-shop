package com.keygenqt.shop.api.routing.open

import com.keygenqt.shop.api.base.Errors
import com.keygenqt.shop.api.extension.getNumberParam
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.ProductsService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject

fun Route.products() {

    val productsService: ProductsService by inject()

    get("/products") {
        call.respond(productsService.transaction {
            getAllPublished().toModels()
        })
    }

    get("/products/{id}") {
        call.respond(productsService.transaction {
            getByIdPublished(call.getNumberParam())?.toModel() ?: throw Errors.NotFound()
        })
    }
}