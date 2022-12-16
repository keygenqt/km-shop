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
package com.keygenqt.shop.android.features.contact.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.ComposeWebView
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.lottie.LoadingAnimation
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@Composable
fun ContactMapBlock(
    onFocused: (Boolean) -> Unit,
) {
    val scope = rememberCoroutineScope()
    var finished by remember { mutableStateOf(false) }
    val interactionSource = remember { MutableInteractionSource() }

    Card(
        backgroundColor = MaterialTheme.colors.secondaryVariant,
        modifier = Modifier.fillMaxWidth()
    ) {
        Box {
            ComposeWebView(
                url = "https://yandex.com/map-widget/v1/?um=constructor%3A76ab87516c046b5d4f54647f1b9fe382edcaa24c935e6be8898244ec111ab1f4&amp;source=constructor",
                modifier = Modifier
                    .fillMaxWidth()
                    .height(200.dp),
                onFocused = onFocused,
                onFinished = {
                    scope.launch {
                        delay(1500)
                        finished = true
                    }
                }
            )

            if (!finished) {
                Box(
                    modifier = Modifier
                        .background(LocalAndroidColors.current.bgVariant1)
                        .clickable(
                            interactionSource = interactionSource,
                            indication = null
                        ) { }
                        .fillMaxWidth()
                        .height(200.dp),
                ) {
                    LoadingAnimation(
                        modifier = Modifier
                            .align(Alignment.Center)
                    )
                }
            }
        }
    }
}
