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
package com.keygenqt.shop.android.features.products

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.stringResource
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.state.EmptyBody
import com.keygenqt.shop.android.components.state.OrderLoadingBody
import com.keygenqt.shop.android.features.products.elements.AppScaffoldProducts
import com.keygenqt.shop.android.features.products.elements.ProductsBody
import com.keygenqt.shop.android.routes.RouteProduct

/**
 * Home page, main for app
 *
 * @param viewModel page view model
 */
@Composable
fun ProductsScreen(
    navController: NavHostController,
    viewModel: ProductsViewModel = hiltViewModel(),
) {
    val products by viewModel.products.collectAsState()
    val loading by viewModel.loading.collectAsState()

    AppScaffoldProducts(
        enabled = !products.isNullOrEmpty(),
        navController = navController,
        onShowFilter = {

        },
        onShowSearch = {

        }
    ) {
        if (!products.isNullOrEmpty()) {
            ProductsBody(
                loading = loading,
                models = products!!,
                onRefresh = {
                    viewModel.updateList()
                },
                onClickProduct = {
                    navController.navigate(RouteProduct.link(it))
                }
            )
        } else if (loading) {
            OrderLoadingBody()
        } else {
            EmptyBody(
                title = stringResource(id = R.string.products_empty_title),
                subtitle = stringResource(
                    id = if (viewModel.categoryID != 0) {
                        R.string.products_empty_subtitle_categories
                    } else {
                        R.string.products_empty_subtitle_collections
                    }
                )
            )
        }
    }
}