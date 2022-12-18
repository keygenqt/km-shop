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
package com.keygenqt.shop.android.features.home.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.material.pullrefresh.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.base.AppPullRefreshIndicator
import com.keygenqt.shop.android.components.lottie.LoadingAnimation
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CategoryModel

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun HomeBody(
    loading: Boolean,
    onRefresh: () -> Unit,
    categories: List<CategoryModel>?,
    onClickCategory: (String, Int) -> Unit,
    onClickCategories: () -> Unit,
    onClickCollections: () -> Unit
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
                .fillMaxHeight()
                .verticalScroll(scrollState)
                .padding(16.dp),
        ) {
            InfoBlock(onClickCollections)

            Spacer(modifier = Modifier.height(16.dp))

            Card(
                backgroundColor = LocalAndroidColors.current.bgVariant1,
                modifier = Modifier
                    .fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(8.dp)
                ) {

                    if (categories.isNullOrEmpty()) {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(130.dp)
                                .clip(MaterialTheme.shapes.medium),
                        ) {
                            LoadingAnimation(
                                modifier = Modifier
                                    .align(Alignment.Center)
                            )
                        }
                    } else {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Box(
                                modifier = Modifier.padding(start = 10.dp)
                            ) {
                                AppText(
                                    text = stringResource(id = R.string.category_block_title),
                                    style = MaterialTheme.typography.h6,
                                )
                            }

                            TextButton(onClick = onClickCategories) {
                                Text(
                                    color = MaterialTheme.colors.onSurface,
                                    text = stringResource(id = R.string.category_block_title_btn)
                                )
                            }
                        }

                        Column(
                            modifier = Modifier.padding(8.dp)
                        ) {
                            categories.take(3).forEachIndexed { index, model ->
                                if (index != 0) {
                                    Spacer(modifier = Modifier.height(16.dp))
                                }
                                CategoryItem(
                                    model = model,
                                    bg = painterResource(
                                        id = when (index) {
                                            0 -> R.drawable.cat_bg_1
                                            1 -> R.drawable.cat_bg_3
                                            2 -> R.drawable.cat_bg_5
                                            else -> R.drawable.cat_bg_2
                                        }
                                    ),
                                    onClickCategory = onClickCategory
                                )
                            }
                        }
                    }
                }
            }
        }

        AppPullRefreshIndicator(
            state = refreshState,
        )
    }
}
