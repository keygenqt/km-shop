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
package com.keygenqt.shop.android.features.exploring.elements

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CategoryModel

@Composable
fun CategoryItem(
    model: CategoryModel,
    onClickCategory: (String, Int) -> Unit
) {
    Box {
        Box(
            modifier = Modifier.padding(start = 30.dp)
        ) {
            Card(
                elevation = 0.dp,
                backgroundColor = LocalAndroidColors.current.bgVariant1,
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier
                        .clickable { onClickCategory(model.name, model.id) }
                        .fillMaxWidth()
                        .padding(start = 43.dp, end = 16.dp, top = 16.dp, bottom = 16.dp)
                ) {
                    Column {
                        AppText(
                            modifier = Modifier
                                .fillMaxWidth()
                                .offset(0.dp, (-3).dp),
                            style = MaterialTheme.typography.h6,
                            text = model.name
                        )

                        Spacer(modifier = Modifier.size(4.dp))

                        AppText(
                            color = LocalAndroidColors.current.textCaption,
                            style = MaterialTheme.typography.caption,
                            text = model.desc
                        )
                    }
                }
            }
        }
        AsyncImage(
            model = ImageRequest.Builder(LocalContext.current)
                .data(model.image)
                .crossfade(true)
                .build(),
            placeholder = painterResource(R.drawable.no_image),
            error = painterResource(R.drawable.no_image),
            contentDescription = "",
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .size(60.dp)
                .align(Alignment.CenterStart)
                .shadow(
                    elevation = 8.dp,
                    shape = CircleShape,
                    clip = true
                )
        )
    }
}
