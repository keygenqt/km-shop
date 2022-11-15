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
import com.keygenqt.shop.db.entities.CategoryUploads
import com.keygenqt.shop.db.entities.ProductUploads
import com.keygenqt.shop.db.entities.UploadEntity
import com.keygenqt.shop.db.entities.Uploads
import com.keygenqt.shop.interfaces.IService
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.deleteWhere

class UploadsService(
    override val db: DatabaseMysql
) : IService<UploadsService> {

    /**
     * Get all entities
     */
    fun getAll() = UploadEntity
        .all()
        .orderBy(Pair(Uploads.createAt, SortOrder.DESC))

    /**
     * Delete by [Uploads.fileName]
     */
    fun deleteByFileName(
        fileName: String
    ) {
        val upload = UploadEntity
            .find { (Uploads.fileName eq fileName) }
            .firstOrNull()

        if (upload != null) {
            CategoryUploads.deleteWhere { CategoryUploads.upload eq upload.id }
            ProductUploads.deleteWhere { ProductUploads.upload eq upload.id }
            upload.delete()
        }
    }
}
