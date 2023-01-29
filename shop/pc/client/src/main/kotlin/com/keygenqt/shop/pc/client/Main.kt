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
import com.keygenqt.shop.pc.client.base.AppWebSocket
import com.keygenqt.shop.pc.client.extensions.read
import com.keygenqt.shop.pc.client.extensions.toCookie
import com.keygenqt.shop.pc.client.services.AppDbusService
import com.keygenqt.shop.services.ServiceRequest
import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory
import org.koin.core.context.startKoin
import org.koin.dsl.module
import org.slf4j.LoggerFactory

fun main() {

    val secret = System.getenv("SECRET_KEY")

    if (secret === null) {
        throw RuntimeException("SECRET_KEY environment variable not found!")
    }

    // init dbus service
    AppDbusService.init()

    // load configuration
    val conf: Config = ConfigFactory.load()

    // logger
    val logger = (LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME) as Logger).apply {
        level = if (conf.getBoolean("config.development")) Level.DEBUG else Level.OFF
    }

    // init koin
    startKoin {
        modules(module {
            // Logging app
            single { logger }
            // D-Bus connect
            single { AppDbusService.getInstance() }
            // Client services
            single {
                ServiceRequest(
                    cookie = SessionCookieResponse.read()?.toCookie()
                )
            }
        })
    }

    // run listen socket
    AppWebSocket(
        secret = secret
    ).init()
}
