/*
 * Copyright 2023 Vitaliy Zarubin
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
import com.keygenqt.shop.api.extension.checkRoleAuth
import com.keygenqt.shop.api.extension.checkRoleFull
import com.keygenqt.shop.api.extension.getNumberParam
import com.keygenqt.shop.api.extension.receiveValidate
import com.keygenqt.shop.db.entities.CollectionEntity
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.CategoriesService
import com.keygenqt.shop.db.service.CollectionsService
import com.keygenqt.shop.exception.ValidateViolation
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Size
import kotlinx.serialization.Serializable
import org.koin.ktor.ext.inject

/**
 * Request update [CollectionEntity]
 */
@Serializable
data class CollectionRequest(
    @field:NotNull
    @field:Size(max = 255, message = "Max size must less 255")
    val key: String,

    @field:NotNull
    @field:Size(max = 255, message = "Max size must less 255")
    val icon: String,

    @field:NotNull
    @field:Size(min = 3, max = 255, message = "Size must be between 3 and 255")
    val name: String,

    @field:NotNull
    @field:Size(min = 3, max = 255, message = "Size must be between 3 and 255")
    val desc: String,

    @field:NotNull
    val isPublished: Boolean,
)

/**
 * Request update [CollectionEntity]
 */
@Serializable
data class CollectionStateRequest(
    @field:NotNull
    val isPublished: Boolean,
)

fun Route.collections() {

    val categoriesService: CategoriesService by inject()
    val collectionsService: CollectionsService by inject()

    route("/collections") {
        get {
            // check role
            call.checkRoleAuth()
            // act
            val entities = collectionsService.transaction {
                getAll().toModels()
            }
            // response
            call.respond(entities)
        }
        get("/published") {
            // check role
            call.checkRoleFull()
            // act
            val entities = collectionsService.transaction {
                getAllPublished().toModels()
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
            val response = collectionsService.transaction {
                findById(id)?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
        post {
            // check role
            call.checkRoleAuth()
            // get request
            val request = call.receiveValidate<CollectionRequest>()
            // act
            val isHasKeyCategory = categoriesService.transaction {
                checkHashKey(request.key)
            }
            val isHasKeyCollection = collectionsService.transaction {
                checkHashKey(request.key)
            }
            if (isHasKeyCategory || isHasKeyCollection) {
                throw Exceptions.UnprocessableCustomEntity(
                    validate = listOf(
                        ValidateViolation(
                            filed = "key",
                            errors = arrayOf("Key must be unique")
                        )
                    )
                )
            }
            val response = collectionsService.transaction {
                insert(
                    key = request.key,
                    name = request.name,
                    desc = request.desc,
                    icon = request.icon,
                    isPublished = request.isPublished,
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
            val request = call.receiveValidate<CollectionRequest>()
            // act
            val isHasKeyCategory = categoriesService.transaction {
                checkHashKey(request.key)
            }
            val isHasKeyCollection = collectionsService.transaction {
                checkHashKey(request.key, id)
            }
            if (isHasKeyCategory || isHasKeyCollection) {
                throw Exceptions.UnprocessableCustomEntity(
                    validate = listOf(
                        ValidateViolation(
                            filed = "key",
                            errors = arrayOf("Key must be unique")
                        )
                    )
                )
            }
            val response = collectionsService.transaction {
                findById(id)?.update(
                    key = request.key,
                    name = request.name,
                    desc = request.desc,
                    icon = request.icon,
                    isPublished = request.isPublished,
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
            val request = call.receiveValidate<CollectionStateRequest>()
            // act
            val response = collectionsService.transaction {
                findById(id)?.updateState(
                    isPublished = request.isPublished,
                )?.toModel() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
    }
}
