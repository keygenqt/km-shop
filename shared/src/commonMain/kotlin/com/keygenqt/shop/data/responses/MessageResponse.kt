package com.keygenqt.shop.data.responses

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Response for help desk
 */
@JsExport
@Serializable
data class MessageResponse(
    val id: Int,
    val email: String,
    val message: String,
    val isSent: Boolean,
    val createAt: String,
    val updateAt: String,
)