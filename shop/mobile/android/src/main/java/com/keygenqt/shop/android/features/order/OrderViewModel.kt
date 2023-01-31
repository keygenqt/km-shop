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
package com.keygenqt.shop.android.features.order

import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.keygenqt.shop.android.data.models.OrderHistoryModel
import com.keygenqt.shop.android.data.models.OrderModel
import com.keygenqt.shop.android.data.models.mapToModel
import com.keygenqt.shop.android.extensions.withTransaction
import com.keygenqt.shop.android.routes.RouteOrder
import com.keygenqt.shop.android.services.AppDataService
import com.keygenqt.shop.android.services.impl.OrderHistoryDataService
import com.keygenqt.shop.services.ServiceRequest
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class OrderViewModel @Inject constructor(
    savedStateHandle: SavedStateHandle,
    private val serviceRequest: ServiceRequest,
    private val dataService: AppDataService
) : ViewModel() {

    /**
     * Search by key
     */
    private val number: String = savedStateHandle[RouteOrder.number.name]!!

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
    private val _order: MutableStateFlow<OrderModel?> = MutableStateFlow(null)

    /**
     * [StateFlow] for [_order]
     */
    val order: StateFlow<OrderModel?> get() = _order.asStateFlow()

    init {
        searchOrder()
    }

    /**
     * Query search order by number
     */
    fun searchOrder() {
        viewModelScope.launch {
            _loading.value = true
            try {
                delay(1000)
                serviceRequest.get.orderByNumber(number).let { order ->
                    val orderMap = order.mapToModel()
                    dataService.withTransaction<OrderHistoryDataService> {
                        getOrderHistory(order.id)?.let {
                            updateOrderHistoryModels(
                                it.copy(
                                    email = orderMap.email,
                                    phone = orderMap.phone,
                                    address = orderMap.address,
                                    note = orderMap.note,
                                    updateAt = orderMap.updateAt,
                                )
                            )
                        } ?: run {
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
                    }
                    _order.value = orderMap
                    _loading.value = false
                }
            } catch (ex: Exception) {
                _loading.value = false
            }
        }
    }
}
