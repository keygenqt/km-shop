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
package com.keygenqt.shop.android.components.lottie

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.airbnb.lottie.compose.LottieAnimation
import com.airbnb.lottie.compose.LottieCompositionSpec
import com.airbnb.lottie.compose.rememberLottieComposition
import com.keygenqt.shop.android.R

/**
 * Page animation
 */
@Composable
fun CatPlayingAnimation(
    modifier: Modifier = Modifier
) {
    val composition by rememberLottieComposition(LottieCompositionSpec.RawRes(R.raw.cat_playing_animation))

    Box(
        modifier = modifier.size(210.dp)
    ) {
        Box(
            modifier = modifier
                .size(170.dp)
                .clip(CircleShape)
                .background(Color(0xFFD1D4DB))
                .padding(5.dp)
                .align(Alignment.Center)
        ) {
            Box(
                modifier = modifier
                    .fillMaxSize()
                    .clip(CircleShape)
                    .background(MaterialTheme.colors.background)
            ) {}
        }

        LottieAnimation(
            speed = 1f,
            iterations = Int.MAX_VALUE,
            composition = composition,
            modifier = Modifier
                .fillMaxSize()
                .align(Alignment.Center)
                .offset(x = 30.dp, y = 10.dp)
        )
    }
}
