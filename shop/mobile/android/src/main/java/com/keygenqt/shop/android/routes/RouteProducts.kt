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