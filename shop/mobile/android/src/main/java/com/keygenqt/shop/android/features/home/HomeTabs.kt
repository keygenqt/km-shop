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
package com.keygenqt.shop.android.features.home

import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.accompanist.pager.HorizontalPager
import com.google.accompanist.pager.rememberPagerState
import com.keygenqt.shop.android.features.cart.CartScreen
import com.keygenqt.shop.android.features.exploring.ExploringTabs
import com.keygenqt.shop.android.features.home.elements.AppScaffoldHome
import com.keygenqt.shop.android.routes.RouteOrderCreate
import com.keygenqt.shop.android.routes.RouteProducts
import kotlinx.coroutines.launch

/**
 * Home tabs page, main for app
 */
@OptIn(ExperimentalPagerApi::class)
@Composable
fun HomeTabs(
    navController: NavHostController,
    viewModel: HomeViewModel = hiltViewModel()
) {
    val scope = rememberCoroutineScope()
    val pagerState = rememberPagerState()

    val cartProductIds by viewModel.cartProductIds.collectAsState(null)

    var exploringIndex by rememberSaveable { mutableStateOf(0) }
    var checkoutSate by rememberSaveable { mutableStateOf(false) }

    AppScaffoldHome(
        cartCount = cartProductIds?.sumOf { it.count } ?: 0,
        checkoutSate = checkoutSate,
        navController = navController,
        activeTab = pagerState.currentPage,
        onChangeTab = {
            scope.launch {
                pagerState.animateScrollToPage(it)
            }
        },
        toCreateOrder = {
            navController.navigate(RouteOrderCreate.link())
        }
    ) {
        HorizontalPager(
            count = 3,
            state = pagerState,
            userScrollEnabled = false
        ) { page ->
            when (page) {
                0 -> HomeScreen(
                    viewModel = viewModel,
                    onClickCategory = { name, id ->
                        navController.navigate(
                            RouteProducts.link(
                                title = name,
                                categoryID = id
                            )
                        )
                    },
                    onClickCategories = {
                        scope.launch {
                            exploringIndex = 0
                            pagerState.animateScrollToPage(1)
                        }
                    },
                    onClickCollections = {
                        scope.launch {
                            exploringIndex = 1
                            pagerState.animateScrollToPage(1)
                        }
                    }
                )
                1 -> ExploringTabs(
                    index = exploringIndex,
                    navController = navController
                )
                2 -> CartScreen(
                    navController = navController,
                    onStateCheckout = { checkoutSate = it }
                )
            }
        }
    }
}
