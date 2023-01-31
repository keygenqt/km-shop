/*
 * Copyright 2023 Vitaliy Zarubin
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

import kotlinx.cli.*

@OptIn(ExperimentalCli::class)
class SubcommandPassword : Subcommand("password", "Password update") {

    private var _isInit: Boolean = false

    val isInit get() = _isInit

    val email by option(
        ArgType.String,
        fullName = "email",
        shortName = "e",
        description = "Email user for update password"
    ).required()

    val password by option(
        ArgType.String,
        fullName = "password",
        shortName = "p",
        description = "Set custom password"
    )

    override fun execute() {
        _isInit = true
    }
}
