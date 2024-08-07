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
package com.keygenqt.shop.db.entities

import com.keygenqt.shop.data.responses.OrderProductResponse
import com.keygenqt.shop.data.responses.OrderResponse
import com.keygenqt.shop.db.base.IntSubQueryEntityClass
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

/**
 * References table
 */
object OrderProducts : IntIdTable() {
    val productID = reference("productID", Products)
    val count = integer("count")
    val price = double("price")
}

/**
 * Exposed entity
 */
class OrderProductEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntSubQueryEntityClass<OrderProductEntity>(OrderProducts)

    var productID by OrderProducts.productID
    var count by OrderProducts.count
    var price by OrderProducts.price

    var product by ProductEntity referencedOn OrderProducts.productID
}

/**
 * Convert to [OrderResponse]
 */
fun OrderProductEntity.toModel() = OrderProductResponse(
    count = count,
    price = price,
    sum = price * count,
    product = product.toModel(),
)

/**
 * Convert to [List]
 */
fun Iterable<OrderProductEntity>.toModels(): List<OrderProductResponse> {
    return map { it.toModel() }
}

/**
 * Get sum order
 */
fun Iterable<OrderProductEntity>.sum(): Double {
    return map { it.toModel() }.sumOf { it.sum }
}
