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
import com.keygenqt.shop.android.data.models.CartModel
import kotlinx.coroutines.flow.Flow

/**
 * Dao for model [CartModel]
 */
@Dao
interface CartModelDao {

    @Query("SELECT * FROM CartModel")
    fun getModelsFlow(): Flow<List<CartModel>>

    @Query("SELECT * FROM CartModel")
    fun getModels(): List<CartModel>

    @Query("SELECT * FROM CartModel WHERE id=:id")
    fun getModel(id: Int): CartModel?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertModels(vararg models: CartModel)

    @Update
    fun updateModel(model: CartModel)

    @Query("DELETE FROM CartModel WHERE id=:id")
    suspend fun delete(id: Int)

    @Query("DELETE FROM CartModel")
    suspend fun clear()
}
