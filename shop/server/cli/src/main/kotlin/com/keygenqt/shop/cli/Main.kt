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

import com.keygenqt.shop.base.LoaderConfig
import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.cli.features.BackupFeature
import com.keygenqt.shop.cli.features.CleanerFeature
import com.keygenqt.shop.cli.features.DemoFeature
import com.keygenqt.shop.cli.features.NotificationFeature
import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.db.service.RocketsService
import com.keygenqt.shop.services.ServiceRequest
import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory
import org.koin.core.context.startKoin
import org.koin.dsl.module

fun main(args: Array<String>) {

    // load configuration
    val conf: Config = ConfigFactory.load()

    // load configuration app
    val config = LoaderConfig.loadProperties(conf.getString("config.app"))

    // parse arg
    ArgRoot.parse(args)?.let { arguments ->

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
                    single { ServiceRequest() }
                    single { RocketsService(db) }
                }
            )
        }

        // run features
        DemoFeature.init()
        BackupFeature.init()
        CleanerFeature.init()
        NotificationFeature.init()
    }
}
