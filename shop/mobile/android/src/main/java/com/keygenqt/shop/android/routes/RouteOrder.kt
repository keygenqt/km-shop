package com.keygenqt.shop.android.routes

import androidx.navigation.NamedNavArgument
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.keygenqt.shop.android.base.INavigationRoute

object RouteOrder : INavigationRoute {

    val orderKey: NamedNavArgument = navArgument(::orderKey.name) {
        type = NavType.StringType
    }

    /**
     * Generate route with params value
     */
    fun link(
        orderKey: String,
    ) = routeBuild {
        appendQueryParameter(::orderKey.name, orderKey)
    }
}