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
package com.keygenqt.shop.android.features.cart

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.keygenqt.shop.android.data.models.ProductModel
import com.keygenqt.shop.android.data.models.mapToModels
import com.keygenqt.shop.android.extensions.withTransaction
import com.keygenqt.shop.android.services.AppDataService
import com.keygenqt.shop.android.services.impl.CartDataService
import com.keygenqt.shop.services.ServiceRequest
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class CartViewModel @Inject constructor(
    private val serviceRequest: ServiceRequest,
    private val dataService: AppDataService
) : ViewModel() {

    /**
     * Listen data
     */
    val cartProductIds = dataService.getCartModelsFlow().distinctUntilChanged()

    /**
     * Loading query
     */
    private val _loading: MutableStateFlow<Boolean> = MutableStateFlow(false)

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

    var countUniqueCartProduct: Int? = null

    init {
        viewModelScope.launch {
            cartProductIds.onEach {
                if (it.isEmpty()) {
                    _products.value = null
                    countUniqueCartProduct = null
                } else {
                    if (countUniqueCartProduct == null || countUniqueCartProduct != it.size) {
                        countUniqueCartProduct = it.size
                        getProducts()
                    }
                }
            }.collect()
        }
    }

    fun getProducts() {
        viewModelScope.launch {
            _loading.value = true
            try {
                delay(500)
                dataService.withTransaction<CartDataService> {
                    serviceRequest.get.productsPublishedByIDs(
                        getCartModels().map { it.id }
                            .toTypedArray()
                    )
                        .let { models ->
                            _products.value = models.mapToModels()
                            _loading.value = false
                        }
                }
            } catch (ex: Exception) {
                _loading.value = false
            }
        }
    }

    fun removeCartProduct(
        productId: Int
    ) {
        viewModelScope.launch {
            dataService.withTransaction<CartDataService> {
                getCartModel(productId)?.let {
                    deleteCartModels(productId)
                }
            }
        }
    }

    fun plusCartCount(
        productId: Int,
        price: Double
    ) {
        viewModelScope.launch {
            dataService.withTransaction<CartDataService> {
                getCartModel(productId)?.let { model ->
                    updateCartModel(
                        model.copy(count = model.count + 1, price = price)
                    )
                }
            }
        }
    }

    fun minusCartCount(
        productId: Int,
        price: Double
    ) {
        viewModelScope.launch {
            dataService.withTransaction<CartDataService> {
                getCartModel(productId)?.let { model ->
                    updateCartModel(
                        model.copy(count = model.count - 1, price = price)
                    )
                }
            }
        }
    }
}
