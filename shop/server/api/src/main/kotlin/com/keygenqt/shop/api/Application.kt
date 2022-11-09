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
package com.keygenqt.shop.api

import com.keygenqt.shop.api.routing.greeting
import com.keygenqt.shop.api.routing.main
import com.keygenqt.shop.api.routing.rockets
import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.db.service.RocketsService
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.routing.*
import kotlinx.serialization.json.Json
import org.koin.core.context.startKoin
import org.koin.dsl.module as koinModule

fun main(args: Array<String>) {
    embeddedServer(Netty, commandLineEnvironment(args)).start(wait = true)
}

fun Application.module() {
    // init db app
    val db = DatabaseMysql()

    // init koin
    startKoin {
        printLogger()
        modules(koinModule {
            single { RocketsService(db) }
        })
    }

    install(ContentNegotiation) {
        json(Json {
            prettyPrint = true
            isLenient = true
            ignoreUnknownKeys = true
            coerceInputValues = true
        })
    }

    // init routing
    install(Routing) {
        main()
        rockets()
        greeting()
    }
}
