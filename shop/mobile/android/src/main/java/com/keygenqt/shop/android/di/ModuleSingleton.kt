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
package com.keygenqt.shop.android.di

import android.app.Application
import androidx.room.Room
import com.keygenqt.shop.android.base.AndroidHttpLogger
import com.keygenqt.shop.android.data.AppDatabase
import com.keygenqt.shop.android.services.AppDataService
import com.keygenqt.shop.android.utils.AppHelper
import com.keygenqt.shop.services.ServiceRequest
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

/**
 * Dagger Module base for app
 */
@Module
@InstallIn(SingletonComponent::class)
object ModuleSingleton {
    /**
     * Ktor http client
     */
    @Provides
    @Singleton
    fun provideServiceRequest() = ServiceRequest(
        apiUrl = AppHelper.getApiUrl(),
        logger = AndroidHttpLogger
    )

    /**
     * A database that doesn't need migrations and encryption
     */
    @Provides
    @Singleton
    fun provideAppDatabase(application: Application): AppDatabase {
        return Room.databaseBuilder(
            application,
            AppDatabase::class.java,
            "${ModuleSingleton::class.qualifiedName}.db"
        )
            .fallbackToDestructiveMigration()
            .build()
    }

    /**
     * Database management service
     */
    @Provides
    @Singleton
    fun provideUsersDataService(db: AppDatabase) = AppDataService(db)
}
