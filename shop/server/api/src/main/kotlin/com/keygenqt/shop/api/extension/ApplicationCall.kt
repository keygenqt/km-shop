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
import com.keygenqt.shop.api.utils.AppHelper
import com.keygenqt.shop.base.AESEncryption
import com.keygenqt.shop.data.responses.AdminRole
import com.keygenqt.shop.data.responses.NotificationAction
import com.keygenqt.shop.data.responses.NotificationResponse
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.sessions.*
import io.ktor.websocket.*
import jakarta.validation.Validation
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

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
 * Get value from params with validate
 */
infix fun ApplicationCall.getQueryParam(key: String) =
    request.queryParameters[key] ?: throw throw Exceptions.NotFound()

/**
 * Get value from params with validate
 */
fun ApplicationCall.getNumbersQueryParam(key: String = "ids") =
    request.queryParameters.entries().find { it.key == key }?.value?.mapNotNull { it.toIntOrNull() }
        ?: throw throw Exceptions.NotFound()

/**
 * Get value from params with validate
 */
fun ApplicationCall.getDoublesQueryParam(key: String = "ids") =
    request.queryParameters.entries().find { it.key == key }?.value?.mapNotNull { it.toDoubleOrNull() }
        ?: throw throw Exceptions.NotFound()

/**
 * Check role
 */
fun ApplicationCall.checkRole(vararg roles: AdminRole): AdminRole {
    val session = sessions.get<SessionUser>()
    val role = if (session == null) AdminRole.GUEST else AdminRole.valueOf(session.role)
    if (!roles.contains(role)) throw Exceptions.Forbidden()
    return role
}

/**
 * All roles allowed
 */
fun ApplicationCall.checkRoleFull(): AdminRole {
    return checkRole(AdminRole.MANAGER, AdminRole.ADMIN, AdminRole.GUEST)
}

/**
 * Auth roles allowed
 */
fun ApplicationCall.checkRoleAuth(): AdminRole {
    return checkRole(AdminRole.MANAGER, AdminRole.ADMIN)
}

/**
 * Admin role allowed
 */
fun ApplicationCall.checkRoleAdmin(): AdminRole {
    return checkRole(AdminRole.ADMIN)
}

/**
 * Manager role allowed
 */
fun ApplicationCall.checkRoleManager(): AdminRole {
    return checkRole(AdminRole.MANAGER)
}

/**
 * Guest role allowed
 */
fun ApplicationCall.checkRoleGuest(): AdminRole {
    return checkRole(AdminRole.GUEST)
}

/**
 * Get unique connect
 */
fun ApplicationCall.connectKey() = request.host().md5()

/**
 * Send message to websocket
 */
suspend fun ApplicationCall.sendMessageSocket(
    notification: NotificationResponse
) {
    AppHelper.connectionsWebSocket.forEach { connection ->
        AESEncryption.encrypt(connection.secret, Json.encodeToString(notification))?.let { bytes ->
            connection.session.send(bytes)
        }
    }
}