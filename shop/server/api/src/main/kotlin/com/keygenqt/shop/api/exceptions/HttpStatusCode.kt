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
package com.keygenqt.shop.api.exceptions

import com.keygenqt.shop.exception.ValidateViolation
import jakarta.validation.ConstraintViolation

/**
 * Create exception
 */
fun Set<ConstraintViolation<*>>.toListModels(): List<ValidateViolation> {

    val result = mutableListOf<ValidateViolation>()

    forEach {
        val field = it.propertyPath.toString()
        val error = it.message

        val model = result
            .find { item -> item.filed == field }
            ?.let { er -> er.copy(errors = er.errors + listOf(error)) }
            ?: ValidateViolation(filed = field, errors = arrayOf(error))

        result.removeIf { er -> er.filed == field }
        result.add(model)
    }

    return result
}
