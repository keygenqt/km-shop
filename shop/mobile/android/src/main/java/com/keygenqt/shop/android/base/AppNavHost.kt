package com.keygenqt.shop.android.base

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.keygenqt.shop.android.features.contact.ContactScreen
import com.keygenqt.shop.android.features.home.HomeTabs
import com.keygenqt.shop.android.features.order.OrderScreen
import com.keygenqt.shop.android.features.product.ProductScreen
import com.keygenqt.shop.android.routes.RouteContact
import com.keygenqt.shop.android.routes.RouteHome
import com.keygenqt.shop.android.routes.RouteOrder
import com.keygenqt.shop.android.routes.RouteProduct

@Composable
fun AppNavHost(
    navController: NavHostController
) {
    Box {

        Box(
            modifier = Modifier
                .height(56.dp)
                .fillMaxWidth()
                .background(MaterialTheme.colors.primary)
        )

        NavHost(
            navController = navController,
            startDestination = RouteHome.route()
        ) {
            composable(
                route = RouteContact.route(),
                arguments = RouteContact.arguments()
            ) {
                ContactScreen(navController)
            }
            composable(
                route = RouteHome.route(),
                arguments = RouteHome.arguments()
            ) {
                HomeTabs(navController)
            }
            composable(
                route = RouteOrder.route(),
                arguments = RouteOrder.arguments()
            ) {
                OrderScreen(navController)
            }
            composable(
                route = RouteProduct.route(),
                arguments = RouteProduct.arguments()
            ) {
                ProductScreen(navController)
            }
        }
    }
}