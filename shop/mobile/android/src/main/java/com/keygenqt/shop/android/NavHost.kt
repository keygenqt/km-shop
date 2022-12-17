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
import com.keygenqt.shop.android.features.contactForm.ContactFormScreen
import com.keygenqt.shop.android.features.home.HomeTabs
import com.keygenqt.shop.android.features.order.OrderScreen
import com.keygenqt.shop.android.features.orderCreate.OrderCreateScreen
import com.keygenqt.shop.android.features.orderHistory.OrderHistoryScreen
import com.keygenqt.shop.android.features.orderSearch.OrderSearchScreen
import com.keygenqt.shop.android.features.product.ProductScreen
import com.keygenqt.shop.android.features.products.ProductsScreen
import com.keygenqt.shop.android.routes.*

@Composable
fun NavHost(
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
                route = RouteContactForm.route(),
                arguments = RouteContactForm.arguments()
            ) {
                ContactFormScreen(navController)
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
                route = RouteOrderCreate.route(),
                arguments = RouteOrderCreate.arguments()
            ) {
                OrderCreateScreen(navController)
            }
            composable(
                route = RouteOrderHistory.route(),
                arguments = RouteOrderHistory.arguments()
            ) {
                OrderHistoryScreen(navController)
            }
            composable(
                route = RouteOrderSearch.route(),
                arguments = RouteOrderSearch.arguments()
            ) {
                OrderSearchScreen(navController)
            }
            composable(
                route = RouteProduct.route(),
                arguments = RouteProduct.arguments()
            ) {
                ProductScreen(navController)
            }
            composable(
                route = RouteProducts.route(),
                arguments = RouteProducts.arguments()
            ) {
                ProductsScreen(navController)
            }
        }
    }
}
