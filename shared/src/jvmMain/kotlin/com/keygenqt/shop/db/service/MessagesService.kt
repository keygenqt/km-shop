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
import com.keygenqt.shop.db.entities.MessageEntity
import com.keygenqt.shop.db.entities.Messages
import com.keygenqt.shop.interfaces.IService
import org.jetbrains.exposed.sql.SortOrder

class MessagesService(
    override val db: DatabaseMysql
) : IService<MessagesService> {

    /**
     * Find entity by id
     */
    fun findById(
        id: Int
    ) = MessageEntity.findById(id)

    /**
     * Get all entities
     */
    fun getAll() = MessageEntity
        .all()
        .orderBy(Pair(Messages.createAt, SortOrder.DESC))

    /**
     * Create entity
     */
    fun insert(
        fname: String,
        lname: String,
        email: String,
        phone: String,
        message: String,
    ) = MessageEntity.new {
        this.fname = fname
        this.lname = lname
        this.email = email
        this.phone = phone
        this.message = message
        this.isChecked = false
        this.createAt = System.currentTimeMillis()
        this.updateAt = System.currentTimeMillis()
    }

    /**
     * Update entity
     */
    fun MessageEntity.update(
        isChecked: Boolean,
    ) = let { entity ->
        entity.isChecked = isChecked
        entity.updateAt = System.currentTimeMillis()
        entity
    }
}
