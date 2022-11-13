package com.keygenqt.shop.extension

import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime

/**
 * Convert long to UTC string
 */
fun Long.toUTC(): String = Instant.fromEpochMilliseconds(this)
    .toLocalDateTime(TimeZone.UTC)
    .toString()