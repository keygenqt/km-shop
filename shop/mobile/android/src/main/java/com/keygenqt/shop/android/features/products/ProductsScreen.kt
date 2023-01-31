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
package com.keygenqt.shop.android.features.products

import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.state.EmptyBody
import com.keygenqt.shop.android.components.state.LoadingBody
import com.keygenqt.shop.android.features.products.elements.AppScaffoldProducts
import com.keygenqt.shop.android.features.products.elements.FilterBlock
import com.keygenqt.shop.android.features.products.elements.ProductsBody
import com.keygenqt.shop.android.routes.RouteProduct
import kotlinx.coroutines.launch

/**
 * Home page, main for app
 *
 * @param viewModel page view model
 */
@OptIn(ExperimentalMaterialApi::class)
@Composable
fun ProductsScreen(
    navController: NavHostController,
    viewModel: ProductsViewModel = hiltViewModel(),
) {
    val scope = rememberCoroutineScope()
    val bottomSheetScaffoldState = rememberBottomSheetScaffoldState(
        bottomSheetState = rememberBottomSheetState(
            initialValue = BottomSheetValue.Collapsed
        )
    )

    val isEnd by viewModel.isEnd.collectAsState()
    val products by viewModel.products.collectAsState()
    val prices by viewModel.prices.collectAsState()
    val loading by viewModel.loading.collectAsState()
    val sort by viewModel.sort.collectAsState()
    val cartProductIds by viewModel.cartProductIds.collectAsState(null)

    var paddingBottomList by remember { mutableStateOf(60.dp) }

    AppScaffoldProducts(
        navController = navController,
        enabled = !products.isNullOrEmpty() && products?.size != 1,
        title = viewModel.title,
        sort = sort,
        onToggleSort = {
            viewModel.toggleSort()
        }
    ) {
        if (products != null) {
            BottomSheetScaffold(
                modifier = Modifier,
                scaffoldState = bottomSheetScaffoldState,
                sheetPeekHeight = if (prices?.start == prices?.endInclusive) 0.dp else 60.dp,
                sheetElevation = 0.dp,
                sheetShape = RoundedCornerShape(
                    topStart = 16.dp,
                    topEnd = 16.dp,
                    bottomEnd = 0.dp,
                    bottomStart = 0.dp
                ),
                drawerGesturesEnabled = false,
                sheetBackgroundColor = LocalAndroidColors.current.bgVariant5,
                sheetContent = {
                    prices?.let { prices ->
                        FilterBlock(
                            min = prices.start,
                            max = prices.endInclusive,
                            value = viewModel.pricesFilter ?: prices,
                            isExpanded = bottomSheetScaffoldState.bottomSheetState.isExpanded,
                            onChangePosition = { paddingBottomList = it },
                            onClickIcon = {
                                scope.launch {
                                    if (bottomSheetScaffoldState.bottomSheetState.isExpanded) {
                                        bottomSheetScaffoldState.bottomSheetState.collapse()
                                    } else {
                                        bottomSheetScaffoldState.bottomSheetState.expand()
                                    }
                                }
                            },
                            onChangePriceFilter = {
                                viewModel.setPriceRange(it)
                            }
                        )
                    }
                },
            ) {
                ProductsBody(
                    isEnd = isEnd,
                    cartProductIds = cartProductIds,
                    loading = loading,
                    models = products!!,
                    paddingBottomList = paddingBottomList,
                    onRefresh = viewModel::refreshList,
                    onClickProduct = {
                        scope.launch {
                            bottomSheetScaffoldState.bottomSheetState.animateTo(
                                targetValue = BottomSheetValue.Collapsed,
                                anim = tween(100)
                            )
                            navController.navigate(RouteProduct.link(it))
                        }
                    },
                    onClickCart = { id, price ->
                        viewModel.changeCartProducts(id, price)
                    },
                    onChangeStateLoadingList = {
                        if (it) viewModel.nextPage()
                    }
                )
            }
        } else if (loading) {
            LoadingBody()
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
