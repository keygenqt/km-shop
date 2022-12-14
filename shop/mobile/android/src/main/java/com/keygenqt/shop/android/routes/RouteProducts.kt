package com.keygenqt.shop.android.routes

import androidx.navigation.NamedNavArgument
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.keygenqt.shop.android.base.INavigationRoute

object RouteProducts : INavigationRoute {

    val categoryKey: NamedNavArgument = navArgument(::categoryKey.name) {
        type = NavType.StringType
        nullable = true
    }

    val collectionKey: NamedNavArgument = navArgument(::collectionKey.name) {
        type = NavType.StringType
        nullable = true
    }

    /**
     * Generate route with params value
     */
    fun link(
        categoryKey: String? = null,
        collectionKey: String? = null,
    ) = routeBuild {
        categoryKey?.let { appendQueryParameter(::categoryKey.name, categoryKey) }
        collectionKey?.let { appendQueryParameter(::collectionKey.name, collectionKey) }
    }
}