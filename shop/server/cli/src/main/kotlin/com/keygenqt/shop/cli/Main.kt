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

import com.keygenqt.shop.cli.args.*
import com.keygenqt.shop.services.ServiceRequest
import kotlinx.coroutines.runBlocking

fun main(args: Array<String>) {

    val arguments = if (args.isEmpty()) arrayOf("--help") else args

    // parse arguments
    ArgRoot.parse(arguments)

    // check if set backup
    if (ArgBackup.isInit) {
        when (ArgBackup.type) {
            BackupTypes.DB -> {
                println("Backup DB")
            }
            BackupTypes.IMAGES -> {
                println("Backup IMAGES")
            }
        }
    }

    // check if set cleaner
    if (ArgCleaner.isInit) {
        when (ArgCleaner.type) {
            CleanerTypes.TOKENS -> {
                println("Cleaner old tokens")
            }
            CleanerTypes.IMAGES -> {
                println("Cleaner images not has in db")
            }
        }
    }

    // check if set notification
    if (ArgNotification.isInit) {
        println("Push firebase notification")
    }

    // Demo multiplatform request
    if (ArgRoot.demo) {
        val request = ServiceRequest()

        println("Loading rockets...")

        runBlocking {
            val rocketsDemoJetBrains = request.get.rocketsDemoJetBrains()
            val rocketsDemoAPI = request.get.rocketsDemoAPI()

            println("Rockets JetBrains count: ${rocketsDemoJetBrains.size}")
            println("Rockets API count: ${rocketsDemoAPI.size}")
        }
    }
}
