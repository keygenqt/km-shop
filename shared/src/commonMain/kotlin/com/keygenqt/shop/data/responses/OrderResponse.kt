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
    NEW, PENDING, COMPLETED
}

/**
 * Response order info
 */
@JsExport
@Serializable
data class OrderProductResponse(
    val price: Double,
    val count: Int,
    val product: ProductResponse,
)

/**
 * Response user orders
 */
@JsExport
@Serializable
data class OrderResponse(
    val id: Int,
    val email: String,
    val phone: String,
    val state: OrderState,
    val products: Array<OrderProductResponse>,
    val createAt: String,
    val updateAt: String,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as OrderResponse

        if (id != other.id) return false
        if (email != other.email) return false
        if (phone != other.phone) return false
        if (state != other.state) return false
        if (!products.contentEquals(other.products)) return false
        if (createAt != other.createAt) return false
        if (updateAt != other.updateAt) return false

        return true
    }

    override fun hashCode(): Int {
        var result = id
        result = 31 * result + email.hashCode()
        result = 31 * result + phone.hashCode()
        result = 31 * result + state.hashCode()
        result = 31 * result + products.contentHashCode()
        result = 31 * result + createAt.hashCode()
        result = 31 * result + updateAt.hashCode()
        return result
    }
}
