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
package com.keygenqt.shop.base

import java.io.File
import java.util.Properties

class LoaderConfig(
    val properties: Properties
) {
    companion object {
        /**
         * Load file conf
         */
        fun loadProperties(path: String): LoaderConfig {
            val prop = Properties()

            try {
                File(path).let { if (it.isFile) it else null }?.inputStream()?.use {

                    prop.load(it)
                } ?: run {
                    this::class.java.getResourceAsStream(path).use {
                        prop.load(it)
                    }
                }
            } catch (ex: Exception) {
                throw RuntimeException("Failed to read property file", ex)
            }
            return LoaderConfig(prop)
        }
    }

    /**
     * Get props or return null
     */
    inline fun <reified T> getPropOrNull(key: String): T? {
        return when (T::class) {
            String::class -> properties.getProperty(key)?.toString()
            Boolean::class -> properties.getProperty(key)?.toString()?.toBoolean()
            Int::class -> properties.getProperty(key)?.toString()?.toIntOrNull()
            else -> properties.getProperty(key)?.toString()
        } as? T
    }
}
