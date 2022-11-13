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
package com.keygenqt.shop.db.migration

import com.keygenqt.shop.db.entities.Categories
import com.keygenqt.shop.db.entities.CategoryEntity
import com.keygenqt.shop.db.entities.ProductEntity
import com.keygenqt.shop.db.entities.UploadEntity
import com.keygenqt.shop.utils.helpers.ConstantsMime.toMime
import org.flywaydb.core.api.migration.BaseJavaMigration
import org.flywaydb.core.api.migration.Context
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.transactions.transaction

@Suppress("unused", "ClassName")
class V7__Create_DemoData : BaseJavaMigration() {
    override fun migrate(context: Context?) {
        transaction {

            val listUploads = listOf(
                UploadEntity.new {
                    fileName = "image.jpg"
                    fileMime = "jpg".toMime()
                    originalFileName = fileName
                    createAt = System.currentTimeMillis()
                },
                UploadEntity.new {
                    fileName = "image2.png"
                    fileMime = "png".toMime()
                    originalFileName = fileName
                    createAt = System.currentTimeMillis()
                }
            )

            ProductEntity.new {
                categoryID = EntityID(1, Categories)
                image =
                    "https://api.keygenqt.com/api/ps/file/d00b98c9-1e22-45ab-ab9f-396fe4cc7a52.jpg"
                name = "Бант 1"
                price = 1.20
                isPublished = false
                description =
                    """Примечание. Exposed не выполняет немедленное обновление, когда вы 
                        |устанавливаете новое значение для Entity, оно просто сохраняет его на 
                        |внутренней карте. «Сброс» значений в базу данных происходит в конце 
                        |транзакции или перед следующей транзакцией select *из базы данных"""
                        .trimMargin()
                createAt = System.currentTimeMillis()
                updateAt = System.currentTimeMillis()
                uploads = SizedCollection(listUploads)
            }

            CategoryEntity.new {
                image =
                    "https://api.keygenqt.com/api/ps/file/d00b98c9-1e22-45ab-ab9f-396fe4cc7a52.jpg"
                name = "Category1"
                isPublished = true
                createAt = System.currentTimeMillis()
                updateAt = System.currentTimeMillis()
                uploads = SizedCollection(listUploads)
            }

            CategoryEntity.new {
                image =
                    "https://api.keygenqt.com/api/ps/file/d00b98c9-1e22-45ab-ab9f-396fe4cc7a52.jpg"
                name = "Category2"
                isPublished = false
                createAt = System.currentTimeMillis()
                updateAt = System.currentTimeMillis()
            }
        }
    }
}
