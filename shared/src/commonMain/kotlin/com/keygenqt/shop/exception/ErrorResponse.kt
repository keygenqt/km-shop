package com.keygenqt.shop.exception

import kotlinx.serialization.Serializable

/**
 * Error response model
 */
@Serializable
data class ErrorResponse(
    val code: Int,
    val message: String,
    val validate: List<ValidateViolation>? = null
)

