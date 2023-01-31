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

import com.keygenqt.shop.data.responses.AdminResponse
import com.keygenqt.shop.data.responses.AdminRole
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

/**
 * Table users
 */
object Admins : IntIdTable() {
    val email = varchar("email", 255).uniqueIndex()
    val password = varchar("password", 255)
    val role = enumeration("role", AdminRole::class).default(AdminRole.MANAGER)
}

/**
 * Exposed entity
 */
class AdminEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<AdminEntity>(Admins)

    var email by Admins.email
    var password by Admins.password
    var role by Admins.role
}

/**
 * Convert
 */
fun AdminEntity.toModel() = AdminResponse(
    id = id.value,
    email = email,
    role = role,
)

/**
 * Convert list
 */
fun Iterable<AdminEntity>.toModels(): List<AdminResponse> {
    return map { it.toModel() }
}
