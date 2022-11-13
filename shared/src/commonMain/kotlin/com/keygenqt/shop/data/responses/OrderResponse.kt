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
 * Response user orders
 */
@JsExport
@Serializable
data class OrderResponse(
    val id: Int,
    val email: String,
    val phone: String,
    val state: OrderState,
    val createAt: String,
    val updateAt: String,
)