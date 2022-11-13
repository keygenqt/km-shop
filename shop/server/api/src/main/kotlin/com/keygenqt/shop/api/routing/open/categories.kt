package com.keygenqt.shop.api.routing.open

import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.CategoriesService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject

fun Route.categories() {

    val categoriesService: CategoriesService by inject()

    get("/categories") {
        call.respond(categoriesService.transaction {
            getAllPublished().toModels()
        })
    }
}