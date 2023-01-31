/*
 * Copyright 2023 Vitaliy Zarubin
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
