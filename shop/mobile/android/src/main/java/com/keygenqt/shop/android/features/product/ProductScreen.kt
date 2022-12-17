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
package com.keygenqt.shop.android.features.product

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.stringResource
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.state.EmptyBody
import com.keygenqt.shop.android.components.state.LoadingBody
import com.keygenqt.shop.android.features.product.elements.AppScaffoldProduct
import com.keygenqt.shop.android.features.product.elements.ProductBody

/**
 * Product public page
 */
@Composable
fun ProductScreen(
    navController: NavHostController,
    viewModel: ProductViewModel = hiltViewModel(),
) {

    val model by viewModel.product.collectAsState()
    val loading by viewModel.loading.collectAsState()
    val cartProductIds by viewModel.cartProductIds.collectAsState(null)

    AppScaffoldProduct(
        title = model?.name,
        navController = navController
    ) {
        if (model != null) {
            ProductBody(
                countCart = cartProductIds?.find { it.id == model!!.id }?.count ?: 0,
                loading = loading,
                model = model!!,
                onRefresh = { viewModel.getProduct() },
                onChangeCart = { id, count ->
                    viewModel.changeCartProducts(id, count)
                }
            )
        } else if (loading) {
            LoadingBody()
        } else {
            EmptyBody(
                title = stringResource(id = R.string.product_empty_title),
                subtitle = stringResource(id = R.string.product_empty_subtitle)
            )
        }
    }
}
