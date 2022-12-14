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
package com.keygenqt.shop.android.features.products

import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import com.keygenqt.shop.android.routes.RouteProducts
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject

@HiltViewModel
class ProductsViewModel @Inject constructor(
    savedStateHandle: SavedStateHandle
) : ViewModel() {
    /**
     * Key category for filtering list
     */
    val categoryKey: String? = savedStateHandle[RouteProducts.categoryKey.name]

    /**
     * Key collection for filtering list
     */
    val collectionKey: String? = savedStateHandle[RouteProducts.collectionKey.name]
}
