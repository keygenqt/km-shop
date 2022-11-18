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

import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.db.entities.Categories
import com.keygenqt.shop.db.entities.CategoryEntity
import com.keygenqt.shop.db.entities.UploadEntity
import com.keygenqt.shop.db.entities.Uploads
import com.keygenqt.shop.interfaces.IService
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SortOrder

class CategoriesService(
    override val db: DatabaseMysql
) : IService<CategoriesService> {

    /**
     * Find entity by id
     */
    fun findById(
        id: Int
    ) = CategoryEntity.findById(id)

    /**
     * Get all entities
     */
    fun getAll() = CategoryEntity
        .all()
        .orderBy(Pair(Categories.name, SortOrder.ASC))

    /**
     * Get all entities for guest
     */
    fun getAllPublished() = CategoryEntity
        .find { (Categories.isPublished eq true) }
        .orderBy(Pair(Categories.name, SortOrder.ASC))

    /**
     * Create entity
     */
    fun insert(
        name: String,
        image: String,
        uploads: List<String>,
        isPublished: Boolean,
    ) = CategoryEntity.new {
        this.name = name
        this.image = image
        this.isPublished = isPublished
        this.createAt = System.currentTimeMillis()
        this.updateAt = System.currentTimeMillis()
        this.uploads = SizedCollection(uploads.mapNotNull {
            UploadEntity.find { (Uploads.fileName eq it.substringAfterLast("/")) }.firstOrNull()
        })
    }

    /**
     * Update entity
     */
    fun CategoryEntity.update(
        name: String,
        image: String,
        uploads: List<String>,
        isPublished: Boolean,
    ) = let { entity ->
        entity.name = name
        entity.image = image
        entity.isPublished = isPublished
        entity.updateAt = System.currentTimeMillis()
        entity.uploads = SizedCollection(uploads.mapNotNull {
            UploadEntity.find { (Uploads.fileName eq it.substringAfterLast("/")) }.firstOrNull()
        })
        entity
    }
}
