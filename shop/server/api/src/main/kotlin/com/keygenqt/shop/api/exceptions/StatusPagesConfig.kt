package com.keygenqt.shop.api.exceptions

import com.keygenqt.shop.api.base.Errors
import com.keygenqt.shop.exception.ErrorResponse
import io.ktor.http.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*

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
        if (cause is Errors.UnprocessableEntity) {
            with(cause.status) {
                call.respond(
                    status = this,
                    message = ErrorResponse(value, description, cause.validate.toListModels())
                )
            }
        } else if (cause is Errors) {
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
            with(Errors.JsonDecodingException().status) {
                call.respond(
                    status = this,
                    message = ErrorResponse(value, description)
                )
            }
        } else {
            call.respond(
                status = HttpStatusCode.InternalServerError,
                message = cause.message ?: HttpStatusCode.InternalServerError.description
            )
        }
    }
}