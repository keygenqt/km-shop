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
package com.keygenqt.shop.android.features.product

import android.app.Application
import android.widget.Toast
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.data.models.CartModel
import com.keygenqt.shop.android.data.models.ProductModel
import com.keygenqt.shop.android.data.models.mapToModel
import com.keygenqt.shop.android.extensions.withTransaction
import com.keygenqt.shop.android.routes.RouteProduct
import com.keygenqt.shop.android.services.AppDataService
import com.keygenqt.shop.android.services.impl.CartDataService
import com.keygenqt.shop.services.ServiceRequest
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class ProductViewModel @Inject constructor(
    savedStateHandle: SavedStateHandle,
    private val application: Application,
    private val serviceRequest: ServiceRequest,
    private val dataService: AppDataService
) : ViewModel() {
    /**
     * ID product
     */
    val id: Int = savedStateHandle[RouteProduct.id.name]!!

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
    private val _product: MutableStateFlow<ProductModel?> = MutableStateFlow(null)

    /**
     * [StateFlow] for [_product]
     */
    val product: StateFlow<ProductModel?> get() = _product.asStateFlow()

    /**
     * Listen data
     */
    val cartProductIds: Flow<List<CartModel>> = dataService.getCartModelsFlow().distinctUntilChanged()

    init {
        getProduct()
    }

    fun getProduct() {
        viewModelScope.launch {
            _loading.value = true
            try {
                delay(1000)
                serviceRequest.get.product(id).let { product ->
                    _product.value = product.mapToModel()
                    _loading.value = false
                }
            } catch (ex: Exception) {
                _loading.value = false
            }
        }
    }

    fun changeCartProducts(
        productId: Int,
        count: Int
    ) {
        viewModelScope.launch {
            dataService.withTransaction<CartDataService> {
                if (count == 0) {
                    deleteCartModels(productId)
                    launch(Dispatchers.Main) {
                        Toast
                            .makeText(
                                application.applicationContext,
                                application.applicationContext.getString(R.string.product_delete_from_cart),
                                Toast.LENGTH_SHORT
                            )
                            .show()
                    }
                } else {
                    getCartModel(productId)?.let { model ->
                        updateCartModel(
                            model.copy(
                                count = count
                            )
                        )
                    } ?: run {
                        insertCartModels(
                            CartModel(
                                id = productId,
                                count = count
                            )
                        )
                        launch(Dispatchers.Main) {
                            Toast
                                .makeText(
                                    application.applicationContext,
                                    application.applicationContext.getString(R.string.product_add_to_cart),
                                    Toast.LENGTH_SHORT
                                )
                                .show()
                        }
                    }
                }
            }
        }
    }
}
