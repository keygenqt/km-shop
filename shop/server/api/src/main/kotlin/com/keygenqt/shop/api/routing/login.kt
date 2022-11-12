package com.keygenqt.shop.api.routing

import com.keygenqt.shop.api.base.Errors
import com.keygenqt.shop.api.exceptions.receiveValidate
import com.keygenqt.shop.api.security.SessionService
import com.keygenqt.shop.api.security.SessionUser
import com.keygenqt.shop.api.validators.NotNullNotBlank
import com.keygenqt.shop.db.service.AdminsService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.Size
import kotlinx.serialization.Serializable
import org.koin.ktor.ext.inject

@Serializable
private data class Request(
    @field:NotNullNotBlank
    @field:Email(message = "Must be a valid email")
    val email: String? = null,

    @field:NotNullNotBlank
    @field:Size(min = 8, max = 12, message = "Size must be between 8 and 12")
    val password: String? = null
)

fun Route.login() {

    val sessionService: SessionService by inject()
    val adminsService: AdminsService by inject()

    post("/login") {

        val request = call.receiveValidate<Request>()

        adminsService.findUserByAuth(
            email = request.email,
            password = request.password
        )?.let {
            call.sessions.set(
                SessionUser(
                    userId = it.id,
                    role = it.role.name,
                    token = sessionService.generateToken(1),
                )
            )
            call.respond(it)
        } ?: throw Errors.Unauthorized()
    }
}