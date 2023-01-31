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

import androidx.compose.animation.Animatable
import androidx.compose.animation.core.tween
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.MaterialTheme
import androidx.compose.material.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.keygenqt.shop.android.R

@Composable
fun ImageButton(
    active: Boolean,
    url: String,
    onClick: (url: String) -> Unit
) {
    val dark = isSystemInDarkTheme()

    val colorDefault = if (dark) Color.White.copy(0.1f) else Color.DarkGray.copy(0.1f)
    val color = if (active) MaterialTheme.colors.secondary.copy(0.2f) else colorDefault
    val animateColor = remember { Animatable(color) }

    LaunchedEffect(active) {
        animateColor.animateTo(color, animationSpec = tween(300))
    }

    TextButton(
        colors = ButtonDefaults.textButtonColors(
            backgroundColor = animateColor.value
        ),
        onClick = {
            onClick.invoke(url)
        }
    ) {
        AsyncImage(
            model = ImageRequest.Builder(LocalContext.current)
                .data(url)
                .crossfade(true)
                .build(),
            placeholder = painterResource(R.drawable.no_image),
            error = painterResource(R.drawable.no_image),
            contentDescription = null,
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .width(60.dp)
                .height(40.dp)
                .clip(MaterialTheme.shapes.small)
        )
    }
}
