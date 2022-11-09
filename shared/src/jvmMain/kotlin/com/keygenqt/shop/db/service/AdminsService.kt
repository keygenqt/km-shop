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

import com.keygenqt.shop.data.responses.AdminModel
import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.db.entities.AdminEntity
import com.keygenqt.shop.db.entities.toModels

class AdminsService(
    private val db: DatabaseMysql
) {
    /**
     * Get all models
     */
    suspend fun getAll(): List<AdminModel> = db.transaction {
        AdminEntity.all().toModels()
    }

    /**
     * Get all models
     */
    suspend fun findById(
        id: Int
    ): AdminEntity? = db.transaction {
        AdminEntity.findById(id)
    }
}
