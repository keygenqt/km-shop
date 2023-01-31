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
package com.keygenqt.shop.android.services.impl

import com.keygenqt.shop.android.data.AppDatabase
import com.keygenqt.shop.android.data.dao.OrderHistoryModelDao
import com.keygenqt.shop.android.data.models.OrderHistoryModel
import com.keygenqt.shop.android.interfaces.IAppDatabase
import kotlinx.coroutines.flow.Flow

/**
 * Service part for work with model [OrderHistoryModel]
 */
interface OrderHistoryDataService : IAppDatabase {

    /**
     * Base room db
     */
    override val db: AppDatabase

    /**
     * Doa model [OrderHistoryModel]
     */
    private val dao: OrderHistoryModelDao get() = db.daoOrderHistoryModel()

    /**
     * Performed when the user logs out
     */
    override suspend fun clearCacheAfterLogout() {
        clearOrderHistoryModels()
    }

    /**
     * Fun for insert models
     */
    suspend fun insertOrderHistoryModels(vararg models: OrderHistoryModel) {
        dao.insertModels(*models)
    }

    /**
     * Fun for update models
     */
    suspend fun updateOrderHistoryModels(model: OrderHistoryModel) {
        dao.updateModel(model)
    }

    /**
     * Get model
     */
    suspend fun getOrderHistory(id: Int): OrderHistoryModel? {
        return dao.getModel(id)
    }

    /**
     * Get list models
     */
    fun getOrderHistoryModels(): Flow<List<OrderHistoryModel>> {
        return dao.getModels()
    }

    /**
     * Remove all models
     */
    suspend fun clearOrderHistoryModels() {
        dao.clear()
    }
}
