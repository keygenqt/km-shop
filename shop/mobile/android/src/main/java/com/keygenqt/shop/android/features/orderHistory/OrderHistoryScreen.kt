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
package com.keygenqt.shop.android.features.orderHistory

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.stringResource
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.state.EmptyBody
import com.keygenqt.shop.android.features.orderHistory.elements.AppScaffoldOrderHistory
import com.keygenqt.shop.android.features.orderHistory.elements.OrderHistoryBody
import com.keygenqt.shop.android.routes.RouteOrder

/**
 * Home page, main for app
 *
 * @param viewModel page view model
 */
@Composable
fun OrderHistoryScreen(
    navController: NavHostController,
    viewModel: OrderHistoryViewModel = hiltViewModel(),
) {

    val historyList by viewModel.historyList.collectAsState(initial = null)

    AppScaffoldOrderHistory(
        loading = historyList == null,
        navController = navController
    ) {
        historyList?.let {
            if (it.isNotEmpty()) {
                OrderHistoryBody(
                    models = it,
                    onClickItem = { number ->
                        navController.navigate(RouteOrder.link(number))
                    }
                )
            } else {
                EmptyBody(
                    title = stringResource(id = R.string.order_history_empty),
                    subtitle = stringResource(id = R.string.order_history_empty_subtitle)
                )
            }
        }
    }
}