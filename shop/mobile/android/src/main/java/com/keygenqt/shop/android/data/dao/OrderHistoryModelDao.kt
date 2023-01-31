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
package com.keygenqt.shop.android.data.dao

import androidx.room.*
import com.keygenqt.shop.android.data.models.OrderHistoryModel
import kotlinx.coroutines.flow.Flow

/**
 * Dao for model [OrderHistoryModel]
 */
@Dao
interface OrderHistoryModelDao {

    @Query("SELECT * FROM OrderHistoryModel WHERE id=:id")
    fun getModel(id: Int): OrderHistoryModel?

    @Query("SELECT * FROM OrderHistoryModel")
    fun getModels(): Flow<List<OrderHistoryModel>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertModels(vararg models: OrderHistoryModel)

    @Update(onConflict = OnConflictStrategy.REPLACE)
    suspend fun updateModel(model: OrderHistoryModel)

    @Query("DELETE FROM OrderHistoryModel")
    suspend fun clear()
}
