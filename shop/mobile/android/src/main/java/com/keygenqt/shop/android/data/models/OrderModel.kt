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
package com.keygenqt.shop.android.data.models

import androidx.compose.runtime.Immutable
import androidx.room.PrimaryKey
import com.keygenqt.shop.data.responses.OrderResponse
import com.keygenqt.shop.data.responses.OrderState

/**
 * Order model without db
 */
@Immutable
data class OrderModel(
    @PrimaryKey val id: Int,
    val number: String,
    val email: String,
    val phone: String,
    val address: String,
    val note: String,
    val state: OrderState,
    val sum: Double,
    val products: List<OrderProductModel>,
    val createAt: String,
    val updateAt: String,
)

fun OrderResponse.mapToModel() =
    OrderModel(
        id = id,
        number = number,
        email = email,
        phone = phone,
        address = address,
        note = note,
        state = state,
        sum = sum,
        products = products.toList().mapToModels(),
        createAt = createAt,
        updateAt = updateAt,
    )

fun List<OrderResponse>.mapToModels() =
    map { it.mapToModel() }
