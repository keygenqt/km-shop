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

import com.keygenqt.shop.db.models.RocketEntity
import com.keygenqt.shop.db.models.Rockets
import com.keygenqt.shop.db.models.toModels
import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.data.responses.RocketModel
import org.jetbrains.exposed.sql.SortOrder

class RocketsService(
    private val db: DatabaseMysql
) {
    /**
     * Get all models
     */
    suspend fun getAll(): List<RocketModel> = db.transaction {
        RocketEntity.all().orderBy(Pair(Rockets.missionName, SortOrder.ASC)).toModels()
    }
}
