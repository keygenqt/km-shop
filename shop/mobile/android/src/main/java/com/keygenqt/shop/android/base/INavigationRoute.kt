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
package com.keygenqt.shop.android.base

import android.net.Uri
import androidx.navigation.NamedNavArgument
import java.math.BigInteger
import java.security.MessageDigest
import kotlin.reflect.KVisibility
import kotlin.reflect.full.memberProperties

interface INavigationRoute {

    /**
     * Builder with path
     */
    fun routeBuild(params: (Uri.Builder.() -> Unit)? = null) = Uri.Builder().apply {
        appendPath(path())
        params?.invoke(this)
    }.build().toString()

    /**
     * Get route
     */
    fun route() = routeBuild {
        this@INavigationRoute::class.memberProperties.map {
            appendQueryParameter(it.name, "{${it.name}}")
        }
    }

    /**
     * Get arguments list
     */
    fun arguments(): List<NamedNavArgument> {
        return this@INavigationRoute::class.memberProperties.mapNotNull {
            if (it.visibility == KVisibility.PUBLIC) {
                it.getter.call(this@INavigationRoute) as? NamedNavArgument
            } else {
                null
            }
        }
    }

    /**
     * Generate path
     */
    private fun path(): String = md5(this::class.toString())

    /**
     * Create unique path
     */
    private fun md5(input: String): String {
        val md = MessageDigest.getInstance("MD5")
        return BigInteger(1, md.digest(input.toByteArray())).toString(16).padStart(32, '0')
    }
}
