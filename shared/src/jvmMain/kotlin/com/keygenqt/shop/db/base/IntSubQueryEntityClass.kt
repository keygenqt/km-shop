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
package com.keygenqt.shop.db.base

import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IdTable
import org.jetbrains.exposed.sql.*
import kotlin.reflect.KProperty

/**
 * Custom sub delegate for relations sub query with condition
 */
abstract class IntSubQueryEntityClass<out E : IntEntity> constructor(
    table: IdTable<Int>,
    entityType: Class<E>? = null,
    entityCtor: ((EntityID<Int>) -> E)? = null
) : EntityClass<Int, E>(table, entityType, entityCtor) {

    var selectCountCondition: HashMap<KProperty<*>, Op<Boolean>> = hashMapOf()
    var isHasCondition: HashMap<KProperty<*>, Op<Boolean>> = hashMapOf()

    /**
     * Delegate check count != 0
     */
    class IsHas(val column: Column<EntityID<Int>>) {
        operator fun getValue(thisRef: IntEntity, property: KProperty<*>): Boolean {
            (thisRef.klass as IntSubQueryEntityClass).isHasCondition[property]?.let {
                return column.table.select { (column eq thisRef.id and it) }.count() > 0
            } ?: run {
                return column.table.select { (column eq thisRef.id) }.count() > 0
            }
        }
    }

    /**
     * Delegate get count sub select
     */
    class SelectCount(val column: Column<EntityID<Int>>) {
        operator fun getValue(thisRef: IntEntity, property: KProperty<*>): Long {
            (thisRef.klass as IntSubQueryEntityClass).selectCountCondition[property]?.let {
                return column.table.select { (column eq thisRef.id and it) }.count()
            } ?: run {
                return column.table.select { (column eq thisRef.id) }.count()
            }
        }
    }

    fun isHas(
        prop: KProperty<*>,
        op: SqlExpressionBuilder.() -> Op<Boolean>
    ): IntSubQueryEntityClass<E> {
        isHasCondition[prop] = SqlExpressionBuilder.op()
        return this
    }

    fun selectCount(
        prop: KProperty<*>,
        op: SqlExpressionBuilder.() -> Op<Boolean>
    ): IntSubQueryEntityClass<E> {
        selectCountCondition[prop] = SqlExpressionBuilder.op()
        return this
    }

    companion object {
        infix fun Boolean.Companion.isHas(column: Column<EntityID<Int>>) = IsHas(column)
        infix fun Long.Companion.selectCount(column: Column<EntityID<Int>>) = SelectCount(column)
    }
}
