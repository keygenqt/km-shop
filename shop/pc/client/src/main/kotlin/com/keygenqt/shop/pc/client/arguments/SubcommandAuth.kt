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

import kotlinx.cli.ArgType
import kotlinx.cli.ExperimentalCli
import kotlinx.cli.Subcommand
import kotlinx.cli.required

@OptIn(ExperimentalCli::class)
class SubcommandAuth : Subcommand("auth", "User authorization") {

    private var _isInit: Boolean = false

    val isInit get() = _isInit

    val email by option(
        ArgType.String,
        fullName = "email",
        shortName = "e",
        description = "Login user"
    ).required()

    val password by option(
        ArgType.String,
        fullName = "password",
        shortName = "p",
        description = "Password user"
    ).required()

    override fun execute() {
        _isInit = true
    }
}
