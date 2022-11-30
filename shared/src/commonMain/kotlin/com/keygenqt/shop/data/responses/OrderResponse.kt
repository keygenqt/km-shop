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
package com.keygenqt.shop.data.responses

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * State order
 */
@JsExport
enum class OrderState {
    NEW, PENDING, COMPLETED, CANCELED
}

/**
 * Response order info
 */
@JsExport
@Serializable
data class OrderProductResponse(
    val price: Double,
    val count: Int,
    val sum: Double,
    val product: ProductResponse,
)

/**
 * Response user orders
 */
@JsExport
@Serializable
@Suppress("ArrayInDataClass")
data class OrderResponse(
    val id: Int,
    val number: String,
    val email: String,
    val phone: String,
    val address: String,
    val note: String,
    val state: OrderState,
    val sum: Double,
    val products: Array<OrderProductResponse>,
    val createAt: String,
    val updateAt: String,
)
