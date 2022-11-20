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