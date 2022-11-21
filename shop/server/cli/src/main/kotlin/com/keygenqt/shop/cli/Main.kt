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
package com.keygenqt.shop.cli

import ch.qos.logback.classic.Level.DEBUG
import ch.qos.logback.classic.Level.OFF
import ch.qos.logback.classic.Logger
import com.keygenqt.shop.base.LoaderConfig
import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.cli.features.BackupFeature
import com.keygenqt.shop.cli.features.CleanerFeature
import com.keygenqt.shop.cli.features.PasswordFeature
import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.db.service.AdminsService
import com.keygenqt.shop.db.service.UploadsService
import com.keygenqt.shop.services.ServiceRequest
import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory
import org.koin.core.context.startKoin
import org.koin.dsl.module
import org.slf4j.LoggerFactory

fun main(args: Array<String>) {

    // load configuration
    val conf: Config = ConfigFactory.load()

    // load configuration app
    val config = LoaderConfig.loadProperties(
        conf.getString("config.app"),
        conf.getString("config.dbconfig")
    )

    // parse arg
    ArgRoot.parse(args)?.let { arguments ->

        // logger db
        val logger = (LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME) as Logger).apply {
            level = if (conf.getBoolean("config.development") || arguments.debug) DEBUG else OFF
        }

        // init db app
        val db = DatabaseMysql(
            dbconfig = conf.getString("config.dbconfig")
        )

        // init koin
        startKoin {
            modules(
                module {
                    single { config }
                    single { arguments }
                    // client services
                    single { ServiceRequest() }
                    // db services
                    single { AdminsService(db) }
                    single { UploadsService(db) }
                }
            )
        }

        // run features
        try {
            BackupFeature.init()
            CleanerFeature.init()
            PasswordFeature.init()
        } catch (ex: Exception) {
            println("\n${ex.message}\n")
            logger.error("Error", ex)
        }
    }
}
