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

import com.keygenqt.shop.data.responses.CategoryResponse
import com.keygenqt.shop.data.responses.CollectionResponse
import com.keygenqt.shop.extension.toUTC
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

/**
 * Table categories products
 */
object Collections : IntIdTable() {
    val key = varchar("key", 255)
    val name = varchar("name", 255)
    val desc = varchar("desc", 255)
    val icon = varchar("icon", 255)
    val isPublished = bool("isPublished").default(false)
    val createAt = long("createAt")
    val updateAt = long("updateAt")
}

/**
 * Exposed entity
 */
class CollectionEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<CollectionEntity>(Collections)

    var key by Collections.key
    var name by Collections.name
    var desc by Collections.desc
    var icon by Collections.icon
    var isPublished by Collections.isPublished
    var createAt by Collections.createAt
    var updateAt by Collections.updateAt
}

/**
 * Convert to [CategoryResponse]
 */
fun CollectionEntity.toModel() = CollectionResponse(
    id = id.value,
    key = key,
    name = name,
    desc = desc,
    icon = icon,
    isPublished = isPublished,
    createAt = createAt.toUTC(),
    updateAt = updateAt.toUTC(),
)

/**
 * Convert to [List]
 */
fun Iterable<CollectionEntity>.toModels(): List<CollectionResponse> {
    return map { it.toModel() }
}
