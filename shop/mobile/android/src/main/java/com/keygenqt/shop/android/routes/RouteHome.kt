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
package com.keygenqt.shop.android.routes

import com.keygenqt.shop.android.base.INavigationRoute

object RouteHome : INavigationRoute {

//    Demo arguments
//    @Parcelize
//    @Serializable
//    data class SearchParameters(
//        val searchQuery: String,
//        val filters: List<String>
//    ) : Parcelable
//
//    val argument0: NamedNavArgument = navArgument(::argument0.name) {
//        type = NavType.IntType
//        defaultValue = 0
//    }
//
//    val argument1: NamedNavArgument = navArgument(::argument1.name) {
//        type = NavType.LongType
//    }
//
//    val argument2: NamedNavArgument = navArgument(::argument2.name) {
//        type = NavType.FloatType
//    }
//
//    val argument3: NamedNavArgument = navArgument(::argument3.name) {
//        type = NavType.BoolType
//    }
//
//    val argument4: NamedNavArgument = navArgument(::argument4.name) {
//        type = NavType.StringType
//    }
//
//    val argument5: NamedNavArgument = navArgument(::argument5.name) {
//        type = AppHelper.getType<SearchParameters>(false)
//        defaultValue = SearchParameters("cactus", emptyList())
//    }

    /**
     * Generate route with params value
     */
    fun link() = routeBuild()
}
