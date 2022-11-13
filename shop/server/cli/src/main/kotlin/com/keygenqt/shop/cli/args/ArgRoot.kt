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
package com.keygenqt.shop.cli.args

import kotlinx.cli.ArgParser
import kotlinx.cli.ArgType
import kotlinx.cli.ExperimentalCli
import kotlinx.cli.default

@OptIn(ExperimentalCli::class)
class ArgRoot {

    val backup: SubcommandBackup = SubcommandBackup()
    val cleaner: SubcommandCleaner = SubcommandCleaner()
    val notification: SubcommandNotification = SubcommandNotification()

    private val parser = ArgParser("Shop CLI", strictSubcommandOptionsOrder = true).apply {
        subcommands(
            backup,
            cleaner,
            notification,
        )
    }

    val demo by parser.option(
        ArgType.Boolean,
        fullName = "demo",
        description = "Demo multiplatform request"
    ).default(false)

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
