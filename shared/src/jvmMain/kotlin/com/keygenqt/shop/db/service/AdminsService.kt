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
package com.keygenqt.shop.db.service

import com.keygenqt.shop.data.responses.AdminRole
import com.keygenqt.shop.db.base.DatabaseMysql
import com.keygenqt.shop.db.entities.AdminEntity
import com.keygenqt.shop.db.entities.Admins
import com.keygenqt.shop.db.utils.Password
import com.keygenqt.shop.interfaces.IService
import org.jetbrains.exposed.sql.SizedIterable

class AdminsService(
    override val db: DatabaseMysql
) : IService<AdminsService> {

    /**
     * Get count entities
     */
    fun countAdmins(): Int = AdminEntity.find { (Admins.role eq AdminRole.ADMIN) }.count().toInt()

    /**
     * Get all entities
     */
    fun getAll(): SizedIterable<AdminEntity> = AdminEntity.all()

    /**
     * Find entity by id
     */
    fun findById(
        id: Int
    ) = AdminEntity.findById(id)

    /**
     * Find entity by email
     */
    fun findByEmail(
        email: String
    ) = AdminEntity
        .find { (Admins.email eq (email)) }.firstOrNull()

    /**
     * Get entity with check password for auth
     */
    fun findUserByAuth(
        email: String?,
        password: String?
    ) = AdminEntity
        .find { (Admins.email eq (email ?: "")) }
        .firstOrNull()
        ?.let {
            if (Password.validate(password, it.password)) {
                it
            } else {
                null
            }
        }

    /**
     * Create entity
     */
    fun insert(
        email: String,
        role: AdminRole,
        password: String,
    ) = AdminEntity.new {
        this.role = role
        this.email = email
        this.password = Password.encode(password)
    }

    /**
     * Update entity
     */
    fun AdminEntity.update(
        role: AdminRole,
        password: String?,
    ) = let { entity ->
        entity.role = role
        password?.let { if (it.isNotBlank()) entity.password = Password.encode(it) }
        entity
    }
}
