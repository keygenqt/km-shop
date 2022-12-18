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
package com.keygenqt.shop.android.features.orderCreate

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.keygenqt.shop.android.data.models.OrderHistoryModel
import com.keygenqt.shop.android.data.models.mapToModel
import com.keygenqt.shop.android.extensions.withTransaction
import com.keygenqt.shop.android.extensions.withTransactionResponse
import com.keygenqt.shop.android.services.AppDataService
import com.keygenqt.shop.android.services.impl.CartDataService
import com.keygenqt.shop.android.services.impl.OrderHistoryDataService
import com.keygenqt.shop.data.requests.OrderCreateRequest
import com.keygenqt.shop.data.requests.OrderProductRequest
import com.keygenqt.shop.data.responses.OrderResponse
import com.keygenqt.shop.exception.ResponseException
import com.keygenqt.shop.services.ServiceRequest
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class OrderCreateViewModel @Inject constructor(
    private val serviceRequest: ServiceRequest,
    private val dataService: AppDataService
) : ViewModel() {

    /**
     * Loading query
     */
    private val _loading: MutableStateFlow<Boolean> = MutableStateFlow(false)

    /**
     * [StateFlow] for [_loading]
     */
    val loading: StateFlow<Boolean> get() = _loading.asStateFlow()

    /**
     * Error response
     */
    private val _error: MutableStateFlow<ResponseException?> = MutableStateFlow(null)

    /**
     * [StateFlow] for [_error]
     */
    val error: StateFlow<ResponseException?> get() = _error.asStateFlow()

    /**
     * Error response
     */
    private val _orderNumber: MutableStateFlow<String?> = MutableStateFlow(null)

    /**
     * [StateFlow] for [_orderNumber]
     */
    val orderNumber: StateFlow<String?> get() = _orderNumber.asStateFlow()

    fun createOrder(
        email: String,
        phone: String,
        address: String,
    ) {
        _error.value = null
        _loading.value = true
        _orderNumber.value = null
        viewModelScope.launch {
            delay(500)
            try {
                dataService.withTransactionResponse<CartDataService, OrderResponse> {
                    serviceRequest.post.orderCreate(
                        OrderCreateRequest(
                            email = email,
                            phone = phone,
                            address = address,
                            products = dataService.getCartModels().map { cart ->
                                OrderProductRequest(
                                    productID = cart.id,
                                    count = cart.count,
                                    price = cart.price,
                                )
                            }.toTypedArray()
                        )
                    )
                }.let { order ->
                    val orderMap = order.mapToModel()
                    dataService.withTransaction<OrderHistoryDataService> {
                        insertOrderHistoryModels(
                            OrderHistoryModel(
                                id = orderMap.id,
                                number = orderMap.number,
                                email = orderMap.email,
                                phone = orderMap.phone,
                                address = orderMap.address,
                                note = orderMap.note,
                                sum = orderMap.sum,
                                createAt = orderMap.createAt,
                                updateAt = orderMap.updateAt,
                                images = orderMap.products.take(4).map { it.product.image1 },
                                productCount = orderMap.products.sumOf { it.count },
                            )
                        )
                    }
                    dataService.withTransaction<CartDataService> {
                        clearCartModels()
                    }
                    _orderNumber.value = orderMap.number
                }
            } catch (ex: ResponseException) {
                _error.value = ex
            }
            _loading.value = false
        }
    }
}
