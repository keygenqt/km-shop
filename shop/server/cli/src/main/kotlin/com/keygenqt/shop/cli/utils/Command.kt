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
package com.keygenqt.shop.cli.utils

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.withContext
import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader

object Command {
    /**
     * Execute command CLI
     */
    suspend fun execute(
        command: String,
        path: String = "./",
        debug: Boolean = false
    ) = coroutineScope {
        if (debug) {
            println(command)
        }
        withContext(Dispatchers.IO) {
            val result = mutableListOf<String>()
            val errors = mutableListOf<String>()
            val process = ProcessBuilder("sh", "-c", command)
                .directory(File(path))
                .start()
            process.waitFor()
            BufferedReader(InputStreamReader(process.inputStream)).forEachLine { result.add(it) }
            BufferedReader(InputStreamReader(process.errorStream)).forEachLine { errors.add(it) }

            if (errors.isNotEmpty() && !(errors.size == 1 && errors.any { it.contains("Warning") })) {
                throw RuntimeException(errors.first())
            }

            result
        }
    }
}
