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

import com.keygenqt.shop.data.responses.CategoryResponse
import com.keygenqt.shop.extension.toUTC
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Table

/**
 * Table categories products
 */
object Categories : IntIdTable() {
    val name = varchar("name", 255)
    val image = varchar("image", 255)
    val isPublished = bool("isPublished").default(false)
    val createAt = long("createAt")
    val updateAt = long("updateAt")
}

/**
 * References table [Uploads]
 */
object CategoryUploads : Table() {
    val category = reference("category", Categories)
    val upload = reference("upload", Uploads)
    override val primaryKey = PrimaryKey(category, upload, name = "PK_categoryUploads_c_u")
}

/**
 * Exposed entity
 */
class CategoryEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<CategoryEntity>(Categories)

    var name by Categories.name
    var image by Categories.image
    var isPublished by Categories.isPublished
    var createAt by Categories.createAt
    var updateAt by Categories.updateAt

    var uploads by UploadEntity via CategoryUploads
}

/**
 * Convert to [CategoryResponse]
 */
fun CategoryEntity.toModel() = CategoryResponse(
    id = id.value,
    name = name,
    image = image,
    isPublished = isPublished,
    createAt = createAt.toUTC(),
    updateAt = updateAt.toUTC(),
)

fun CategoryEntity.toModelWithUploads() = toModel().copy(
    uploads = uploads.toModels().toTypedArray(),
)

/**
 * Convert to [List]
 */
fun Iterable<CategoryEntity>.toModels(): List<CategoryResponse> {
    return map { it.toModel() }
}

fun Iterable<CategoryEntity>.toModelsWithUploads(): List<CategoryResponse> {
    return map { it.toModelWithUploads() }
}
