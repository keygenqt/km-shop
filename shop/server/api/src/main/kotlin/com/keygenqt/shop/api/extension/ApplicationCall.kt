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
package com.keygenqt.shop.api.extension

import com.keygenqt.shop.api.base.Exceptions
import com.keygenqt.shop.api.security.SessionUser
import com.keygenqt.shop.data.responses.AdminRole
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.sessions.*
import jakarta.validation.Validation

/**
 * Get request with validate
 */
suspend inline fun <reified T : Any> ApplicationCall.receiveValidate(): T {
    val request = try {
        receive<T>()
    } catch (ex: Exception) {
        throw Exceptions.BadRequest()
    }

    val validate = Validation.buildDefaultValidatorFactory().validator.validate(request)

    if (validate.isEmpty()) {
        return request
    } else {
        throw Exceptions.UnprocessableEntity(validate)
    }
}

/**
 * Get value from params with validate
 */
fun ApplicationCall.getNumberParam(key: String = "id"): Int = parameters[key]
    ?.toIntOrNull() ?: throw Exceptions.NotFound()

/**
 * Get value from params with validate
 */
fun ApplicationCall.getStringParam(key: String = "name"): String = parameters[key]
    ?: throw throw Exceptions.NotFound()


/**
 * Check role auth is ADMIN
 */
fun ApplicationCall.checkRoleAdmin() {
    val session = sessions.get<SessionUser>()
    if (session == null || session.role != AdminRole.ADMIN.name) {
        throw Exceptions.Forbidden()
    }
}

/**
 * Check is not auth user
 */
fun ApplicationCall.isNotAuth() = sessions.get<SessionUser>() == null

/**
 * Get unique connect
 */
fun ApplicationCall.connectKey() = request.host().md5()
