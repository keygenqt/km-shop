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
package com.keygenqt.shop.api.extension

import com.keygenqt.shop.api.base.Exceptions
import com.keygenqt.shop.api.utils.AppLogger
import com.keygenqt.shop.exception.ErrorResponse
import io.ktor.http.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*
import io.ktor.util.logging.*

/**
 * Catch errors
 */
fun StatusPagesConfig.configure() {
    status(HttpStatusCode.Unauthorized, HttpStatusCode.NotFound) { call, cause ->
        call.respond(
            status = cause,
            message = ErrorResponse(
                code = cause.value,
                message = cause.description
            )
        )
    }
    exception<Throwable> { call, cause ->
        if (cause is Exceptions.UnprocessableCustomEntity) {
            with(cause.status) {
                call.respond(
                    status = this,
                    message = ErrorResponse(value, description, cause.validate)
                )
            }
        } else if (cause is Exceptions.UnprocessableEntity) {
            with(cause.status) {
                call.respond(
                    status = this,
                    message = ErrorResponse(value, description, cause.validate.toListModels())
                )
            }
        } else if (cause is Exceptions) {
            with(cause.status) {
                call.respond(
                    status = this,
                    message = ErrorResponse(value, description)
                )
            }
        } else if (
            cause::class.simpleName == "JsonDecodingException" ||
            cause::class.simpleName == "MissingFieldException"
        ) {
            with(Exceptions.JsonDecodingException().status) {
                call.respond(
                    status = this,
                    message = ErrorResponse(value, description)
                )
            }
        } else {
            AppLogger.log.error(cause)
            call.respond(
                status = HttpStatusCode.InternalServerError,
                message = cause.message ?: HttpStatusCode.InternalServerError.description
            )
        }
    }
}
