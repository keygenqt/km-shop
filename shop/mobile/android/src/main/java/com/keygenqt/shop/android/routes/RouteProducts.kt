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
package com.keygenqt.shop.android.routes

import androidx.navigation.NamedNavArgument
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.keygenqt.shop.android.base.INavigationRoute

object RouteProducts : INavigationRoute {

    val title: NamedNavArgument = navArgument(::title.name) {
        type = NavType.StringType
    }

    val categoryID: NamedNavArgument = navArgument(::categoryID.name) {
        type = NavType.IntType
        defaultValue = 0
    }

    val collectionID: NamedNavArgument = navArgument(::collectionID.name) {
        type = NavType.IntType
        defaultValue = 0
    }

    /**
     * Generate route with params value
     */
    fun link(
        title: String,
        categoryID: Int? = null,
        collectionID: Int? = null,
    ) = routeBuild {
        appendQueryParameter(::title.name, title)
        categoryID?.let { appendQueryParameter(::categoryID.name, it.toString()) }
        collectionID?.let { appendQueryParameter(::collectionID.name, it.toString()) }
    }
}
