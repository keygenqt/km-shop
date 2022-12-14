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
package com.keygenqt.shop.android.features.order

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.stringResource
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.state.EmptyBody
import com.keygenqt.shop.android.components.state.OrderLoadingBody
import com.keygenqt.shop.android.features.order.elements.AppScaffoldOrder
import com.keygenqt.shop.android.features.order.elements.OrderBody

/**
 * Home page, main for app
 *
 * @param viewModel page view model
 */
@Composable
fun OrderScreen(
    navController: NavHostController,
    viewModel: OrderViewModel = hiltViewModel(),
) {

    val model by viewModel.order.collectAsState()
    val loading by viewModel.loading.collectAsState()

    AppScaffoldOrder(navController = navController) {
        if (model != null) {
            OrderBody(model!!)
        } else if (loading) {
            OrderLoadingBody()
        } else {
            EmptyBody(
                title = stringResource(id = R.string.order_error_title),
                subtitle = stringResource(id = R.string.order_error_text)
            )
        }
    }
}