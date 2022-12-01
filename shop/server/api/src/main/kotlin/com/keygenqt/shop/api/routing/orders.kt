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
import com.keygenqt.shop.data.responses.OrderState
import com.keygenqt.shop.db.entities.OrderEntity
import com.keygenqt.shop.db.entities.OrderProductEntity
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.OrdersService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import kotlinx.serialization.Serializable
import org.koin.ktor.ext.inject

/**
 * Request update [OrderEntity]
 */
@Serializable
data class OrderCreateRequest(

    @field:NotNullNotBlank
    val phone: String,

    @field:Email(message = "Must be a valid Email")
    val email: String,

    @field:NotNull
    @field:Size(max = 1000, message = "Max size must less 1000")
    val address: String,

    val products: List<OrderProductRequest> = listOf()
)

/**
 * Request update [OrderEntity]
 */
@Serializable
data class OrderProductRequest(
    @field:NotNullNotBlank
    val productID: Int,
    @field:NotNullNotBlank
    val count: Int,
    @field:NotNullNotBlank
    val price: Double,
)

/**
 * Request update [OrderEntity]
 */
@Serializable
data class OrderCustomerRequest(

    @field:NotNullNotBlank
    val phone: String,

    @field:Email(message = "Must be a valid Email")
    val email: String,

    @field:NotNull
    @field:Size(max = 1000, message = "Max size must less 1000")
    val address: String,
)

/**
 * Request update [OrderEntity]
 */
@Serializable
data class OrderNoteRequest(
    @field:NotNull
    @field:Size(max = 1000, message = "Max size must less 1000")
    val note: String,
)

/**
 * Request state [OrderEntity]
 */
@Serializable
data class OrderStateRequest(
    val state: OrderState,
)

fun Route.orders() {

    val ordersService: OrdersService by inject()

    route("/orders") {
        post("/create") {
            // check role
            call.checkRoleFull()
            // get request
            val request = call.receiveValidate<OrderCreateRequest>()
            // act
            if (request.products.isEmpty()) {
                throw Exceptions.BadRequest()
            }
            val products = ordersService.transaction {
                mutableListOf<OrderProductEntity>().apply {
                    request.products.forEach {
                        add(
                            insertOrderProduct(
                                productID = it.productID,
                                count = it.count,
                                price = it.price,
                            )
                        )
                    }
                }
            }
            val response = ordersService.transaction {
                insert(
                    phone = request.phone,
                    email = request.email,
                    address = request.address,
                    products = products,
                ).toModel()
            }
            // response
            call.respond(response)
        }
        get("/number/{number}") {
            // check role
            call.checkRoleFull()
            // get request
            val number = call.getStringParam("number")
            // act
            val entity = ordersService.transaction {
                findByNumber(number)?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(entity)
        }
        get("/{id}") {
            // check role
            call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            // act
            val entity = ordersService.transaction {
                findById(id)?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(entity)
        }
        get("/new") {
            // check role
            call.checkRoleAuth()
            // act
            val entities = ordersService.transaction {
                getAllNew().toModels()
            }
            // response
            call.respond(entities)
        }
        get("/pending") {
            // check role
            call.checkRoleAuth()
            // act
            val entities = ordersService.transaction {
                getAllPending().toModels()
            }
            // response
            call.respond(entities)
        }
        get("/completed") {
            // check role
            call.checkRoleAuth()
            // act
            val entities = ordersService.transaction {
                getAllCompleted().toModels()
            }
            // response
            call.respond(entities)
        }
        get("/canceled") {
            // check role
            call.checkRoleAuth()
            // act
            val entities = ordersService.transaction {
                getAllCanceled().toModels()
            }
            // response
            call.respond(entities)
        }
        put("/note/{id}") {
            // check role
            call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            val request = call.receiveValidate<OrderNoteRequest>()
            // act
            val response = ordersService.transaction {
                findById(id)?.updateNote(
                    note = request.note,
                )?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
        put("/customer/{id}") {
            // check role
            call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            val request = call.receiveValidate<OrderCustomerRequest>()
            // act
            val response = ordersService.transaction {
                findById(id)?.updateCustomer(
                    email = request.email,
                    phone = request.phone,
                    address = request.address,
                )?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
        put("/state/{id}") {
            // check role
            call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            val request = call.receiveValidate<OrderStateRequest>()
            // act
            val response = ordersService.transaction {
                findById(id)?.updateState(
                    state = request.state,
                )?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
    }
}
