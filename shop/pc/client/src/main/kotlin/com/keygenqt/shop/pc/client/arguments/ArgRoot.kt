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
package com.keygenqt.shop.pc.client.arguments

import kotlinx.cli.ArgParser
import kotlinx.cli.ArgType
import kotlinx.cli.ExperimentalCli
import kotlinx.cli.default

class ArgRoot {

    val auth: SubcommandAuth = SubcommandAuth()

    @OptIn(ExperimentalCli::class)
    private val parser = ArgParser("Shop client CLI", strictSubcommandOptionsOrder = true).apply {
        subcommands(
            auth
        )
    }

    val run by parser.option(
        ArgType.Boolean,
        fullName = "run",
        shortName = "r",
        description = "Launch client"
    )

    val logout by parser.option(
        ArgType.Boolean,
        fullName = "logout",
        shortName = "l",
        description = "Logout client"
    )

    companion object {
        fun parse(args: Array<String>): ArgRoot? {
            return ArgRoot().let {
                it.parser.parse(if (args.isEmpty()) arrayOf("--help") else args)
                if (args.isEmpty()) {
                    null
                } else {
                    it
                }
            }
        }
    }
}
