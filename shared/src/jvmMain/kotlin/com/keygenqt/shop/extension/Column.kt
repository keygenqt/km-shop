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

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.Function

/**
 * Add column distinct
 */
fun Column<*>.distinctOn(): Function<Int> = DistinctOn(this)

class DistinctOn(vararg val expr: Expression<*>) : Function<Int>(IntegerColumnType()) {
    override fun toQueryBuilder(queryBuilder: QueryBuilder) = queryBuilder {
        append("DISTINCT (")
        append(*expr)
        append(")")
    }
}
