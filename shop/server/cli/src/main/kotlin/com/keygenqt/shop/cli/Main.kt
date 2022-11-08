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

import com.keygenqt.shop.Greeting
import kotlinx.cli.ArgParser
import kotlinx.cli.ArgType
import kotlinx.cli.required

object AppArgParser {
    private val argParser = ArgParser("Shop CLI")

    val output by argParser.option(
        ArgType.String,
        fullName = "output",
        shortName = "o",
        description = "Output argument string"
    ).required()

    fun parse(args: Array<String>) {
        argParser.parse(args)
    }
}

fun main(args: Array<String>) {

    AppArgParser.parse(args)

    println("CLI: " + Greeting().greeting())

    // Try adding program arguments via Run/Debug configuration.
    // Learn more about running applications: https://www.jetbrains.com/help/idea/running-applications.html.
    println("Program arguments: ${AppArgParser.output}")
}
