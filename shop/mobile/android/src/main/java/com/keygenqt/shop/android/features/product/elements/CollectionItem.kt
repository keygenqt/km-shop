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
package com.keygenqt.shop.android.features.product.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.decode.SvgDecoder
import coil.request.ImageRequest
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.utils.AppHelper

@Composable
fun CollectionItem(
    icon: String,
    title: String
) {
    val dark = isSystemInDarkTheme()
    val color = if (dark) LocalAndroidColors.current.textCaption else MaterialTheme.colors.primary

    Box(
        modifier = Modifier
            .border(width = 1.dp, color = color, shape = CircleShape)
            .clip(CircleShape)
            .background(if (dark) MaterialTheme.colors.surface else MaterialTheme.colors.background)
            .padding(vertical = 5.dp, horizontal = 10.dp)
    ) {
        Row {
            AsyncImage(
                colorFilter = ColorFilter.tint(MaterialTheme.colors.primary),
                model = ImageRequest.Builder(LocalContext.current)
                    .decoderFactory(SvgDecoder.Factory())
                    .data(AppHelper.getApiUrl("api/uploads/$icon"))
                    .crossfade(true)
                    .build(),
                placeholder = painterResource(R.drawable.no_image),
                contentDescription = "",
                contentScale = ContentScale.Crop,
                modifier = Modifier.size(16.dp)
            )

            Spacer(modifier = Modifier.size(5.dp))

            AppText(
                color = color,
                style = MaterialTheme.typography.caption,
                text = title,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}
