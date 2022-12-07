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
import com.keygenqt.shop.api.extension.*
import com.keygenqt.shop.api.validators.NotNullNotBlank
import com.keygenqt.shop.db.entities.MessageEntity
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.MessagesService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import kotlinx.serialization.Serializable
import org.koin.ktor.ext.inject

/**
 * Request update [MessageEntity]
 */
@Serializable
data class MessageRequest(
    @field:NotNullNotBlank
    @field:Size(min = 3, max = 250, message = "First name must be between 3 and 250")
    val fname: String,

    @field:NotNullNotBlank
    @field:Size(min = 3, max = 250, message = "Last name must be between 3 and 250")
    val lname: String,

    @field:NotNullNotBlank
    @field:Email(message = "Must be a valid Email")
    val email: String,

    @field:Size(min = 0, max = 250, message = "Phone max size 250")
    val phone: String,

    @field:NotNullNotBlank
    @field:Size(min = 3, max = 1000, message = "Message must be between 3 and 1000")
    val message: String,
)

/**
 * Request update [MessageEntity]
 */
@Serializable
data class MessageStateRequest(
    @field:NotNull
    val isChecked: Boolean
)

fun Route.messages() {

    val messagesService: MessagesService by inject()

    route("/messages") {
        get {
            // check role
            call.checkRoleAuth()
            // act
            val entities = messagesService.transaction {
                getAll().toModels()
            }
            // response
            call.respond(entities)
        }
        get("/{id}") {
            // check role
            call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            // act
            val response = messagesService.transaction {
                findById(id)?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
        post {
            // check role
            call.checkRoleFull()
            // get request
            val request = call.receiveValidate<MessageRequest>()
            // act
            val response = messagesService.transaction {
                insert(
                    fname = request.fname,
                    lname = request.lname,
                    email = request.email,
                    phone = request.phone,
                    message = request.message,
                ).toModel()
            }
            // response
            call.respond(response)
        }
        put("/{id}") {
            // check role
            call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            val request = call.receiveValidate<MessageStateRequest>()
            // act
            val response = messagesService.transaction {
                findById(id)?.update(
                    isChecked = request.isChecked,
                )?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
    }
}
