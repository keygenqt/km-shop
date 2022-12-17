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
package com.keygenqt.shop.android.services.impl

import com.keygenqt.shop.android.data.AppDatabase
import com.keygenqt.shop.android.data.dao.CartModelDao
import com.keygenqt.shop.android.data.models.CartModel
import com.keygenqt.shop.android.interfaces.IAppDatabase
import kotlinx.coroutines.flow.Flow

/**
 * Service part for work with model [CartModel]
 */
interface CartDataService : IAppDatabase {

    /**
     * Base room db
     */
    override val db: AppDatabase

    /**
     * Doa model [CartModelDao]
     */
    private val dao: CartModelDao get() = db.daoCartModel()

    /**
     * Performed when the user logs out
     */
    override suspend fun clearCacheAfterLogout() {
        clearCartModels()
    }

    /**
     * Fun for insert models
     */
    suspend fun insertCartModels(vararg models: CartModel) {
        dao.insertModels(*models)
    }

    /**
     * Update cart
     */
    fun updateCartModel(
        model: CartModel
    ) {
        return dao.updateModel(model)
    }

    /**
     * Get list models
     */
    fun getCartModelsFlow(): Flow<List<CartModel>> {
        return dao.getModelsFlow()
    }

    /**
     * Get list models
     */
    fun getCartModels(): List<CartModel> {
        return dao.getModels()
    }

    /**
     * Get model by id
     */
    fun getCartModel(
        id: Int
    ): CartModel? {
        return dao.getModel(id)
    }

    /**
     * Remove model
     */
    suspend fun deleteCartModels(id: Int) {
        dao.delete(id)
    }

    /**
     * Remove all models
     */
    suspend fun clearCartModels() {
        dao.clear()
    }
}
