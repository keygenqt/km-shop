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
package com.keygenqt.shop.extension

import com.keygenqt.shop.db.entities.UploadEntity
import com.keygenqt.shop.utils.helpers.ConstantsMime.toMime
import com.mysql.cj.Constants
import java.io.File
import java.util.*

/**
 * Create upload from data for migrate products
 */
fun String.createFileUploadProducts() = createFileUpload("products")

/**
 * Create upload from data for migrate category
 */
fun String.createFileUploadCategory() = createFileUpload("category")

/**
 * Create upload from data for migrate
 */
private fun String.createFileUpload(type: String): UploadEntity? {
    val file = File("data/migration/$type/$this")
    return if (file.isFile) {
        val upload = UploadEntity.new {
            this.fileName = "${UUID.randomUUID()}.${file.extension}"
            this.fileMime = file.extension.toMime()
            this.originalFileName = this@createFileUpload
            this.createAt = System.currentTimeMillis()
        }
        file.copyTo(File("uploads/${upload.fileName}"))
        upload
    } else null
}
