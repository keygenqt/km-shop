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

import com.keygenqt.shop.api.base.Errors
import com.keygenqt.shop.api.security.SessionService
import com.keygenqt.shop.api.security.SessionUser
import com.keygenqt.shop.api.utils.AppConstants
import io.ktor.server.auth.*
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
            throw Errors.Unauthorized()
        }
    }
}