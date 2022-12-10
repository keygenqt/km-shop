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
package com.keygenqt.shop.android

import android.net.Uri
import android.os.Bundle
import android.view.View
import android.view.ViewTreeObserver
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NamedNavArgument
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.keygenqt.shop.android.base.AppViewModel
import com.keygenqt.shop.android.features.home.screens.HomeScreen
import dagger.hilt.android.AndroidEntryPoint
import java.math.BigInteger
import java.security.MessageDigest
import kotlin.reflect.KVisibility
import kotlin.reflect.full.memberProperties

@Composable
fun MyApplicationTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colors = if (darkTheme) {
        darkColors(
            primary = Color(0xFFBB86FC),
            primaryVariant = Color(0xFF3700B3),
            secondary = Color(0xFF03DAC5)
        )
    } else {
        lightColors(
            primary = Color(0xFF6200EE),
            primaryVariant = Color(0xFF3700B3),
            secondary = Color(0xFF03DAC5)
        )
    }
    val typography = Typography(
        body1 = TextStyle(
            fontFamily = FontFamily.Default,
            fontWeight = FontWeight.Normal,
            fontSize = 16.sp
        )
    )
    val shapes = Shapes(
        small = RoundedCornerShape(4.dp),
        medium = RoundedCornerShape(4.dp),
        large = RoundedCornerShape(0.dp)
    )

    MaterialTheme(
        colors = colors,
        typography = typography,
        shapes = shapes,
        content = content
    )
}

@AndroidEntryPoint
class MainActivity : ComponentActivity() {

    /**
     * Main ViewModel which is available throughout the application as staticCompositionLocalOf
     */
    private val viewModel: AppViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val controller = rememberNavController()
            MyApplicationTheme {
                NavHost(
                    navController = controller,
                    startDestination = RoutePage.route()
                ) {
                    composable(
                        route = RoutePage.route(),
                        arguments = RoutePage.arguments()
                    ) {
                        HomeScreen(
                            navController = controller
                        )
                    }
                }
            }
        }

        // Splash delay
        window.decorView.findViewById<View>(android.R.id.content)?.let { content ->
            content.viewTreeObserver.addOnPreDrawListener(object :
                ViewTreeObserver.OnPreDrawListener {
                override fun onPreDraw(): Boolean {
                    return if (!viewModel.isSplash.value) {
                        // remove BG splash
                        this@MainActivity.window.decorView.setBackgroundColor(android.graphics.Color.WHITE)
                        // done splash remove listener
                        content.viewTreeObserver.removeOnPreDrawListener(this); true
                    } else false
                }
            })
        }
    }
}

object RoutePage : INavigationRoute {
    val argument0: NamedNavArgument = navArgument(::argument0.name) {
        type = NavType.IntType
        defaultValue = 0
    }
//
//    val argument1: NamedNavArgument = navArgument(::argument1.name) {
//        type = NavType.IntArrayType
//        defaultValue = true
//    }
//
//    val argument2: NamedNavArgument = navArgument(::argument2.name) {
//        type = NavType.LongType
//        defaultValue = true
//    }
//
//    val argument3: NamedNavArgument = navArgument(::argument3.name) {
//        type = NavType.LongArrayType
//        defaultValue = true
//    }
//
//    val argument4: NamedNavArgument = navArgument(::argument4.name) {
//        type = NavType.FloatType
//        defaultValue = true
//    }
//
//    val argument5: NamedNavArgument = navArgument(::argument5.name) {
//        type = NavType.FloatArrayType
//        defaultValue = true
//    }
//
//    val argument6: NamedNavArgument = navArgument(::argument6.name) {
//        type = NavType.BoolType
//        defaultValue = true
//    }
//
//    val argument7: NamedNavArgument = navArgument(::argument7.name) {
//        type = NavType.BoolArrayType
//        defaultValue = true
//    }
//
    val argument8: NamedNavArgument = navArgument(::argument8.name) {
        type = NavType.StringType
    }

    fun link(
        argument0: Int,
//        argument1: IntArray,
//        argument2: Long,
//        argument3: LongArray,
//        argument4: Float,
//        argument5: FloatArray,
//        argument6: Boolean,
//        argument7: BooleanArray,
        argument8: String,
    ) = generate(
        argument0,
//        argument1,
//        argument2,
//        argument3,
//        argument4,
//        argument5,
//        argument6,
//        argument7,
        argument8,
    )
}

interface INavigationRoute {

    fun path(): String = md5(this::class.toString())

    fun md5(input: String): String {
        val md = MessageDigest.getInstance("MD5")
        return BigInteger(1, md.digest(input.toByteArray())).toString(16).padStart(32, '0')
    }

    fun route() = routeUri().toString()

    fun generate(vararg params: Any) = generateUri(*params).toString()

    fun routeUri(): Uri {
        return Uri.Builder().apply {
            appendPath(path())
            this@INavigationRoute::class.memberProperties.map {
                appendQueryParameter(it.name, "{${it.name}}")
            }
        }.build()
    }

    fun generateUri(vararg params: Any): Uri {
        return Uri.Builder().apply {
            appendPath(path())
            this@INavigationRoute::class.memberProperties.mapIndexed { index, it ->
                if (index < params.size) {
                    appendQueryParameter(it.name, params[index].toString())
                }
            }
        }.build()
    }

    fun arguments(): List<NamedNavArgument> {
        return this@INavigationRoute::class.memberProperties.mapNotNull {
            if (it.visibility == KVisibility.PUBLIC) {
                it.getter.call(this@INavigationRoute) as? NamedNavArgument
            } else {
                null
            }
        }
    }
}