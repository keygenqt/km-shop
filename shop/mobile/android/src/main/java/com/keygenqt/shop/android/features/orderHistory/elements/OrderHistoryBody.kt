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
package com.keygenqt.shop.android.features.orderHistory.elements

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.base.BoxColorBg
import com.keygenqt.shop.android.components.base.CombineImage
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.OrderHistoryModel
import com.keygenqt.shop.android.extensions.priceFormat

@Composable
fun OrderHistoryBody(
    models: List<OrderHistoryModel>,
    onClickItem: (number: String) -> Unit
) {
    val scrollState = rememberScrollState()

    BoxColorBg {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .verticalScroll(state = scrollState)
                .padding(16.dp),
        ) {
            models.forEachIndexed { index, orderHistoryModel ->
                if (index != 0) {
                    Spacer(modifier = Modifier.size(16.dp))
                }
                OrderHistoryItem(
                    model = orderHistoryModel,
                    onClickItem = onClickItem
                )
            }
        }
    }
}

@Composable
fun OrderHistoryItem(
    model: OrderHistoryModel,
    onClickItem: (key: String) -> Unit
) {
    Card(
        backgroundColor = MaterialTheme.colors.surface,
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .clickable {
                    onClickItem(model.number)
                }
                .padding(10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
            ) {
                CombineImage(
                    modifier = Modifier
                        .clip(CircleShape)
                        .size(50.dp),
                    images = model.images
                )

                Spacer(modifier = Modifier.size(10.dp))

                Column {
                    AppText(
                        maxLines = 1,
                        text = "# ${model.number}",
                        style = MaterialTheme.typography.body1
                    )

                    Spacer(modifier = Modifier.size(6.dp))

                    AppText(
                        color = Color(0XFF707f95),
                        text = model.sum.priceFormat(),
                        style = MaterialTheme.typography.caption
                    )
                }
            }
        }
    }
}
