package com.keygenqt.shop.db.entities

import com.keygenqt.shop.db.base.IntSubQueryEntityClass
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

/**
 * References table
 */
object OrderProducts : IntIdTable() {
    val productID = reference("productID", Products)
    val price = double("price")
    val count = integer("count")
}

/**
 * Exposed entity
 */
class OrderProductEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntSubQueryEntityClass<OrderProductEntity>(OrderProducts)

    var productID by OrderProducts.productID
    var price by OrderProducts.price
    var count by OrderProducts.count

    var product by ProductEntity referencedOn OrderProducts.productID
}