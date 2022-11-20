package com.keygenqt.shop.extension

import kotlinx.datetime.Month
import java.time.Year
import java.time.YearMonth

/**
 * Get difference percent first = now, second = preview
 */
fun Pair<Int, Int>.getPercent(): Int = if (first == 0 && second == 0) {
    0
} else if (first == 0) {
    -100
} else if (second == 0) {
    100
} else if (first > second) {
    100 - (second * 100 / first)
} else {
    (100 - (first * 100 / second)) * -1
}

/**
 * Get dates month/year first = now, second = preview
 */
fun getDates(): Pair<Pair<Month, Int>, Pair<Month, Int>> {
    val dateNow = Pair(Month.of(YearMonth.now().monthValue), Year.now().value)
    val datePre = if (dateNow.first === Month.JANUARY) {
        Pair(Month.of(12), dateNow.second - 1)
    } else {
        Pair(Month.of(dateNow.first.value - 1), dateNow.second)
    }
    return Pair(dateNow, datePre)
}