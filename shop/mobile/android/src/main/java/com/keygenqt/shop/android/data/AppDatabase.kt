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
package com.keygenqt.shop.android.data

import androidx.room.Database
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import com.keygenqt.shop.android.data.converters.ListConverter
import com.keygenqt.shop.android.data.dao.CartModelDao
import com.keygenqt.shop.android.data.dao.CategoryModelDao
import com.keygenqt.shop.android.data.dao.CollectionModelDao
import com.keygenqt.shop.android.data.dao.OrderHistoryModelDao
import com.keygenqt.shop.android.data.models.CartModel
import com.keygenqt.shop.android.data.models.CategoryModel
import com.keygenqt.shop.android.data.models.CollectionModel
import com.keygenqt.shop.android.data.models.OrderHistoryModel

/**
 * Database configuration [RoomDatabase]
 */
@Database(
    entities = [
        CartModel::class,
        CategoryModel::class,
        CollectionModel::class,
        OrderHistoryModel::class,
    ],
    version = 1,
    exportSchema = false
)
@TypeConverters(
    value = [
        ListConverter::class,
    ]
)
abstract class AppDatabase : RoomDatabase() {
    /**
     * Dao for model [CategoryModel]
     */
    abstract fun daoCategoryModel(): CategoryModelDao

    /**
     * Dao for model [CollectionModel]
     */
    abstract fun daoCollectionModel(): CollectionModelDao

    /**
     * Dao for model [OrderHistoryModel]
     */
    abstract fun daoOrderHistoryModel(): OrderHistoryModelDao

    /**
     * Dao for model [CartModel]
     */
    abstract fun daoCartModel(): CartModelDao
}
