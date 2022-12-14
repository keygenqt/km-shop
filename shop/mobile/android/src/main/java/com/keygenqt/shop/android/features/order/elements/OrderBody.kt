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
package com.keygenqt.shop.android.features.order.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.icons.outlined.*
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.base.AppPullRefreshIndicator
import com.keygenqt.shop.android.data.models.OrderModel

/**
 * Order page, search by number
 */
@OptIn(ExperimentalMaterialApi::class)
@Composable
fun OrderBody(
    model: OrderModel,
    loading: Boolean,
    onRefresh: () -> Unit,
    onClickProduct: (id: Int) -> Unit
) {
    val scrollState = rememberScrollState()
    val refreshState = rememberPullRefreshState(
        refreshing = loading,
        onRefresh = onRefresh
    )

    Box(Modifier.pullRefresh(refreshState)) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .verticalScroll(state = scrollState)
                .padding(16.dp),
        ) {
            OrderProducts(
                model = model,
                onClickProduct = onClickProduct
            )
            Spacer(modifier = Modifier.size(16.dp))
            OrderClientDetails(model)
            Spacer(modifier = Modifier.size(16.dp))
            OrderState(model)
        }

        AppPullRefreshIndicator(
            state = refreshState,
        )
    }
}