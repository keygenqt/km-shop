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

import com.keygenqt.shop.api.extension.authentication
import com.keygenqt.shop.api.extension.configure
import com.keygenqt.shop.api.extension.session
import com.keygenqt.shop.api.routing.open.*
import com.keygenqt.shop.api.security.SessionService
import com.keygenqt.shop.api.utils.AppConstants
import com.keygenqt.shop.api.utils.AppLogger.initAppLogger
import com.keygenqt.shop.base.LoaderConfig
import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.db.service.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import kotlinx.serialization.json.Json
import org.koin.core.context.startKoin
import com.keygenqt.shop.api.routing.security.categories as categoriesSec
import com.keygenqt.shop.api.routing.security.messages as messagesSec
import com.keygenqt.shop.api.routing.security.orders as ordersSec
import com.keygenqt.shop.api.routing.security.products as productsSec
import com.keygenqt.shop.api.routing.security.rockets as rocketsSec
import com.keygenqt.shop.api.routing.security.uploads as uploadsSec
import org.koin.dsl.module as koinModule

fun main(args: Array<String>) {
    embeddedServer(Netty, commandLineEnvironment(args)).start(wait = true)
}

@Suppress("unused")
fun Application.module() {
    with(environment.config) {

        // init logger
        initAppLogger()

        // load config
        val conf = LoaderConfig.loadProperties(this.property("ktor.config.app").getString())

        // init db app
        val db = DatabaseMysql(
            dbconfig = this.property("ktor.config.dbconfig").getString()
        )

        // init koin
        startKoin {
            printLogger()
            modules(
                koinModule {
                    // app config
                    single { conf }

                    // db services
                    single { AdminsService(db) }
                    single { RocketsService(db) }
                    single { CategoriesService(db) }
                    single { MessagesService(db) }
                    single { OrdersService(db) }
                    single { ProductsService(db) }
                    single { UploadsService(db) }

                    // session service
                    single {
                        SessionService(
                            db = db,
                            secret = conf.getPropOrNull("secret")
                        )
                    }
                }
            )
        }

        // init session
        install(Sessions) {
            session(
                secret = conf.getPropOrNull("secret"),
                signKey = conf.getPropOrNull("signKey")
            )
        }

        // init auth
        install(Authentication) {
            authentication()
        }

        // catch errors
        install(StatusPages) {
            configure()
        }

        // init json
        install(ContentNegotiation) {
            json(
                Json {
                    prettyPrint = true
                    isLenient = true
                    ignoreUnknownKeys = true
                    coerceInputValues = true
                }
            )
        }

        // init routing
        install(Routing) {

            // static files
            static("/static") {
                staticBasePackage = "static"
                resources(".")
            }

            // root
            main()

            route("/api") {
                // guest
                login()
                greeting()
                rockets()
                categories()
                products()
                // user
                authenticate(AppConstants.SESSION_KEY) {
                    route("/sec") {
                        rocketsSec()
                        categoriesSec()
                        productsSec()
                        ordersSec()
                        messagesSec()
                        uploadsSec()
                    }
                }
            }
        }
    }
}
