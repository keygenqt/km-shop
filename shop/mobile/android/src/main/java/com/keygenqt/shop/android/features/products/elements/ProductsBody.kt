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
package com.keygenqt.shop.android.features.products.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.icons.outlined.*
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.base.AppPullRefreshIndicator
import com.keygenqt.shop.android.components.base.BoxColorBg
import com.keygenqt.shop.android.data.models.CartModel
import com.keygenqt.shop.android.data.models.ProductModel

/**
 * Order page, search by number
 */
@OptIn(ExperimentalMaterialApi::class)
@Composable
fun ProductsBody(
    cartProductIds: List<CartModel>?,
    models: List<ProductModel>,
    loading: Boolean,
    paddingBottomList: Dp,
    onRefresh: () -> Unit,
    onClickProduct: (id: Int) -> Unit,
    onClickCart: (Int) -> Unit
) {
    val scrollState = rememberScrollState()
    val refreshState = rememberPullRefreshState(
        refreshing = loading,
        onRefresh = onRefresh
    )

    BoxColorBg {
        Box(
            Modifier
                .pullRefresh(refreshState)
                .padding(
                    bottom = if (paddingBottomList > 8.dp) paddingBottomList - 8.dp else 8.dp
                )
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(state = scrollState)
                    .padding(
                        top = 16.dp,
                        start = 16.dp,
                        end = 16.dp,
                        bottom = 24.dp
                    ),
            ) {
                models.forEachIndexed { index, productModel ->
                    ProductItem(
                        isHasCart = cartProductIds?.any { it.id == productModel.id },
                        index = index,
                        model = productModel,
                        onClickProduct = onClickProduct,
                        onClickCart = onClickCart,
                    )
                }
            }
            AppPullRefreshIndicator(
                state = refreshState,
            )
        }
    }
}
