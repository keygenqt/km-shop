package com.keygenqt.shop.api.exceptions

import com.keygenqt.shop.api.security.SessionUser
import com.keygenqt.shop.api.utils.AppConstants
import io.ktor.server.sessions.*

/**
 * Configure session
 */
fun SessionsConfig.session(
    secret: String?,
    signKey: String?,
) {
    if (secret != null && signKey != null) {
        cookie<SessionUser>(AppConstants.SESSION_KEY) {
            transform(
                SessionTransportTransformerEncrypt(
                    secret.md5Hex(),
                    signKey.md5Hex()
                )
            )
        }
    } else {
        throw RuntimeException("Error load session secret")
    }
}