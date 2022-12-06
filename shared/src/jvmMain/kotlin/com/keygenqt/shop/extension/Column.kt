package com.keygenqt.shop.extension

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.Function

/**
 * Add column distinct
 */
fun Column<*>.distinctOn(): Function<Int> = DistinctOn(this)

class DistinctOn(vararg val expr: Expression<*>) : Function<Int>(IntegerColumnType()) {
    override fun toQueryBuilder(queryBuilder: QueryBuilder)  = queryBuilder {
        append("DISTINCT (")
        append(*expr)
        append(")")
    }
}