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
package com.keygenqt.shop.android.components.state

import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.lottie.SuccessCartAnimation
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun SuccessCartBody(
    title: String,
    subtitle: String,
    btn: (@Composable () -> Unit)?,
) {
    Box {
        Box(
            modifier = Modifier.fillMaxSize(),
        ) {
            Column(
                modifier = Modifier
                    .align(Alignment.Center)
                    .offset(0.dp, (-23).dp),
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                SuccessCartAnimation(
                    modifier = Modifier.size(136.dp)
                )

                Spacer(modifier = Modifier.size(34.dp))

                AppText(
                    modifier = Modifier
                        .fillMaxWidth(),
                    text = title,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.size(16.dp))

                AppText(
                    modifier = Modifier.fillMaxWidth(0.7f),
                    color = LocalAndroidColors.current.textCaption,
                    style = MaterialTheme.typography.caption,
                    text = subtitle,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.size(16.dp))

                btn?.let {
                    btn.invoke()
                    Spacer(modifier = Modifier.size(16.dp))
                }
            }
        }
    }
}
