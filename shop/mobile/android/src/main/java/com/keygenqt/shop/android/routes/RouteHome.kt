package com.keygenqt.shop.android.routes

import android.net.Uri
import android.os.Parcelable
import androidx.navigation.NamedNavArgument
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.keygenqt.shop.android.base.INavigationRoute
import com.keygenqt.shop.android.utils.AppHelper
import kotlinx.parcelize.Parcelize
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

object RouteHome : INavigationRoute {

    @Parcelize
    @Serializable
    data class SearchParameters(
        val searchQuery: String,
        val filters: List<String>
    ) : Parcelable

    val argument0: NamedNavArgument = navArgument(::argument0.name) {
        type = NavType.IntType
        defaultValue = 0
    }

    val argument1: NamedNavArgument = navArgument(::argument1.name) {
        type = NavType.LongType
    }

    val argument2: NamedNavArgument = navArgument(::argument2.name) {
        type = NavType.FloatType
    }

    val argument3: NamedNavArgument = navArgument(::argument3.name) {
        type = NavType.BoolType
    }

    val argument4: NamedNavArgument = navArgument(::argument4.name) {
        type = NavType.StringType
    }

    val argument5: NamedNavArgument = navArgument(::argument5.name) {
        type = AppHelper.getType<SearchParameters>(false)
        defaultValue = SearchParameters("cactus", emptyList())
    }

    /**
     * Generate route with params value
     */
    fun link(
        argument0: Int,
        argument1: Long,
        argument2: Float,
        argument3: Boolean,
        argument4: String,
        argument5: SearchParameters,
    ) = routeBuild {
        appendQueryParameter(::argument0.name, argument0.toString())
        appendQueryParameter(::argument1.name, argument1.toString())
        appendQueryParameter(::argument2.name, argument2.toString())
        appendQueryParameter(::argument3.name, argument3.toString())
        appendQueryParameter(::argument4.name, argument4)
        appendQueryParameter(::argument5.name, Uri.encode(Json.encodeToString(argument5)))
    }
}