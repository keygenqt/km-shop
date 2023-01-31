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
package com.keygenqt.shop.db.utils

import org.mindrot.jbcrypt.BCrypt
import kotlin.random.Random

object Password {

    /**
     * Create hash for db
     */
    fun encode(password: String) =
        BCrypt.hashpw(password, BCrypt.gensalt())!!

    /**
     * Validate hash from db
     */
    fun validate(password: String?, hash: String) =
        password?.let { BCrypt.checkpw(password, hash) } ?: false

    /**
     * Generate random password
     */
    fun random(size: Int = 8): String {
        val alphabets = ('A'..'Z') + ('a'..'z') + ('0'..'9') + arrayListOf('_', '-')
        val random = Random(System.nanoTime())
        val password = StringBuilder()
        (1..size).forEach { _ ->
            val index = random.nextInt(alphabets.size)
            password.append(alphabets[index])
        }
        return password.toString()
    }
}
