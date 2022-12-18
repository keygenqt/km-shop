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
package com.keygenqt.shop.android.features.cart

import androidx.compose.runtime.*
import androidx.compose.ui.res.stringResource
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.state.EmptyCartBody
import com.keygenqt.shop.android.components.state.LoadingBody
import com.keygenqt.shop.android.features.cart.elements.CartBody
import com.keygenqt.shop.android.routes.RouteProduct

/**
 * Cart page
 *
 * @param viewModel page view model
 */
@Composable
fun CartScreen(
    navController: NavHostController,
    viewModel: CartViewModel = hiltViewModel(),
    onStateCheckout: (Boolean) -> Unit
) {

    val cartProductIds by viewModel.cartProductIds.collectAsState(null)
    val products by viewModel.products.collectAsState()
    val loading by viewModel.loading.collectAsState()

    LaunchedEffect(products, cartProductIds) {
        onStateCheckout.invoke(!products.isNullOrEmpty() && !cartProductIds.isNullOrEmpty())
    }

    if (!products.isNullOrEmpty() && !cartProductIds.isNullOrEmpty()) {
        CartBody(
            cartProductIds = cartProductIds!!,
            loading = loading,
            models = products!!,
            onRefresh = {
                viewModel.getProducts()
            },
            onClickProduct = {
                navController.navigate(RouteProduct.link(it))
            },
            onClickRemoveCart = {
                viewModel.removeCartProduct(it)
            },
            onClickPlus = { id, price ->
                viewModel.plusCartCount(id, price)
            },
            onClickMinus = { id, price ->
                viewModel.minusCartCount(id, price)
            },
        )
        LaunchedEffect(Unit) {
            onStateCheckout.invoke(true)
        }
    } else if (loading) {
        LoadingBody()
    } else {
        EmptyCartBody(
            title = stringResource(id = R.string.cart_empty_title),
            subtitle = stringResource(id = R.string.cart_empty_text)
        )
    }
}
