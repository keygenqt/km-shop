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
package com.keygenqt.shop.data.requests

import com.keygenqt.shop.data.responses.OrderState
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Request update order note
 */
@JsExport
@Serializable
data class OrderNoteRequest(
    val note: String,
)

/**
 * Request update order customer
 */
@JsExport
@Serializable
data class OrderCustomerRequest(
    val email: String,
    val phone: String,
    val address: String,
)

/**
 * Request update order state
 */
@JsExport
@Serializable
data class OrderStateRequest(
    val state: OrderState,
)

/**
 * Request create order
 */
@JsExport
@Serializable
@Suppress("ArrayInDataClass")
data class OrderCreateRequest(
    val email: String,
    val phone: String,
    val address: String,
    val products: Array<OrderProductRequest>,
)

/**
 * Request order products
 */
@JsExport
@Serializable
data class OrderProductRequest(
    val productID: Int,
    val count: Int,
    val price: Double,
)
