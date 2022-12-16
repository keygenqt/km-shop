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
import androidx.lifecycle.viewModelScope
import com.keygenqt.shop.android.data.models.ProductModel
import com.keygenqt.shop.android.data.models.mapToModels
import com.keygenqt.shop.android.routes.RouteProducts
import com.keygenqt.shop.data.requests.OrderProduct
import com.keygenqt.shop.services.ServiceRequest
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class ProductsViewModel @Inject constructor(
    savedStateHandle: SavedStateHandle,
    private val serviceRequest: ServiceRequest,
) : ViewModel() {
    /**
     * Key category for filtering list
     */
    val categoryID: Int = savedStateHandle[RouteProducts.categoryID.name]!!

    /**
     * Title action bar
     */
    val title: String = savedStateHandle[RouteProducts.title.name]!!

    /**
     * Key collection for filtering list
     */
    private val collectionID: Int = savedStateHandle[RouteProducts.collectionID.name]!!

    /**
     * Loading query
     */
    private val _sort: MutableStateFlow<OrderProduct> = MutableStateFlow(OrderProduct.NEWEST)

    /**
     * [StateFlow] for [_sort]
     */
    val sort: StateFlow<OrderProduct> get() = _sort.asStateFlow()

    /**
     * Loading query
     */
    private val _loading: MutableStateFlow<Boolean> = MutableStateFlow(true)

    /**
     * [StateFlow] for [_loading]
     */
    val loading: StateFlow<Boolean> get() = _loading.asStateFlow()

    /**
     * Loading query
     */
    private val _products: MutableStateFlow<List<ProductModel>?> = MutableStateFlow(null)

    /**
     * [StateFlow] for [_products]
     */
    val products: StateFlow<List<ProductModel>?> get() = _products.asStateFlow()

    /**
     * Loading query
     */
    private val _prices: MutableStateFlow<ClosedFloatingPointRange<Float>?> = MutableStateFlow(null)

    /**
     * [StateFlow] for [_prices]
     */
    val prices: StateFlow<ClosedFloatingPointRange<Float>?> get() = _prices.asStateFlow()

    /**
     * Filter prices
     */
    var pricesFilter: ClosedFloatingPointRange<Float>? = null

    init {
        viewModelScope.launch {
            try {
                getPrices()
                updateList()
            } catch (ex: Exception) {
                _loading.value = false
            }

        }
    }

    fun toggleSort() {
        when (_sort.value) {
            OrderProduct.NEWEST -> _sort.value = OrderProduct.LOW
            OrderProduct.LOW -> _sort.value = OrderProduct.HEIGHT
            OrderProduct.HEIGHT -> _sort.value = OrderProduct.NEWEST
        }
        viewModelScope.launch {
            updateList()
        }
    }

    fun setPriceRange(pricesFilter: ClosedFloatingPointRange<Float>) {
        this.pricesFilter = pricesFilter
        viewModelScope.launch {
            updateList()
        }
    }

    private suspend fun getPrices() {
        serviceRequest.get.prices(
            categories = arrayOf(categoryID).filter { it != 0 }.toTypedArray(),
            collections = arrayOf(collectionID).filter { it != 0 }.toTypedArray(),
        ).let {
            _prices.value = it.min.toFloat()..it.max.toFloat()
            if (pricesFilter == null) {
                pricesFilter = _prices.value
            }
        }
    }

    suspend fun updateList() {
        _loading.value = true
        delay(1000)
        serviceRequest.get.productsPublished(
            page = 1,
            order = sort.value.name,
            range = pricesFilter?.let {
                arrayOf(
                    it.start.toDouble(),
                    it.endInclusive.toDouble()
                )
            } ?: arrayOf(0.0, 999999999.0),
            categories = arrayOf(categoryID).filter { it != 0 }.toTypedArray(),
            collections = arrayOf(collectionID).filter { it != 0 }.toTypedArray(),
        ).let { products ->
            _products.value = products.products.toList().mapToModels()
            _loading.value = false
        }
    }
}
