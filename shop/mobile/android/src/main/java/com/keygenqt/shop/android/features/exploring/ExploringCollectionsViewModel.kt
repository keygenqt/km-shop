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
package com.keygenqt.shop.android.features.exploring

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.keygenqt.shop.android.data.models.mapToModels
import com.keygenqt.shop.android.extensions.withTransaction
import com.keygenqt.shop.android.services.AppDataService
import com.keygenqt.shop.android.services.impl.CollectionDataService
import com.keygenqt.shop.services.ServiceRequest
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class ExploringCollectionsViewModel @Inject constructor(
    private val serviceRequest: ServiceRequest,
    private val dataService: AppDataService
) : ViewModel() {

    /**
     * Error response
     */
    private val _error: MutableStateFlow<String?> = MutableStateFlow(null)

    /**
     * [StateFlow] for [_error]
     */
    val error: StateFlow<String?> get() = _error.asStateFlow()

    /**
     * Loading query
     */
    private val _loading: MutableStateFlow<Boolean> = MutableStateFlow(false)

    /**
     * [StateFlow] for [_loading]
     */
    val loading: StateFlow<Boolean> get() = _loading.asStateFlow()

    /**
     * Listen categories
     */
    val collections = dataService.getCollectionModels().distinctUntilChanged()

    init {
        updateCollections()
    }

    fun updateCollections() {
        _loading.value = true
        viewModelScope.launch {
            try {
                delay(500)
                serviceRequest.get.collectionsPublished().let { models ->
                    dataService.withTransaction<CollectionDataService> {
                        insertCollectionModels()
                        insertCollectionModels(*models.mapToModels().toTypedArray())
                        _loading.value = false
                        _error.value = null
                    }
                }
            } catch (ex: Exception) {
                _error.value = ex.localizedMessage ?: ""
                _loading.value = false
            }
        }
    }
}
