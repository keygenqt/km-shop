package com.keygenqt.shop.android.routes

import androidx.navigation.NamedNavArgument
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.keygenqt.shop.android.base.INavigationRoute

object RouteProduct : INavigationRoute {

    val id: NamedNavArgument = navArgument(::id.name) {
        type = NavType.IntType
    }

    /**
     * Generate route with params value
     */
    fun link(
        id: Int,
    ) = routeBuild {
        appendQueryParameter(::id.name, id.toString())
    }
}