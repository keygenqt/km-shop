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
package com.keygenqt.shop.db.utils

import com.keygenqt.shop.data.responses.AdminRole
import com.keygenqt.shop.data.responses.OrderState
import com.keygenqt.shop.db.entities.*
import com.keygenqt.shop.extension.createFileUpload
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.insert
import java.util.*

object MigrationHelper {

    /**
     * Insert messages by yml config
     */
    fun insertOrders(orders: List<*>) {
        orders.forEach { item ->
            item as Map<*, *>
            // load variable
            val phone = item["phone"] as String
            val email = item["email"]?.let { it as String }
            val state = item["state"] as String
            val products = (item["products"] as List<*>).map { it as Map<*, *> }

            val productsEntities = ProductEntity.find {
                (Products.id inList products.map { it["id"] as Int })
            }

            val orderProducts = mutableListOf<OrderProductEntity>()

            productsEntities.forEach { product ->
                orderProducts.add(
                    OrderProductEntity.new {
                        productID = product.id
                        count =
                            products.first { (it["id"] as Int) == product.id.value }["count"] as Int
                        price = product.price
                    }
                )
            }

            // create user
            OrderEntity.new {
                this.number = UUID.randomUUID().toString()
                this.phone = phone
                this.email = email ?: ""
                this.address = ""
                this.note = ""
                this.state = OrderState.valueOf(state)
                this.createAt = System.currentTimeMillis()
                this.updateAt = System.currentTimeMillis()
                this.products = SizedCollection(*orderProducts.toList().toTypedArray())
            }
        }
    }

    /**
     * Insert messages by yml config
     */
    fun insertMessages(messages: List<*>) {
        messages.forEach { item ->
            item as Map<*, *>
            // load variable
            val fname = item["fname"] as String
            val lname = item["lname"] as String
            val email = item["email"] as String
            val phone = item["phone"] as String?
            val message = item["message"] as String

            // create user
            Messages.insert {
                it[Messages.fname] = fname
                it[Messages.lname] = lname
                it[Messages.email] = email
                it[Messages.phone] = phone ?: ""
                it[Messages.message] = message
                it[createAt] = System.currentTimeMillis()
                it[updateAt] = System.currentTimeMillis()
            }
        }
    }

    /**
     * Insert admins by yml config
     */
    fun insertAdmins(admins: List<*>) {
        admins.forEach { item ->
            item as Map<*, *>
            // load variable
            val role = item["role"] as String
            val email = item["email"] as String
            val password = item["password"] as String

            // create user
            Admins.insert {
                it[Admins.email] = email
                it[Admins.role] = AdminRole.valueOf(role)
                it[Admins.password] = Password.encode(password)
            }
        }
    }

    /**
     * Insert categories by yml config
     */
    fun insertCategories(
        host: String,
        categories: List<*>
    ) {
        categories.forEach { item ->
            item as Map<*, *>
            // load variable
            val key = item["key"] as String
            val name = item["name"] as String
            val desc = item["desc"] as String
            val image = item["image"] as String
            val isPublished = item["isPublished"] as Boolean

            // create entity file
            val uploadEntity = image.createFileUpload()

            // create category
            CategoryEntity.new {
                this.key = key
                this.name = name
                this.desc = desc
                this.isPublished = isPublished
                this.createAt = System.currentTimeMillis()
                this.updateAt = System.currentTimeMillis()
                this.image = "$host/api/uploads/${uploadEntity?.fileName}"
                this.uploads = SizedCollection(*listOfNotNull(uploadEntity).toTypedArray())
            }
        }
    }

    /**
     * Insert products by yml config
     */
    fun insertProducts(
        host: String,
        products: List<*>,
    ) {
        products.forEach { item ->
            item as Map<*, *>

            // get id category
            val entityID = EntityID(item["categoryID"] as Int, Categories)

            // load variable
            val name = item["name"] as String
            val description = item["description"] as String
            val price = item["price"] as Double
            val image = item["image"] as String
            val isPublished = item["isPublished"] as Boolean

            // create entity file
            val uploadEntity = image.createFileUpload()

            // create product
            ProductEntity.new {
                this.categoryID = entityID
                this.name = name
                this.price = price
                this.description = description
                this.isPublished = isPublished
                this.createAt = System.currentTimeMillis()
                this.updateAt = System.currentTimeMillis()
                this.image1 = "$host/api/uploads/${uploadEntity?.fileName}"
                this.uploads = SizedCollection(*listOfNotNull(uploadEntity).toTypedArray())
            }
        }
    }

    /**
     * Insert collections by yml config
     */
    fun insertCollections(
        collections: List<*>,
    ) {
        collections.forEach { item ->
            item as Map<*, *>

            // load variable
            val key = item["key"] as String
            val name = item["name"] as String
            val desc = item["desc"] as String
            val icon = item["icon"] as String
            val isPublished = item["isPublished"] as Boolean

            // create product
            CollectionEntity.new {
                this.key = key
                this.name = name
                this.desc = desc
                this.icon = icon
                this.isPublished = isPublished
                this.createAt = System.currentTimeMillis()
                this.updateAt = System.currentTimeMillis()
            }
        }
    }
}
