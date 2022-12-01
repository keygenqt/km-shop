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
import com.keygenqt.shop.db.entities.OrderProductEntity
import com.keygenqt.shop.db.entities.Orders
import com.keygenqt.shop.db.entities.Products
import com.keygenqt.shop.extension.getTimestampDayFirstDayOfMonth
import com.keygenqt.shop.extension.getTimestampDayLastDayOfMonth
import com.keygenqt.shop.interfaces.IService
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.and
import java.time.Month
import java.util.*

class OrdersService(
    override val db: DatabaseMysql
) : IService<OrdersService> {

    /**
     * Get entity by ID
     */
    fun findById(id: Int) = OrderEntity.findById(id)

    /**
     * Get entity by number
     */
    fun findByNumber(number: String) = OrderEntity
        .find { (Orders.number eq number) }
        .firstOrNull()

    /**
     * Get orders count by month & year entities
     */
    fun getMonthCount(
        month: Month,
        year: Int,
        state: OrderState? = null
    ) = OrderEntity
        .find {
            state?.let {
                (Orders.createAt greater year.getTimestampDayFirstDayOfMonth(
                    month = month
                )) and (Orders.createAt lessEq year.getTimestampDayLastDayOfMonth(
                    month = month
                )) and (Orders.state eq state)
            } ?: run {
                (Orders.createAt greater year.getTimestampDayFirstDayOfMonth(
                    month = month
                )) and (Orders.createAt lessEq year.getTimestampDayLastDayOfMonth(
                    month = month
                ))
            }
        }
        .count()
        .toInt()

    /**
     * Get "Best Seller" by ids
     */
    fun getBestSeller(
        ids: List<Int>
    ) = OrderEntity
        .find { (Orders.id inList ids) }
        // order by ids
        .associateBy { it.id.value }
        .let { entities -> ids.mapNotNull { entities[it] } }

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

    /**
     * Create entity
     */
    fun insertOrderProduct(
        productID: Int,
        count: Int,
        price: Double,
    ) = OrderProductEntity.new {
        this.productID = EntityID(productID, Products)
        this.count = count
        this.price = price
    }

    /**
     * Create entity
     */
    fun insert(
        email: String,
        phone: String,
        address: String,
        products: List<OrderProductEntity>
    ) = OrderEntity.new {
        this.number = UUID.randomUUID().toString()
        this.email = email
        this.phone = phone
        this.address = address
        this.note = ""
        this.state = OrderState.NEW
        this.createAt = System.currentTimeMillis()
        this.updateAt = System.currentTimeMillis()
        this.products = SizedCollection(*products.toList().toTypedArray())
    }
}


