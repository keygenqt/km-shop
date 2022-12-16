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
package com.keygenqt.shop.android.utils

import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Parcelable
import androidx.navigation.NavType
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json

object AppHelper {
    /**
     * Generate custom type
     */
    inline fun <reified T> getType(
        isNullableAllowed: Boolean = true
    ): NavType<T> {
        return object : NavType<T>(
            isNullableAllowed = isNullableAllowed
        ) {
            override fun put(bundle: Bundle, key: String, value: T) {
                bundle.putParcelable(key, value as Parcelable)
            }

            override fun get(bundle: Bundle, key: String): T? = when {
                Build.VERSION.SDK_INT >= 33 -> bundle.getParcelable(key, T::class.java)
                else -> @Suppress("DEPRECATION") bundle.getParcelable(key) as? T
            }

            override fun parseValue(value: String): T {
                return Json.decodeFromString(Uri.decode(value))
            }
        }
    }
}
