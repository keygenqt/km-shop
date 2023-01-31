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
package com.keygenqt.shop.android.features.products.elements

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Close
import androidx.compose.material.icons.outlined.PriceChange
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.extensions.positionedBottomSheet
import com.keygenqt.shop.android.extensions.priceFormat
import com.keygenqt.shop.android.extensions.swipeInterception
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@Composable
fun FilterBlock(
    min: Float,
    max: Float,
    value: ClosedFloatingPointRange<Float>,
    isExpanded: Boolean,
    onClickIcon: () -> Unit,
    onChangePosition: (position: Dp) -> Unit,
    onChangePriceFilter: (ClosedFloatingPointRange<Float>) -> Unit
) {
    val scope = rememberCoroutineScope()

    var isExpandedSave by remember { mutableStateOf(isExpanded) }

    LaunchedEffect(isExpanded) {
        isExpandedSave = isExpanded
    }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .swipeInterception()
            .positionedBottomSheet { position ->
                onChangePosition.invoke(position)
            }
            .padding(top = 6.dp, start = 16.dp, end = 16.dp, bottom = 16.dp)
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
        ) {
            AppText(
                color = Color.White,
                text = "Диапазон цен",
                style = MaterialTheme.typography.h6,
            )
            Spacer(modifier = Modifier.weight(1f))
            IconButton(onClick = {
                scope.launch {
                    delay(100)
                    isExpandedSave = !isExpandedSave
                }
                onClickIcon.invoke()
            }) {
                Icon(
                    imageVector = if (isExpandedSave) Icons.Outlined.Close else Icons.Outlined.PriceChange,
                    contentDescription = null,
                    tint = MaterialTheme.colors.onPrimary
                )
            }
        }

        Column {
            PriceRange(
                min = min,
                max = max,
                value = value,
                onChangePriceFilter = onChangePriceFilter
            )
        }
    }
}

@OptIn(ExperimentalMaterialApi::class)
@Composable
private fun PriceRange(
    min: Float,
    max: Float,
    value: ClosedFloatingPointRange<Float>,
    onChangePriceFilter: (ClosedFloatingPointRange<Float>) -> Unit
) {
    val dark = isSystemInDarkTheme()
    var sliderPosition by remember { mutableStateOf(value) }

    Column {
        Spacer(modifier = Modifier.size(6.dp))
        AppText(
            color = Color.White.copy(0.8f),
            text = "Фильтр товаров по ценовому диапозону",
            style = MaterialTheme.typography.caption
        )
        Spacer(modifier = Modifier.size(6.dp))
        RangeSlider(
            colors = SliderDefaults.colors(
                thumbColor = if (dark) MaterialTheme.colors.primary else Color.White,
                activeTrackColor = if (dark) MaterialTheme.colors.primary else Color.White,
            ),
            modifier = Modifier,
            value = sliderPosition,
            valueRange = min..max,
            onValueChange = { sliderPosition = it },
            onValueChangeFinished = {
                onChangePriceFilter.invoke(sliderPosition)
            }
        )
        Spacer(modifier = Modifier.size(6.dp))
        Row {
            AppText(
                color = Color.White,
                text = sliderPosition.start.toDouble().priceFormat()
            )
            Spacer(modifier = Modifier.weight(1f))
            AppText(
                color = Color.White,
                text = sliderPosition.endInclusive.toDouble().priceFormat()
            )
        }
        Spacer(modifier = Modifier.size(16.dp))
    }
}
