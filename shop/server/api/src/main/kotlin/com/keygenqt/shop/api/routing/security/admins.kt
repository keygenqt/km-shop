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
package com.keygenqt.shop.api.routing.security

import com.keygenqt.shop.api.base.Errors
import com.keygenqt.shop.api.extension.checkRoleAdmin
import com.keygenqt.shop.api.extension.getNumberParam
import com.keygenqt.shop.api.extension.receiveValidate
import com.keygenqt.shop.api.validators.NotNullNotBlank
import com.keygenqt.shop.data.responses.AdminRole
import com.keygenqt.shop.db.entities.AdminEntity
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.AdminsService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import kotlinx.serialization.Serializable
import org.koin.ktor.ext.inject

/**
 * Request create [AdminEntity]
 */
@Serializable
data class AdminPostRequest(

    @field:NotNullNotBlank
    @field:Email(message = "Must be a valid Email")
    val email: String,

    @field:NotNull(message = "Select role required")
    val role: AdminRole,

    @field:NotNullNotBlank
    @field:Size(min = 8, max = 12, message = "Size must be between 8 and 12")
    val password: String
)

/**
 * Request update [AdminEntity]
 */
@Serializable
data class AdminPutRequest(
    @field:NotNull(message = "Select role required")
    val role: AdminRole,

    @field:Size(min = 8, max = 12, message = "Size must be between 8 and 12")
    val password: String? = null
)

fun Route.admins() {

    val adminsService: AdminsService by inject()

    // get list entities
    get("/admins") {
        call.checkRoleAdmin().respond(
            adminsService.transaction {
                getAll().toModels()
            }
        )
    }

    // create entity
    post("/admins") {
        // get request
        val request = call.receiveValidate<AdminPostRequest>()
        // response
        call.checkRoleAdmin().respond(
            adminsService.transaction {
                insert(
                    role = request.role,
                    email = request.email,
                    password = request.password,
                ).toModel()
            }
        )
    }

    // get entity
    get("/admins/{id}") {
        call.checkRoleAdmin().respond(
            adminsService.transaction {
                findById(call.getNumberParam())?.toModel() ?: throw Errors.NotFound()
            }
        )
    }

    // update entity
    put("/admins/{id}") {
        // get request
        val request = call.receiveValidate<AdminPutRequest>()
        // response
        call.checkRoleAdmin().respond(
            adminsService.transaction {
                findById(call.getNumberParam())?.update(
                    role = request.role,
                    password = request.password,
                )?.toModel() ?: throw Errors.NotFound()
            }
        )
    }
}
