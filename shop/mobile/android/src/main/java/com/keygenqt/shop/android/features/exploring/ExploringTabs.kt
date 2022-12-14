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
package com.keygenqt.shop.android.features.exploring

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.navigation.NavHostController
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.accompanist.pager.HorizontalPager
import com.google.accompanist.pager.rememberPagerState
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppTabRow
import kotlinx.coroutines.launch

/**
 * Tabs exploring page
 */
@OptIn(ExperimentalPagerApi::class)
@Composable
fun ExploringTabs(
    navController: NavHostController
) {

    val scope = rememberCoroutineScope()
    val pagerState = rememberPagerState()

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight(),
    ) {

        AppTabRow(
            tabs = listOf(
                stringResource(id = R.string.exploring_categories_tab),
                stringResource(id = R.string.exploring_collections_tab)
            ),
            onChangeTab = { index ->
                scope.launch {
                    pagerState.animateScrollToPage(index)
                }
            }
        )

        HorizontalPager(
            count = 2,
            state = pagerState,
            userScrollEnabled = false
        ) { page ->
            when (page) {
                0 -> ExploringCategoriesScreen(
                    navController = navController,
                )
                1 -> ExploringCollectionsScreen(
                    navController = navController,
                )
            }
        }
    }
}