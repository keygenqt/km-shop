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
package com.keygenqt.shop.android.features.cart.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.base.AppPullRefreshIndicator
import com.keygenqt.shop.android.components.base.BoxColorBg
import com.keygenqt.shop.android.data.models.CartModel
import com.keygenqt.shop.android.data.models.ProductModel

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun CartBody(
    models: List<ProductModel>,
    cartProductIds: List<CartModel>,
    loading: Boolean,
    onRefresh: () -> Unit,
    onClickProduct: (id: Int) -> Unit,
    onClickRemoveCart: (id: Int) -> Unit,
    onClickPlus: (Int, Double) -> Unit,
    onClickMinus: (Int, Double) -> Unit,
) {
    val scrollState = rememberScrollState()
    val refreshState = rememberPullRefreshState(
        refreshing = loading,
        onRefresh = onRefresh
    )

    BoxColorBg {
        Box(Modifier.pullRefresh(refreshState)) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(state = scrollState)
                    .padding(horizontal = 16.dp)
                    .padding(top = 16.dp),
            ) {
                models.forEach { productModel ->
                    val count = cartProductIds.find { it.id == productModel.id }?.count ?: 0
                    if (count > 0) {
                        ProductCartItem(
                            count = count,
                            model = productModel,
                            onClickProduct = onClickProduct,
                            onClickRemoveCart = onClickRemoveCart,
                            onClickPlus = onClickPlus,
                            onClickMinus = onClickMinus
                        )
                        Spacer(modifier = Modifier.size(16.dp))
                    }
                }
            }

            AppPullRefreshIndicator(
                state = refreshState,
            )
        }
    }
}
