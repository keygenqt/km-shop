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
package com.keygenqt.shop.android.features.products.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Divider
import androidx.compose.material.Icon
import androidx.compose.material.IconToggleButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AddShoppingCart
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.base.PriceBlock
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.ProductModel

@Composable
fun ProductItem(
    index: Int,
    model: ProductModel,
    onClickProduct: (Int) -> Unit
) {
    if (index != 0) {
        Spacer(modifier = Modifier.size(16.dp))
    }

    Column(
        modifier = Modifier
            .shadow(
                elevation = 1.dp,
                shape = MaterialTheme.shapes.medium,
                clip = true
            )
            .background(MaterialTheme.colors.surface)
            .fillMaxWidth()
            .clickable { onClickProduct.invoke(model.id) }
            .padding(10.dp)
    ) {
        Column {
            Row(
                verticalAlignment = Alignment.CenterVertically
            ) {

                Box(
                    modifier = Modifier.fillMaxHeight()
                ) {
                    AsyncImage(
                        model = ImageRequest.Builder(LocalContext.current)
                            .data(model.image1)
                            .crossfade(true)
                            .build(),
                        placeholder = painterResource(R.drawable.no_image),
                        error = painterResource(R.drawable.no_image),
                        contentDescription = "",
                        contentScale = ContentScale.Crop,
                        modifier = Modifier
                            .clip(CircleShape)
                            .size(60.dp)
                            .align(Alignment.TopCenter)
                    )
                }

                Spacer(modifier = Modifier.size(10.dp))

                Column {
                    AppText(
                        maxLines = 1,
                        text = model.name,
                        style = MaterialTheme.typography.h6
                    )

                    Spacer(modifier = Modifier.size(6.dp))

                    AppText(
                        text = model.description,
                        color = LocalAndroidColors.current.textCaption,
                        style = MaterialTheme.typography.caption
                    )
                }
            }

            Spacer(modifier = Modifier.size(10.dp))
            Divider()
            Spacer(modifier = Modifier.size(10.dp))

            Row {
                PriceBlock(
                    price = model.price
                )

                Spacer(modifier = Modifier.weight(1f))

                IconToggleButton(
                    modifier = Modifier
                        .border(
                            width = 1.dp,
                            color = MaterialTheme.colors.secondary,
                            shape = CircleShape
                        )
                        .size(28.dp),
                    checked = true,
                    onCheckedChange = {
                    }
                ) {
                    Icon(
                        contentDescription = null,
                        modifier = Modifier.size(14.dp),
                        imageVector = Icons.Outlined.AddShoppingCart,
                        tint = MaterialTheme.colors.secondary
                    )
                }
            }
        }
    }
}
