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
package com.keygenqt.shop.api.utils

import io.ktor.server.application.*
import io.ktor.server.plugins.callloging.*
import io.ktor.util.logging.*
import org.slf4j.LoggerFactory
import org.slf4j.event.Level

object AppLogger {

    var isDebug: Boolean = false
        private set

    lateinit var log: Logger
        private set

    fun Application.initAppLogger() {
        // init conf
        with(environment.config) {
            isDebug = propertyOrNull("ktor.development")?.getString().toBoolean()
        }

        // logger db
        (LoggerFactory.getLogger(ch.qos.logback.classic.Logger.ROOT_LOGGER_NAME) as ch.qos.logback.classic.Logger).apply {
            level = if (isDebug) ch.qos.logback.classic.Level.DEBUG else ch.qos.logback.classic.Level.OFF
        }

        // configuration
        install(CallLogging) {
            level = if (isDebug) Level.DEBUG else Level.ERROR
        }

        // save const log
        AppLogger.log = log
    }
}
