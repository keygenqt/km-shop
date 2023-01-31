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

import com.keygenqt.shop.data.responses.ProductResponse
import com.keygenqt.shop.db.base.IntSubQueryEntityClass
import com.keygenqt.shop.extension.toUTC
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Table

/**
 * Table shop products
 */
object Products : IntIdTable() {
    val categoryID = reference("category", Categories)
    val image1 = varchar("image1", 255)
    val image2 = varchar("image2", 255).nullable()
    val image3 = varchar("image3", 255).nullable()
    val name = varchar("name", 255).uniqueIndex()
    val description = text("description")
    val price = double("price")
    val isPublished = bool("isPublished").default(false)
    val createAt = long("createAt")
    val updateAt = long("updateAt")
}

/**
 * References table [Uploads]
 */
object ProductUploads : Table() {
    val product = reference("product", Products)
    val upload = reference("upload", Uploads)
    override val primaryKey = PrimaryKey(product, upload, name = "PK_productUploads_p_u")
}

/**
 * References table [Uploads]
 */
object ProductCollections : Table() {
    val product = reference("product", Products)
    val collection = reference("collection", Collections)
    override val primaryKey = PrimaryKey(product, collection, name = "PK_productCollections_p_c")
}

/**
 * Exposed entity
 */
class ProductEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntSubQueryEntityClass<ProductEntity>(Products)

    var categoryID by Products.categoryID
    var image1 by Products.image1
    var image2 by Products.image2
    var image3 by Products.image3
    var name by Products.name
    var description by Products.description
    var price by Products.price
    var isPublished by Products.isPublished
    var createAt by Products.createAt
    var updateAt by Products.updateAt

    var category by CategoryEntity referencedOn Products.categoryID
    var uploads by UploadEntity via ProductUploads
    var collections by CollectionEntity via ProductCollections
}

/**
 * Convert to [ProductResponse]
 */
fun ProductEntity.toModel() = ProductResponse(
    id = id.value,
    category = category.toModel(),
    image1 = image1,
    image2 = image2,
    image3 = image3,
    name = name,
    description = description,
    price = price,
    collections = collections.toModels().toTypedArray(),
    isPublished = isPublished,
    createAt = createAt.toUTC(),
    updateAt = updateAt.toUTC(),
)

fun ProductEntity.toModelWithUploads() = toModel().copy(
    uploads = uploads.toModels().toTypedArray(),
)

/**
 * Convert to [List]
 */
fun Iterable<ProductEntity>.toModels(): List<ProductResponse> {
    return map { it.toModel() }
}
