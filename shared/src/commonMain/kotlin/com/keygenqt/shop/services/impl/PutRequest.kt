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

import com.keygenqt.shop.data.requests.*
import com.keygenqt.shop.data.responses.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.request.*
import io.ktor.http.*

class PutRequest(private val client: HttpClient) {
    /**
     * Update message state method
     */
    @Throws(Exception::class)
    suspend fun messageState(
        id: Int,
        request: MessageStateRequest
    ): MessageResponse {
        return client.put("api/messages/$id") { setBody(request) }.body()
    }

    /**
     * Update category method
     */
    @Throws(Exception::class)
    suspend fun category(
        id: Int,
        request: CategoryRequest
    ): CategoryResponse {
        return client.put("api/categories/$id") { setBody(request) }.body()
    }

    /**
     * Update category state method
     */
    @Throws(Exception::class)
    suspend fun categoryState(
        id: Int,
        request: CategoryStateRequest
    ): CategoryResponse {
        return client.put("api/categories/state/$id") { setBody(request) }.body()
    }

    /**
     * Update collection method
     */
    @Throws(Exception::class)
    suspend fun collection(
        id: Int,
        request: CollectionRequest
    ): CollectionResponse {
        return client.put("api/collections/$id") { setBody(request) }.body()
    }

    /**
     * Update collection state method
     */
    @Throws(Exception::class)
    suspend fun collectionState(
        id: Int,
        request: CollectionStateRequest
    ): CollectionResponse {
        return client.put("api/collections/state/$id") { setBody(request) }.body()
    }

    /**
     * Update product method
     */
    @Throws(Exception::class)
    suspend fun product(
        id: Int,
        request: ProductRequest
    ): ProductResponse {
        return client.put("api/products/$id") { setBody(request) }.body()
    }

    /**
     * Update product state method
     */
    @Throws(Exception::class)
    suspend fun productState(
        id: Int,
        request: ProductStateRequest
    ): ProductResponse {
        return client.put("api/products/state/$id") { setBody(request) }.body()
    }

    /**
     * Update admin method
     */
    @Throws(Exception::class)
    suspend fun admin(
        id: Int,
        request: AdminUpdateRequest
    ): AdminResponse {
        return client.put("api/admins/$id") { setBody(request) }.body()
    }

    /**
     * Update order address method
     */
    @Throws(Exception::class)
    suspend fun orderCustomer(
        id: Int,
        request: OrderCustomerRequest
    ): OrderResponse {
        return client.put("api/orders/customer/$id") { setBody(request) }.body()
    }

    /**
     * Update order note method
     */
    @Throws(Exception::class)
    suspend fun orderNote(
        id: Int,
        request: OrderNoteRequest
    ): OrderResponse {
        return client.put("api/orders/note/$id") { setBody(request) }.body()
    }

    /**
     * Update order state method
     */
    @Throws(Exception::class)
    suspend fun orderState(
        id: Int,
        request: OrderStateRequest
    ): OrderResponse {
        return client.put("api/orders/state/$id") { setBody(request) }.body()
    }
}
