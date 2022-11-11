package com.keygenqt.shop.api.exceptions

import com.keygenqt.shop.api.security.SessionService
import com.keygenqt.shop.api.security.SessionUser
import com.keygenqt.shop.api.utils.AppConstants
import com.keygenqt.shop.services.error.ResponseErrorModel
import io.ktor.http.*
import io.ktor.server.auth.*
import io.ktor.server.response.*
import org.koin.java.KoinJavaComponent.inject

fun AuthenticationConfig.authentication() {

    val sessionService: SessionService by inject(SessionService::class.java)

    session<SessionUser>(AppConstants.SESSION_KEY) {
        validate { session ->
            sessionService.verify(session.token)?.let { userId ->
                sessionService.findUserByID(userId)?.let {
                    return@validate session
                }
            }
            null
        }
        challenge {
            call.respond(
                status = HttpStatusCode.Unauthorized,
                message = ResponseErrorModel(
                    code = HttpStatusCode.Unauthorized.value,
                    message = HttpStatusCode.Unauthorized.description
                )
            )
        }
    }
}