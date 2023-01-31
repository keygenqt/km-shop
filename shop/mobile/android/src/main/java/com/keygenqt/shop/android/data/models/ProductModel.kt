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
package com.keygenqt.shop.android.data.models

import androidx.compose.runtime.Immutable
import androidx.room.PrimaryKey
import com.keygenqt.shop.android.BuildConfig
import com.keygenqt.shop.data.responses.ProductResponse

/**
 * Order model without db
 */
@Immutable
data class ProductModel(
    @PrimaryKey val id: Int,
    val category: CategoryModel,
    val categories: List<CategoryModel>? = null,
    val image1: String,
    val image2: String?,
    val image3: String?,
    val name: String,
    val description: String,
    val price: Double,
    val isPublished: Boolean,
    val createAt: String,
    val updateAt: String,
    val collections: List<CollectionModel>? = null,
    val uploads: List<UploadModel>? = null,
)

fun ProductResponse.mapToModel() =
    ProductModel(
        id = id,
        category = category.mapToModel(),
        categories = categories?.toList()?.mapToModels(),
        image1 = image1.let {
            if (BuildConfig.DEBUG) it.replace("localhost", "10.0.2.2") else it
        },
        image2 = image2.let {
            if (BuildConfig.DEBUG) it?.replace("localhost", "10.0.2.2") else it
        },
        image3 = image3.let {
            if (BuildConfig.DEBUG) it?.replace("localhost", "10.0.2.2") else it
        },
        name = name,
        description = description,
        price = price,
        isPublished = isPublished,
        createAt = createAt,
        updateAt = updateAt,
        collections = collections?.toList()?.mapToModels(),
        uploads = uploads?.toList()?.mapToModels(),
    )

fun List<ProductResponse>.mapToModels() =
    map { it.mapToModel() }
