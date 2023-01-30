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
package com.keygenqt.shop.pc.client

import ch.qos.logback.classic.Level
import ch.qos.logback.classic.Logger
import com.keygenqt.shop.data.responses.SessionCookieResponse
import com.keygenqt.shop.pc.client.arguments.ArgRoot
import com.keygenqt.shop.pc.client.extensions.read
import com.keygenqt.shop.pc.client.extensions.toCookie
import com.keygenqt.shop.pc.client.services.AppDbusService
import com.keygenqt.shop.pc.client.services.client.ClientFeatures
import com.keygenqt.shop.pc.client.utils.Constants.IS_DEVELOPMENT
import com.keygenqt.shop.services.ServiceRequest
import com.keygenqt.shop.utils.constants.AppConstants
import org.apache.commons.lang3.RandomStringUtils
import org.koin.core.context.startKoin
import org.koin.dsl.module
import org.slf4j.LoggerFactory
import java.util.*
import kotlin.system.exitProcess

fun main(args: Array<String>) {

    var secret = System.getenv("SECRET_KEY")

    // logger
    val logger = (LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME) as Logger).apply {
        level = if (IS_DEVELOPMENT) Level.DEBUG else Level.OFF
    }

    // init dbus
    val dbus: AppDbusService = AppDbusService.getInstance(secret)

    // init koin
    startKoin {
        modules(module {
            // Logging app
            single { logger }
            // D-Bus connect
            single { dbus }
            // Client services
            single {
                ServiceRequest(
                    apiUrl = if (IS_DEVELOPMENT) AppConstants.links.API_DEBUG_URL else AppConstants.links.API_URL,
                    cookie = SessionCookieResponse.read()?.toCookie()
                )
            }
        })
    }

    // init app methods
    val methods = ClientFeatures()

    // init CLI
    if (secret === null) {
        ArgRoot.parse(args)?.let {
            when {
                it.auth.isInit -> {
                    when (methods.login(it.auth.email, it.auth.password)) {
                        200 -> println("Authorization was successful. You can start listen with --run (-r) option.")
                        403 -> println("Authorization already done. You can start listen with --run (-r) option.")
                        else -> {
                            println("Authorisation error.")
                            exitProcess(0)
                        }
                    }
                    exitProcess(0)
                }
                it.logout == true -> {
                    methods.logout()
                    println("Logout was successful.")
                    exitProcess(0)
                }
                it.run != true -> {
                    exitProcess(0)
                }
                else -> {}
            }
        }
        // set secret
        secret = "${UUID.randomUUID()}-${RandomStringUtils.randomAlphanumeric(12)}"
    }

    // run listen
    methods.listenWebSocket(secret)
}
