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
package com.keygenqt.shop.android.features.order.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.material.Card
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Email
import androidx.compose.material.icons.outlined.Map
import androidx.compose.material.icons.outlined.Person
import androidx.compose.material.icons.outlined.Phone
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.OrderModel

@Composable
fun OrderClientDetails(
    model: OrderModel
) {
    val dark = isSystemInDarkTheme()

    Card(
        backgroundColor = MaterialTheme.colors.surface,
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            Row {
                Icon(
                    contentDescription = null,
                    imageVector = Icons.Outlined.Person,
                    tint = MaterialTheme.colors.onSurface
                )
                Spacer(modifier = Modifier.size(10.dp))
                AppText(text = "Сведения о клиенте")
            }

            Spacer(modifier = Modifier.size(16.dp))

            Column(
                modifier = Modifier
                    .clip(MaterialTheme.shapes.medium)
                    .background(if (dark) MaterialTheme.colors.background else LocalAndroidColors.current.bgVariant1)
                    .fillMaxWidth()
                    .padding(10.dp)

            ) {
                Row {
                    Icon(
                        contentDescription = null,
                        imageVector = Icons.Outlined.Phone,
                        tint = MaterialTheme.colors.primary
                    )
                    Spacer(modifier = Modifier.size(10.dp))
                    AppText(text = model.phone)
                }

                if (model.email.isNotBlank()) {
                    Spacer(modifier = Modifier.size(10.dp))

                    Row {
                        Icon(
                            contentDescription = null,
                            imageVector = Icons.Outlined.Email,
                            tint = MaterialTheme.colors.primary
                        )
                        Spacer(modifier = Modifier.size(10.dp))
                        AppText(text = model.email)
                    }
                }
                if (model.address.isNotBlank()) {
                    Spacer(modifier = Modifier.size(10.dp))

                    Row {
                        Icon(
                            contentDescription = null,
                            imageVector = Icons.Outlined.Map,
                            tint = MaterialTheme.colors.primary
                        )
                        Spacer(modifier = Modifier.size(10.dp))
                        AppText(text = model.address)
                    }
                }
            }
        }
    }
}
