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
package com.keygenqt.shop.db.models

import com.keygenqt.shop.db.base.IntSubQueryEntityClass
import com.keygenqt.shop.data.responses.RocketModel
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

object Rockets : IntIdTable() {
    val missionName = varchar("name", 255)
    val launchDateUTC = varchar("date_utc", 255)
    val launchSuccess = bool("success").default(false)
}

/**
 * Exposed entity
 */
class RocketEntity(id: EntityID<Int>) : IntEntity(id) {

    companion object : IntSubQueryEntityClass<RocketEntity>(Rockets)

    var missionName by Rockets.missionName
    var launchDateUTC by Rockets.launchDateUTC
    var launchSuccess by Rockets.launchSuccess
}

/**
 * Convert to model
 */
fun RocketEntity.toModel() = RocketModel(
    flightNumber = id.value,
    missionName = missionName,
    launchDateUTC = launchDateUTC,
    launchSuccess = launchSuccess,
)

/**
 * Convert list
 */
fun Iterable<RocketEntity>.toModels(): List<RocketModel> {
    return map { it.toModel() }
}
