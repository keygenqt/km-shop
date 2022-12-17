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

import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.extensions.priceFormat

@Composable
fun PriceBlock(
    price: Double,
    count: Int = 0,
) {
    Box(
        modifier = Modifier
            .border(width = 1.dp, color = Color(0XFF22C55E), shape = MaterialTheme.shapes.large)
            .padding(vertical = 5.dp, horizontal = 10.dp)
    ) {
        AppText(
            color = Color(0XFF22C55E),
            style = MaterialTheme.typography.caption,
            text = price.priceFormat() + if (count > 0) " x $count" else "",
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
    }
}

@Composable
fun PriceBlockLarge(
    price: Double,
    count: Int = 0,
) {
    Box(
        modifier = Modifier
            .border(width = 1.dp, color = Color(0XFF22C55E), shape = MaterialTheme.shapes.large)
            .padding(vertical = 7.dp, horizontal = 16.dp)
    ) {
        AppText(
            color = Color(0XFF22C55E),
            style = MaterialTheme.typography.body1,
            text = price.priceFormat() + if (count > 0) " x $count" else "",
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
    }
}
