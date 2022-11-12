package com.keygenqt.shop.exception

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Field errors
 */
@JsExport
@Serializable
data class ValidateViolation(
    val filed: String,
    val errors: Array<String>
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as ValidateViolation

        if (filed != other.filed) return false
        if (!errors.contentEquals(other.errors)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = filed.hashCode()
        result = 31 * result + errors.contentHashCode()
        return result
    }
}