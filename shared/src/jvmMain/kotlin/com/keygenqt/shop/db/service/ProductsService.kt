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
import com.keygenqt.shop.db.entities.ProductEntity
import com.keygenqt.shop.db.entities.Products
import com.keygenqt.shop.interfaces.IService
import org.jetbrains.exposed.sql.SortOrder

class ProductsService(
    override val db: DatabaseMysql
) : IService<ProductsService> {

    /**
     * Get all entities
     */
    fun getAll() = ProductEntity
        .all()
        .orderBy(Pair(Products.createAt, SortOrder.DESC))

    /**
     * Get all entities for guest
     */
    fun getAllPublished() = ProductEntity
        .find { (Products.isPublished eq true) }
        .orderBy(Pair(Products.createAt, SortOrder.DESC))
        .filter { it.category.isPublished }

    /**
     * Get entity by ID
     */
    fun getById(id: Int) = ProductEntity.findById(id)

    /**
     * Get all entities for guest
     */
    fun getByIdPublished(id: Int) = ProductEntity
        .findById(id)
        ?.let { if (it.category.isPublished && it.isPublished) it else null }
}
