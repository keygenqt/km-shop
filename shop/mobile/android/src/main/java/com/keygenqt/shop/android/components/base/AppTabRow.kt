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
package com.keygenqt.shop.android.components.base

import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.material.TabRowDefaults.tabIndicatorOffset
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp

@Composable
fun AppTabRow(
    index: Int,
    modifier: Modifier = Modifier,
    tabs: List<String>,
    onChangeTab: (Int) -> Unit
) {

    var pagerActive by rememberSaveable { mutableStateOf(index) }

    LaunchedEffect(index) {
        pagerActive = index
    }

    TabRow(
        backgroundColor = MaterialTheme.colors.primary,
        modifier = modifier,
        selectedTabIndex = pagerActive,
        indicator = @Composable { tabPositions ->
            TabRowDefaults.Indicator(
                height = 4.dp,
                color = MaterialTheme.colors.onPrimary,
                modifier = Modifier
                    .tabIndicatorOffset(tabPositions[pagerActive])
                    .padding(
                        start = 5.dp,
                        end = 5.dp
                    )
                    .clip(
                        RoundedCornerShape(
                            topStart = 8.dp,
                            topEnd = 8.dp,
                            bottomEnd = 0.dp,
                            bottomStart = 0.dp
                        )
                    )
            )
        },
    ) {
        tabs.forEachIndexed { index, title ->
            Tab(
                text = {
                    Text(
                        text = title,
                        color = if (pagerActive == index)
                            MaterialTheme.colors.onPrimary
                        else
                            MaterialTheme.colors.onPrimary.copy(0.7f)
                    )
                },
                selected = pagerActive == index,
                onClick = {
                    pagerActive = index
                    onChangeTab(index)
                }
            )
        }
    }
}
