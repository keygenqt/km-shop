/*
 * Copyright 2022 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.keygenqt.shop.api.routing.open

import com.keygenqt.shop.api.base.Errors
import com.keygenqt.shop.api.extension.receiveValidate
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
                    userId = it.id.value,
                    role = it.role.name,
                    token = sessionService.generateToken(1),
                )
            )
            call.respond(it)
        } ?: throw Errors.Unauthorized()
    }
}
