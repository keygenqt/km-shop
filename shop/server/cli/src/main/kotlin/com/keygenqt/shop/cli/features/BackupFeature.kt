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
package com.keygenqt.shop.cli.features

import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.cli.args.BackupTypes
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.RocketsService
import kotlinx.coroutines.runBlocking
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class BackupFeature : KoinComponent {

    private val arg: ArgRoot by inject()

    private val rocketsService: RocketsService by inject()

    fun runBackupDb() {
        println("Backup DB")
    }

    fun runBackupImages() {
        runBlocking {
            val rockets = rocketsService.transaction {
                getAll().toModels()
            }
            println("Rockets db count: ${rockets.size}")
        }
        println("Backup IMAGES")
    }

    companion object {
        fun init() {
            with(BackupFeature()) {
                if (arg.backup.isInit) {
                    when (arg.backup.type) {
                        BackupTypes.DB, null -> runBackupDb()
                        BackupTypes.IMAGES -> runBackupImages()
                    }
                }
            }
        }
    }
}
