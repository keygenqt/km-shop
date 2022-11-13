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
    val image = varchar("image", 255)
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
 * Exposed entity
 */
class ProductEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntSubQueryEntityClass<ProductEntity>(Products)

    var categoryID by Products.categoryID
    var image by Products.image
    var name by Products.name
    var description by Products.description
    var price by Products.price
    var isPublished by Products.isPublished
    var createAt by Products.createAt
    var updateAt by Products.updateAt

    var category by CategoryEntity referencedOn Products.categoryID
    var uploads by UploadEntity via ProductUploads
}

/**
 * Convert to [ProductResponse]
 */
fun ProductEntity.toModel() = ProductResponse(
    id = id.value,
    category = category.toModel(),
    image = image,
    name = name,
    description = description,
    price = price,
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

fun Iterable<ProductEntity>.toModelsWithUploads(): List<ProductResponse> {
    return map { it.toModelWithUploads() }
}
