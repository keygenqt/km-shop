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
package com.keygenqt.shop.db.service

import com.keygenqt.shop.data.responses.OrderState
import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.db.entities.OrderEntity
import com.keygenqt.shop.db.entities.Orders
import com.keygenqt.shop.interfaces.IService
import org.jetbrains.exposed.sql.SortOrder

class OrdersService(
    override val db: DatabaseMysql
) : IService<OrdersService> {

    /**
     * Get entity by ID
     */
    fun findById(id: Int) = OrderEntity.findById(id)

    /**
     * Get all entities
     */
    // @todo
    fun getBestSeller() = OrderEntity
        .all()
        .limit(5)
        .orderBy(Pair(Orders.createAt, SortOrder.DESC))

    /**
     * Get all [OrderState.NEW] entities
     */
    fun getAllNew() = OrderEntity
        .find { (Orders.state eq OrderState.NEW) }
        .orderBy(Pair(Orders.createAt, SortOrder.DESC))

    /**
     * Get all [OrderState.PENDING] entities
     */
    fun getAllPending() = OrderEntity
        .find { (Orders.state eq OrderState.PENDING) }
        .orderBy(Pair(Orders.createAt, SortOrder.DESC))

    /**
     * Get all [OrderState.COMPLETED] entities
     */
    fun getAllCompleted() = OrderEntity
        .find { (Orders.state eq OrderState.COMPLETED) }
        .orderBy(Pair(Orders.createAt, SortOrder.DESC))

    /**
     * Get all [OrderState.CANCELED] entities
     */
    fun getAllCanceled() = OrderEntity
        .find { (Orders.state eq OrderState.CANCELED) }
        .orderBy(Pair(Orders.createAt, SortOrder.DESC))

    /**
     * Update customer entity
     */
    fun OrderEntity.updateCustomer(
        email: String,
        phone: String,
        address: String,
    ) = let { entity ->
        entity.email = email
        entity.phone = phone
        entity.address = address
        entity.updateAt = System.currentTimeMillis()
        entity
    }

    /**
     * Update note entity
     */
    fun OrderEntity.updateNote(
        note: String,
    ) = let { entity ->
        entity.note = note
        entity.updateAt = System.currentTimeMillis()
        entity
    }

    /**
     * Update state entity
     */
    fun OrderEntity.updateState(
        state: OrderState,
    ) = let { entity ->
        entity.state = state
        entity.updateAt = System.currentTimeMillis()
        entity
    }
}
