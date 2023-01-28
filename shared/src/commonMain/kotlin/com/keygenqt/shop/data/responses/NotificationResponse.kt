package com.keygenqt.shop.data.responses

import kotlinx.serialization.Serializable

/**
 * Response notification action
 */
enum class NotificationAction {
    ORDER,
    HELP
}

/**
 * Response notification
 */
@Serializable
data class NotificationResponse(
    val action: NotificationAction,
    val count: Long,
)