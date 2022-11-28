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
import com.keygenqt.shop.db.entities.CollectionEntity
import com.keygenqt.shop.db.entities.Collections
import com.keygenqt.shop.interfaces.IService
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.and

class CollectionsService(
    override val db: DatabaseMysql
) : IService<CollectionsService> {

    /**
     * Find entity by id
     */
    fun findById(
        id: Int
    ) = CollectionEntity.findById(id)

    /**
     * Get all entities
     */
    fun getAll() = CollectionEntity
        .all()
        .orderBy(Pair(Collections.name, SortOrder.ASC))

    /**
     * Get all entities for guest
     */
    fun getAllPublished() = CollectionEntity
        .find { (Collections.isPublished eq true) }
        .orderBy(Pair(Collections.name, SortOrder.ASC))

    /**
     * Get count by key
     */
    fun checkHashKey(
        key: String,
        id: Int = 0
    ) = CollectionEntity
        .find { if (id == 0) (Collections.key eq key) else (Collections.key eq key) and (Collections.id neq id) }
        .count() > 0

    /**
     * Create entity
     */
    fun insert(
        key: String,
        name: String,
        desc: String,
        icon: String,
        isPublished: Boolean,
    ) = CollectionEntity.new {
        this.key = key
        this.name = name
        this.desc = desc
        this.icon = icon
        this.isPublished = isPublished
        this.createAt = System.currentTimeMillis()
        this.updateAt = System.currentTimeMillis()
    }

    /**
     * Update entity
     */
    fun CollectionEntity.update(
        key: String,
        name: String,
        desc: String,
        icon: String,
        isPublished: Boolean,
    ) = let { entity ->
        entity.key = key
        entity.name = name
        entity.desc = desc
        entity.icon = icon
        entity.isPublished = isPublished
        entity.updateAt = System.currentTimeMillis()
        entity
    }

    /**
     * Update state entity
     */
    fun CollectionEntity.updateState(
        isPublished: Boolean,
    ) = let { entity ->
        entity.isPublished = isPublished
        entity.updateAt = System.currentTimeMillis()
        entity
    }
}
