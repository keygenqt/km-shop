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
package com.keygenqt.shop.api.base

import com.keygenqt.shop.exception.ValidateViolation
import io.ktor.http.*
import jakarta.validation.ConstraintViolation

/**
 * Errors app
 */
sealed class Exceptions(
    open val status: HttpStatusCode,
) : RuntimeException() {

    data class MethodNotAllowed(
        override val status: HttpStatusCode = HttpStatusCode.MethodNotAllowed
    ) : Exceptions(status)

    data class BadRequest(
        override val status: HttpStatusCode = HttpStatusCode.BadRequest
    ) : Exceptions(status)

    data class Unauthorized(
        override val status: HttpStatusCode = HttpStatusCode.Unauthorized
    ) : Exceptions(status)

    data class Forbidden(
        override val status: HttpStatusCode = HttpStatusCode.Forbidden
    ) : Exceptions(status)

    data class NotFound(
        override val status: HttpStatusCode = HttpStatusCode.NotFound
    ) : Exceptions(status)

    data class UnprocessableEntity(
        val validate: Set<ConstraintViolation<*>>,
        override val status: HttpStatusCode = HttpStatusCode.UnprocessableEntity,
    ) : Exceptions(status)

    data class UnprocessableCustomEntity(
        val validate: List<ValidateViolation>,
        override val status: HttpStatusCode = HttpStatusCode.UnprocessableEntity,
    ) : Exceptions(status)

    data class JsonDecodingException(
        override val status: HttpStatusCode = HttpStatusCode.BadRequest
    ) : Exceptions(status)
}
