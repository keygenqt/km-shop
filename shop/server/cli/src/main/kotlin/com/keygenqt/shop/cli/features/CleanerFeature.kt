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
import com.keygenqt.shop.db.service.UploadsService
import kotlinx.coroutines.runBlocking
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import java.io.File

class CleanerFeature : KoinComponent {

    private val arg: ArgRoot by inject()

    private val uploadsService: UploadsService by inject()

    fun runClearFiles() {
        runBlocking {
            val uploads = uploadsService.transaction {
                getAllWithoutRelations()
            }
            uploads.forEach { upload ->
                // delete files
                val file = File("uploads/${upload.fileName}")
                if (file.exists()) {
                    file.delete()
                }
                // delete row
                uploadsService.transaction {
                    upload.delete()
                }
            }
            if (uploads.isEmpty()) {
                println("\nNot found files for remove.\n")
            } else {
                println("\nRemove files (${uploads.size}) successfully.\n")
            }
        }
    }

    companion object {
        fun init() {
            with(CleanerFeature()) {
                if (arg.cleaner.isInit) {
                    runClearFiles()
                }
            }
        }
    }
}
