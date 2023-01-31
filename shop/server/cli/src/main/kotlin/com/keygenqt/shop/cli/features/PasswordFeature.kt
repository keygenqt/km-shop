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
package com.keygenqt.shop.cli.features

import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.db.service.AdminsService
import com.keygenqt.shop.db.utils.Password
import kotlinx.coroutines.runBlocking
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class PasswordFeature : KoinComponent {

    private val arg: ArgRoot by inject()
    private val adminsService: AdminsService by inject()

    /**
     * Update password random
     */
    suspend fun updatePassword(email: String) =
        updatePassword(email, Password.random())

    /**
     * Update password
     */
    suspend fun updatePassword(email: String, password: String) {

        if (password.length < 8 || password.length > 12) {
            throw RuntimeException("Password size must be between 8 and 12")
        }

        // find user
        val admin = adminsService.transaction {
            findByEmail(email)
        } ?: throw RuntimeException("User with email '$email' not found")

        adminsService.transaction {
            admin.password = Password.encode(password)
        }

        println("\nPassword updated successfully: $password\n")
    }

    companion object {
        fun init() {
            with(PasswordFeature()) {
                if (arg.password.isInit) {
                    runBlocking {
                        arg.password.password?.let {
                            updatePassword(arg.password.email, it)
                        } ?: run {
                            updatePassword(arg.password.email)
                        }
                    }
                }
            }
        }
    }
}
