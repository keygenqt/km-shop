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
package com.keygenqt.shop.android.base

import android.app.Application
import android.widget.Toast
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.keygenqt.shop.android.data.models.mapToModels
import com.keygenqt.shop.android.extensions.withTransaction
import com.keygenqt.shop.android.services.AppDataService
import com.keygenqt.shop.android.services.impl.CategoryDataService
import com.keygenqt.shop.android.services.impl.CollectionDataService
import com.keygenqt.shop.services.ServiceRequest
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import javax.inject.Inject

/**
 * Main [ViewModel] for app
 */
@HiltViewModel
class AppViewModel @Inject constructor(
    private val application: Application,
    private val serviceRequest: ServiceRequest,
    private val dataService: AppDataService
) : ViewModel() {

    /**
     * [MutableStateFlow] for start app and end splash
     */
    private val _isSplash: MutableStateFlow<Boolean> = MutableStateFlow(true)

    /**
     * [StateFlow] for [_isSplash]
     */
    val isSplash: StateFlow<Boolean> get() = _isSplash.asStateFlow()

    init {
        viewModelScope.launch {
            try {
                getMainDataBeforeInit()
                _isSplash.value = false
            } catch (ex: Exception) {
                Toast
                    .makeText(
                        application.applicationContext,
                        ex.localizedMessage ?: "Error api query",
                        Toast.LENGTH_LONG
                    )
                    .show()
            }
        }
    }

    /**
     * Main query
     */
    private suspend fun getMainDataBeforeInit() {
        // get categories
        val categories =
            withContext(Dispatchers.Default) { serviceRequest.get.categoriesPublished() }
                .mapToModels()
                .toTypedArray()

        dataService.withTransaction<CategoryDataService> {
            clearCategoryModels()
            insertCategoryModels(*categories)
        }

        // get collections
        val collections =
            withContext(Dispatchers.Default) { serviceRequest.get.collectionsPublished() }
                .mapToModels()
                .toTypedArray()

        dataService.withTransaction<CollectionDataService> {
            clearCollectionModels()
            insertCollectionModels(*collections)
        }
    }
}
