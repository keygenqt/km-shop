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
import androidx.compose.material.icons.outlined.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.OrderModel

@Composable
fun OrderStateDetails(
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
                    imageVector = Icons.Outlined.Info,
                    tint = MaterialTheme.colors.onSurface
                )
                Spacer(modifier = Modifier.size(10.dp))
                AppText(text = "Статус заказа")
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
                    when (model.state) {
                        com.keygenqt.shop.data.responses.OrderState.NEW -> {
                            Icon(
                                contentDescription = null,
                                imageVector = Icons.Outlined.NewReleases,
                                tint = MaterialTheme.colors.secondary
                            )
                            Spacer(modifier = Modifier.size(10.dp))
                            AppText(text = "Новый")
                        }
                        com.keygenqt.shop.data.responses.OrderState.PENDING -> {
                            Icon(
                                contentDescription = null,
                                imageVector = Icons.Outlined.PendingActions,
                                tint = MaterialTheme.colors.primary
                            )
                            Spacer(modifier = Modifier.size(10.dp))
                            AppText(text = "В ожидании")
                        }
                        com.keygenqt.shop.data.responses.OrderState.COMPLETED -> {
                            Icon(
                                contentDescription = null,
                                imageVector = Icons.Outlined.Verified,
                                tint = Color(0XFF22C55E)
                            )
                            Spacer(modifier = Modifier.size(10.dp))
                            AppText(text = "Завершенный")
                        }
                        com.keygenqt.shop.data.responses.OrderState.CANCELED -> {
                            Icon(
                                contentDescription = null,
                                imageVector = Icons.Outlined.Block,
                                tint = Color(0XFFE93B9F)
                            )
                            Spacer(modifier = Modifier.size(10.dp))
                            AppText(text = "Отменено")
                        }
                    }
                }

                if (model.note.isNotBlank()) {
                    Spacer(modifier = Modifier.size(10.dp))

                    Row {
                        Icon(
                            contentDescription = null,
                            imageVector = Icons.Outlined.Note,
                            tint = MaterialTheme.colors.primary
                        )
                        Spacer(modifier = Modifier.size(10.dp))
                        AppText(text = model.note)
                    }
                }
            }
        }
    }
}
