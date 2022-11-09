package com.keygenqt.shop.api.routing

import com.keygenqt.shop.api.security.SessionService
import com.keygenqt.shop.api.security.SessionUser
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.service.AdminsService
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import org.koin.ktor.ext.inject

fun Route.login() {

    val sessionService: SessionService by inject()
    val adminsService: AdminsService by inject()

    get("/login") {
        adminsService.findById(1)?.let { admin ->
            call.sessions.set(
                SessionUser(
                    deviceId = "web",
                    userId = admin.id.value,
                    role = admin.role.name,
                    token = sessionService.generateToken(1),
                )
            )
            call.respond(admin.toModel())
        } ?: run {
            call.respond(HttpStatusCode.Unauthorized)
        }
    }
}