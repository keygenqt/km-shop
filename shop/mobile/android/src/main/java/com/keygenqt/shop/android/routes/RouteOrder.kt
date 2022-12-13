package com.keygenqt.shop.android.routes

import androidx.navigation.NamedNavArgument
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.keygenqt.shop.android.base.INavigationRoute

object RouteOrder : INavigationRoute {

    val number: NamedNavArgument = navArgument(::number.name) {
        type = NavType.StringType
    }

    /**
     * Generate route with params value
     */
    fun link(
        number: String,
    ) = routeBuild {
        appendQueryParameter(::number.name, number)
    }
}