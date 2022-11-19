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
package com.keygenqt.shop.data.requests

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Request Product
 */
@JsExport
@Serializable
@Suppress("ArrayInDataClass")
data class ProductRequest(
    val categoryID: Int,
    val image: String,
    val name: String,
    val description: String,
    val price: Double,
    val isPublished: Boolean,
    val uploads: Array<String>,
)

/**
 * Request Product state
 */
@JsExport
@Serializable
data class ProductStateRequest(
    val isPublished: Boolean,
)