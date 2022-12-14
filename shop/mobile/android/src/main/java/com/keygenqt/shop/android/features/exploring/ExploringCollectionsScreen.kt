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

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Card
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.MaterialTheme
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.components.base.AppPullRefreshIndicator
import com.keygenqt.shop.android.components.state.ErrorBody
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CollectionModel

/**
 * List collections page
 *
 * @param viewModel page view model
 */
@OptIn(ExperimentalMaterialApi::class)
@Composable
fun ExploringCollectionsScreen(
    navController: NavHostController,
    viewModel: ExploringCollectionsViewModel = hiltViewModel(),
) {
    val collections by viewModel.collections.collectAsState(initial = null)
    val loading by viewModel.loading.collectAsState()
    val error by viewModel.error.collectAsState()

    val scrollState = rememberScrollState()
    val refreshState = rememberPullRefreshState(
        refreshing = loading,
        onRefresh = {
            viewModel.updateCollections()
        }
    )

    Box(
        Modifier
            .fillMaxSize()
            .pullRefresh(refreshState)
    ) {
        if (error != null) {
            ErrorBody()
        } else {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(state = scrollState)
                    .padding(16.dp),
            ) {
                collections?.forEachIndexed { index, collectionModel ->
                    if (index != 0) {
                        Spacer(modifier = Modifier.size(16.dp))
                    }
                    CollectionItem(
                        model = collectionModel,
                        onClickCollection = {

                        }
                    )
                }
            }
        }
        AppPullRefreshIndicator(
            state = refreshState,
        )
    }
}

@Composable
fun CollectionItem(
    model: CollectionModel,
    onClickCollection: (String) -> Unit
) {
    Card(
        backgroundColor = MaterialTheme.colors.surface,
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClickCollection(model.key) }
    ) {
        Column(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth()
        ) {
            AppText(text = model.name)
            Spacer(modifier = Modifier.size(4.dp))
            AppText(text = model.desc)
        }
    }
}