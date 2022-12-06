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
package com.keygenqt.shop.data.responses

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Response shop products
 */
@JsExport
@Serializable
@Suppress("ArrayInDataClass")
data class ProductPageResponse(
    val pages: Int,
    val products: Array<ProductResponse>,
)

/**
 * Response shop products
 */
@JsExport
@Serializable
@Suppress("ArrayInDataClass")
data class ProductResponse(
    val id: Int,
    val category: CategoryResponse,
    val categories: Array<CategoryResponse>? = null,
    val image1: String,
    val image2: String?,
    val image3: String?,
    val name: String,
    val description: String,
    val price: Double,
    val isPublished: Boolean,
    val createAt: String,
    val updateAt: String,
    val collections: Array<CollectionResponse>? = null,
    val uploads: Array<UploadResponse>? = null,
)

/**
 * Response max/min prices public products
 */
@JsExport
@Serializable
data class ProductPricesResponse(
    val min: Double,
    val max: Double,
)