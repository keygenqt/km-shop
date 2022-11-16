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
package com.keygenqt.shop.services.impl

import com.keygenqt.shop.data.responses.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.request.*
import io.ktor.http.*

class GetRequest(private val client: HttpClient) {
    /**
     * Get categories
     */
    @Throws(Exception::class)
    suspend fun categories(): List<CategoryResponse> {
        return client.get("api/categories").body()
    }

    /**
     * Get category by id
     */
    @Throws(Exception::class)
    suspend fun category(id: Int): CategoryResponse {
        return client.get("api/categories/$id").body()
    }

    /**
     * Get messages
     */
    @Throws(Exception::class)
    suspend fun messages(): List<MessageResponse> {
        return client.get("api/messages").body()
    }

    /**
     * Get message by id
     */
    @Throws(Exception::class)
    suspend fun message(id: Int): MessageResponse {
        return client.get("api/messages/$id").body()
    }

    /**
     * Get products
     */
    @Throws(Exception::class)
    suspend fun products(): List<ProductResponse> {
        return client.get("api/products").body()
    }

    /**
     * Get product by id
     */
    @Throws(Exception::class)
    suspend fun product(id: Int): ProductResponse {
        return client.get("api/products/$id").body()
    }

    /**
     * Get orders type [OrderState.NEW]
     */
    @Throws(Exception::class)
    suspend fun ordersNew(): List<OrderResponse> {
        return client.get("api/orders/new").body()
    }

    /**
     * Get orders type [OrderState.PENDING]
     */
    @Throws(Exception::class)
    suspend fun ordersPending(): List<OrderResponse> {
        return client.get("api/orders/pending").body()
    }

    /**
     * Get orders type [OrderState.COMPLETED]
     */
    @Throws(Exception::class)
    suspend fun ordersCompleted(): List<OrderResponse> {
        return client.get("api/orders/completed").body()
    }

    /**
     * Get order by id
     */
    @Throws(Exception::class)
    suspend fun order(id: Int): OrderResponse {
        return client.get("api/orders/$id").body()
    }

    /**
     * Get managers admin-panel
     */
    @Throws(Exception::class)
    suspend fun admins(): List<AdminResponse> {
        return client.get("api/admins").body()
    }

    /**
     * Get admin by id
     */
    @Throws(Exception::class)
    suspend fun admin(id: Int): AdminResponse {
        return client.get("api/admins/$id").body()
    }
}
