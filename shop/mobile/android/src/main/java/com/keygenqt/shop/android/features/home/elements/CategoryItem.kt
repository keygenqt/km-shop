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

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.TextButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.ArrowForward
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CategoryModel

@Composable
fun CategoryItem(
    model: CategoryModel,
    onClickCategory: (String, Int) -> Unit,
    bg: Painter
) {
    val dark = isSystemInDarkTheme()

    Box(
        modifier = Modifier
            .clip(MaterialTheme.shapes.medium)
            .fillMaxWidth()
            .background(Color.White)
    ) {
        Image(
            modifier = Modifier
                .height(120.dp)
                .align(Alignment.BottomEnd),
            contentDescription = null,
            painter = bg,
            contentScale = ContentScale.Inside,
        )

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(8.dp)
        ) {

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp)
            ) {
                AppText(
                    text = model.name,
                    color = if (dark) MaterialTheme.colors.surface else LocalAndroidColors.current.textCaption,
                    style = MaterialTheme.typography.caption
                )

                Spacer(modifier = Modifier.height(6.dp))

                AppText(
                    color = Color.Black,
                    text = model.desc,
                    style = MaterialTheme.typography.body1,
                )
            }

            Box(
                modifier = Modifier.padding(start = if (dark) 8.dp else 0.dp)
            ) {
                TextButton(
                    colors = if (dark) ButtonDefaults.textButtonColors(
                        backgroundColor = MaterialTheme.colors.surface
                    ) else ButtonDefaults.textButtonColors(),
                    onClick = {
                        onClickCategory.invoke(model.name, model.id)
                    }
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        AppText(
                            color = if (dark) MaterialTheme.colors.onSurface else MaterialTheme.colors.primary,
                            text = stringResource(id = R.string.category_block_btn),
                            style = MaterialTheme.typography.caption,
                        )

                        Spacer(modifier = Modifier.width(4.dp))

                        Icon(
                            modifier = Modifier.height(14.dp),
                            imageVector = Icons.Outlined.ArrowForward,
                            contentDescription = null,
                            tint = if (dark) MaterialTheme.colors.onSurface else MaterialTheme.colors.primary
                        )
                    }
                }
            }
        }
    }
}
