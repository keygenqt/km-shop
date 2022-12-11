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
import com.keygenqt.shop.android.data.dao.CategoryModelDao
import com.keygenqt.shop.android.data.models.CategoryModel
import com.keygenqt.shop.android.interfaces.IAppDatabase
import kotlinx.coroutines.flow.Flow

/**
 * Service part for work with model [CategoryModel]
 */
interface CategoryModelDataService : IAppDatabase {

    /**
     * Base room db
     */
    override val db: AppDatabase

    /**
     * Doa model [CategoryModelDao]
     */
    private val dao: CategoryModelDao get() = db.daoCategoryModel()

    /**
     * Performed when the user logs out
     */
    override suspend fun clearCacheAfterLogout() {
        clearCategoryModels()
    }

    /**
     * Fun for insert models
     */
    suspend fun insertCategoryModels(vararg models: CategoryModel) {
        dao.insertModels(*models)
    }

    /**
     * Get list models
     */
    fun getCategoryModels(): Flow<List<CategoryModel>> {
        return dao.getModels()
    }

    /**
     * Remove all models
     */
    suspend fun clearCategoryModels() {
        dao.clear()
    }
}
