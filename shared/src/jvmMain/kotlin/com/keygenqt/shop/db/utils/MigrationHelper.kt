package com.keygenqt.shop.db.utils

import com.keygenqt.shop.data.responses.AdminRole
import com.keygenqt.shop.db.entities.Admins
import com.keygenqt.shop.db.entities.Categories
import com.keygenqt.shop.db.entities.CategoryEntity
import com.keygenqt.shop.db.entities.ProductEntity
import com.keygenqt.shop.extension.createFileUpload
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.insert

object MigrationHelper {

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
    ): Map<String, EntityID<Int>> {

        val ids = mutableMapOf<String, EntityID<Int>>()

        categories.forEach { item ->
            item as Map<*, *>
            // load variable
            val key = item["key"] as String
            val name = item["name"] as String
            val image = item["image"] as String
            val isPublished = item["isPublished"] as Boolean

            // create entity file
            val uploadEntity = image.createFileUpload()

            // create category
            val entity = CategoryEntity.new {
                this.name = name
                this.isPublished = isPublished
                this.createAt = System.currentTimeMillis()
                this.updateAt = System.currentTimeMillis()
                this.image = "$host/api/uploads/${uploadEntity?.fileName}"
                this.uploads = SizedCollection(*listOfNotNull(uploadEntity).toTypedArray())
            }
            ids[key] = entity.id
        }

        return ids
    }

    /**
     * Insert products by yml config
     */
    fun insertProducts(
        host: String,
        products: List<*>,
        categoriesIds: Map<String, EntityID<Int>> = emptyMap()
    ) {
        products.forEach { item ->
            item as Map<*, *>

            // get id category
            val entityID =  item["categoryKey"]
                ?.let { categoriesIds[it as String]!! }
                ?: EntityID(item["categoryID"] as Int, Categories)

            // load variable
            val categoryID = item["categoryID"]
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
                this.image = "$host/api/uploads/${uploadEntity?.fileName}"
                this.uploads = SizedCollection(*listOfNotNull(uploadEntity).toTypedArray())
            }
        }
    }
}