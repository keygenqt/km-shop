/*
 * Copyright 2022 Vitaliy Zarubin
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

import com.keygenqt.shop.data.responses.OrderState
import org.jetbrains.exposed.sql.Transaction
import java.time.Month

/**
 * Get "Best Seller" ids
 */
fun Transaction.getBestSellerIDs() = run {
    val ids = mutableListOf<Int>()
    exec(
        """
        SELECT Orders.id, SUM(OrderProducts.price * OrderProducts.count) as sum FROM Orders 
        INNER JOIN OrderInfo ON Orders.id = OrderInfo.`order` 
        INNER JOIN OrderProducts ON OrderProducts.id = OrderInfo.products 
        GROUP BY Orders.id 
        ORDER BY sum 
        DESC LIMIT 5;
        """.trimIndent()
    ) { rs ->
        while (rs.next()) {
            ids.add(rs.getInt("id"))
        }
    }
    return@run ids
}

/**
 * Get month SUM order
 */
fun Transaction.getMountSum(
    month: Month,
    year: Int,
    state: OrderState
) = run {
    var sum = 0.0
    val from = year.getTimestampDayFirstDayOfMonth(month)
    val to = year.getTimestampDayLastDayOfMonth(month)
    exec(
        """
            SELECT Orders.state, SUM(OrderProducts.price * OrderProducts.count) as sum FROM Orders 
            INNER JOIN OrderInfo ON Orders.id = OrderInfo.`order` 
            INNER JOIN OrderProducts ON OrderProducts.id = OrderInfo.products 
            WHERE Orders.state = ${state.ordinal} AND Orders.createAt > $from AND Orders.createAt < $to
            GROUP BY Orders.state
        """.trimIndent()
    ) { rs ->
        while (rs.next()) {
            sum = rs.getDouble("sum")
            break
        }
    }
    return@run sum
}
