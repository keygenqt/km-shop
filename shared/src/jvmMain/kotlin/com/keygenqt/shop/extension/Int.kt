package com.keygenqt.shop.extension

import kotlinx.datetime.*
import java.time.YearMonth

/**
 * Get timestamp first day of month
 */
fun Int.getTimestampDayFirstDayOfMonth(month: Month) = LocalDateTime(
    year = this,
    month = month,
    dayOfMonth = 1,
    hour = 0,
    minute = 0,
    second = 0,
    nanosecond = 0
)
    .toInstant(UtcOffset.ZERO)
    .toEpochMilliseconds()

/**
 * Get timestamp last day of month
 */
fun Int.getTimestampDayLastDayOfMonth(month: Month) = LocalDateTime(
    year = this,
    month = month,
    dayOfMonth = YearMonth.of(this, month.number).atEndOfMonth().dayOfMonth,
    hour = 23,
    minute = 59,
    second = 59,
    nanosecond = 999
)
    .toInstant(UtcOffset.ZERO)
    .toEpochMilliseconds()