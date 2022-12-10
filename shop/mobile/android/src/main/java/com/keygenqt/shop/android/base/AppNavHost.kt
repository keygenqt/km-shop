package com.keygenqt.shop.android.base

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.keygenqt.shop.android.features.home.screens.HomeScreen
import com.keygenqt.shop.android.routes.RouteHome

@Composable
fun AppNavHost(
    navController: NavHostController
) {
    NavHost(
        navController = navController,
        startDestination = RouteHome.route()
    ) {
        composable(
            route = RouteHome.route(),
            arguments = RouteHome.arguments()
        ) {
            HomeScreen(navController)
        }
    }
}