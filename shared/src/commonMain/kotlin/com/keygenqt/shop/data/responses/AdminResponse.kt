package com.keygenqt.shop.data.responses

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Role uer in app
 */
@JsExport
enum class AdminRole {
    MANAGER, ADMIN
}

/**
 * Test model query
 */
@JsExport
@Serializable
data class AdminModel(
    val id: Int,
    val email: String,
    val role: AdminRole,
)