package com.keygenqt.shop.api.routing.security

import com.keygenqt.shop.api.base.Errors
import com.keygenqt.shop.api.extension.getNumberParam
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.entities.toModelWithUploads
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.entities.toModelsWithUploads
import com.keygenqt.shop.db.service.ProductsService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject

fun Route.products() {

    val productsService: ProductsService by inject()

    get("/products") {
        call.respond(productsService.transaction {
            getAll().toModels()
        })
    }

    get("/products/uploads") {
        call.respond(productsService.transaction {
            getAll().toModelsWithUploads()
        })
    }

    get("/products/{id}") {
        call.respond(productsService.transaction {
            getById(call.getNumberParam())?.toModel() ?: throw Errors.NotFound()
        })
    }

    get("/products/uploads/{id}") {
        call.respond(productsService.transaction {
            getById(call.getNumberParam())?.toModelWithUploads() ?: throw Errors.NotFound()
        })
    }
}