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