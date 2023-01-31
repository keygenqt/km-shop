/*
 * Copyright 2023 Vitaliy Zarubin
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
package com.keygenqt.shop.android.features.orderCreate

import android.widget.Toast
import androidx.compose.material.Button
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.state.SuccessCartBody
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.features.orderCreate.elements.AppScaffoldOrderCreate
import com.keygenqt.shop.android.features.orderCreate.elements.OrderCreateBody
import com.keygenqt.shop.android.routes.RouteHome
import com.keygenqt.shop.android.routes.RouteOrder
import com.keygenqt.shop.android.routes.RouteOrderHistory
import com.keygenqt.shop.android.routes.RouteOrderSearch

/**
 * Checkout Page
 *
 * @param viewModel page view model
 */
@Composable
fun OrderCreateScreen(
    navController: NavHostController,
    viewModel: OrderCreateViewModel = hiltViewModel(),
) {
    val context = LocalContext.current
    val orderNumber by viewModel.orderNumber.collectAsState()
    val loading by viewModel.loading.collectAsState()
    val error by viewModel.error.collectAsState()

    AppScaffoldOrderCreate(
        loading = loading,
        onClickBack = {
            orderNumber?.let {
                navController.popBackStack()
                navController.popBackStack()
                navController.navigate(RouteHome.link())
                Toast
                    .makeText(
                        context,
                        context.getString(R.string.order_create_success_toast),
                        Toast.LENGTH_LONG
                    )
                    .show()
            } ?: run {
                navController.popBackStack()
            }
        }
    ) {
        orderNumber?.let { orderNumber ->
            SuccessCartBody(
                title = stringResource(id = R.string.order_create_success_title),
                subtitle = stringResource(id = R.string.order_create_success_text),
                btn = {
                    Button(
                        onClick = {
                            navController.popBackStack()
                            navController.popBackStack()
                            navController.navigate(RouteHome.link())
                            navController.navigate(RouteOrderSearch.link())
                            navController.navigate(RouteOrderHistory.link())
                            navController.navigate(RouteOrder.link(orderNumber))
                        }
                    ) {
                        AppText(
                            color = Color.White,
                            text = stringResource(id = R.string.order_create_success_btn)
                        )
                    }
                },
            )
        } ?: run {
            OrderCreateBody(
                loading = loading,
                error = error,
                onSubmit = { email, phone, address ->
                    viewModel.createOrder(
                        email = email,
                        phone = phone,
                        address = address,
                    )
                }
            )
        }
    }
}
