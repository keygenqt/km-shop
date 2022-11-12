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
package com.keygenqt.shop.api.base

import io.ktor.http.*
import jakarta.validation.ConstraintViolation

/**
 * Errors app
 */
sealed class Errors(
    open val status: HttpStatusCode,
) : RuntimeException() {

    data class BadRequest(
        override val status: HttpStatusCode = HttpStatusCode.BadRequest
    ) : Errors(status)

    data class Unauthorized(
        override val status: HttpStatusCode = HttpStatusCode.Unauthorized
    ) : Errors(status)

    data class NotFound(
        override val status: HttpStatusCode = HttpStatusCode.NotFound
    ) : Errors(status)

    data class UnprocessableEntity(
        val validate: Set<ConstraintViolation<*>>,
        override val status: HttpStatusCode = HttpStatusCode.UnprocessableEntity,
    ) : Errors(status)

    data class JsonDecodingException(
        override val status: HttpStatusCode = HttpStatusCode.BadRequest
    ) : Errors(status)
}
