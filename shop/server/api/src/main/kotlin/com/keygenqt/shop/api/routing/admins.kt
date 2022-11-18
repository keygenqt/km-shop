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
package com.keygenqt.shop.api.routing

import com.keygenqt.shop.api.base.Exceptions
import com.keygenqt.shop.api.extension.checkRoleAdmin
import com.keygenqt.shop.api.extension.checkRoleAuth
import com.keygenqt.shop.api.extension.getNumberParam
import com.keygenqt.shop.api.extension.receiveValidate
import com.keygenqt.shop.api.validators.NotNullNotBlank
import com.keygenqt.shop.data.responses.AdminRole
import com.keygenqt.shop.db.entities.AdminEntity
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.AdminsService
import io.ktor.http.*
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

    route("/admins") {
        get {
            // check role
            call.checkRoleAuth()
            // act
            val response = adminsService.transaction {
                getAll().toModels()
            }
            // response
            call.respond(response)
        }
        post {
            // check role
            call.checkRoleAdmin()
            // get request
            val request = call.receiveValidate<AdminPostRequest>()
            // act
            val response = adminsService.transaction {
                insert(
                    role = request.role,
                    email = request.email,
                    password = request.password,
                ).toModel()
            }
            // response
            call.respond(response)
        }
        get("/{id}") {
            // check role
            call.checkRoleAdmin()
            // get request
            val id = call.getNumberParam()
            // act
            val response = adminsService.transaction {
                findById(id)?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
        put("/{id}") {
            // check role
            call.checkRoleAdmin()
            // get request
            val id = call.getNumberParam()
            val request = call.receiveValidate<AdminPutRequest>()
            // act
            val response = adminsService.transaction {
                findById(id)?.update(
                    role = request.role,
                    password = request.password,
                )?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
        delete("/{id}") {
            // check role
            call.checkRoleAdmin()
            // get request
            val id = call.getNumberParam()
            // act
            adminsService.transaction {
                findById(id)?.let {
                    if (it.role == AdminRole.ADMIN && countAdmins() <= 1) {
                        // if last admin
                        throw Exceptions.MethodNotAllowed()
                    }
                    it.delete()
                } ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(HttpStatusCode.OK)
        }
    }
}
