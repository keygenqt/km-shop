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
import com.keygenqt.shop.data.responses.AdminRole
import com.keygenqt.shop.db.entities.CategoryEntity
import com.keygenqt.shop.db.entities.toModel
import com.keygenqt.shop.db.entities.toModelWithUploads
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
 * Request update [CategoryEntity]
 */
@Serializable
data class CategoryRequest(
    @field:NotNull
    @field:Size(max = 255, message = "Max size must less 255")
    val key: String,

    @field:NotNull
    @field:Size(max = 255, message = "Max size must less 255")
    val image: String,

    @field:NotNull
    @field:Size(min = 3, max = 255, message = "Size must be between 3 and 255")
    val name: String,

    @field:NotNull
    @field:Size(min = 3, max = 255, message = "Size must be between 3 and 255")
    val desc: String,

    @field:NotNull
    val isPublished: Boolean,

    /**
     * List urls uploads
     */
    val uploads: List<String> = listOf()
)

/**
 * Request update [CategoryEntity]
 */
@Serializable
data class CategoryStateRequest(
    @field:NotNull
    val isPublished: Boolean,
)

fun Route.categories() {

    val categoriesService: CategoriesService by inject()
    val collectionsService: CollectionsService by inject()

    route("/categories") {
        get {
            // check role
            call.checkRoleAuth()
            // act
            val entities = categoriesService.transaction {
                getAll().toModels()
            }
            // response
            call.respond(entities)
        }
        get("/published") {
            // check role
            call.checkRoleFull()
            // act
            val entities = categoriesService.transaction {
                getAllPublished().toModels()
            }
            // response
            call.respond(entities)
        }
        get("/{id}") {
            // check role
            val role = call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            // act
            val response = categoriesService.transaction {
                when (role) {
                    AdminRole.GUEST -> findById(id)?.toModel()
                    else -> findById(id)?.toModelWithUploads()
                } ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
        post {
            // check role
            call.checkRoleAuth()
            // get request
            val request = call.receiveValidate<CategoryRequest>()
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
            val response = categoriesService.transaction {
                insert(
                    key = request.key,
                    name = request.name,
                    desc = request.desc,
                    image = request.image,
                    uploads = request.uploads,
                    isPublished = request.isPublished,
                ).toModelWithUploads()
            }
            // response
            call.respond(response)
        }
        put("/{id}") {
            // check role
            call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            val request = call.receiveValidate<CategoryRequest>()
            // act
            val isHasKeyCategory = categoriesService.transaction {
                checkHashKey(request.key, id)
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
            val response = categoriesService.transaction {
                findById(id)?.update(
                    key = request.key,
                    name = request.name,
                    desc = request.desc,
                    image = request.image,
                    uploads = request.uploads,
                    isPublished = request.isPublished,
                )?.toModelWithUploads() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
        put("/state/{id}") {
            // check role
            call.checkRoleAuth()
            // get request
            val id = call.getNumberParam()
            val request = call.receiveValidate<CategoryStateRequest>()
            // act
            val response = categoriesService.transaction {
                findById(id)?.updateState(
                    isPublished = request.isPublished,
                )?.toModelWithUploads() ?: throw Exceptions.NotFound()
            }
            // response
            call.respond(response)
        }
    }
}
