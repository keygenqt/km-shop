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
package com.keygenqt.shop.exception

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Field errors
 */
@JsExport
@Serializable
data class ValidateViolation(
    val filed: String,
    val errors: Array<String>
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as ValidateViolation

        if (filed != other.filed) return false
        if (!errors.contentEquals(other.errors)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = filed.hashCode()
        result = 31 * result + errors.contentHashCode()
        return result
    }
}
