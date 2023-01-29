package com.keygenqt.shop.data.responses

import kotlinx.serialization.Serializable

/**
 * Response notification action
 */
enum class NotificationAction {
    ORDER_CHANGE,
    HELP_CHANGE
}

/**
 * Response notification
 */
@Serializable
data class NotificationResponse(
    val action: NotificationAction,
)