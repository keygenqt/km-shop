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
     * Get categories published
     */
    @Throws(Exception::class)
    suspend fun categoriesPublished(): List<CategoryResponse> {
        return client.get("api/categories/published").body()
    }

    /**
     * Get category by id
     */
    @Throws(Exception::class)
    suspend fun category(id: Int): CategoryResponse {
        return client.get("api/categories/$id").body()
    }

    /**
     * Get collections
     */
    @Throws(Exception::class)
    suspend fun collections(): List<CollectionResponse> {
        return client.get("api/collections").body()
    }

    /**
     * Get collections published
     */
    @Throws(Exception::class)
    suspend fun collectionsPublished(): List<CollectionResponse> {
        return client.get("api/collections/published").body()
    }

    /**
     * Get collection by id
     */
    @Throws(Exception::class)
    suspend fun collection(id: Int): CollectionResponse {
        return client.get("api/collections/$id").body()
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
     * Get products published
     */
    @Throws(Exception::class)
    suspend fun productsPublished(
        page: Int,
        order: String,
        range: Array<Double>,
        categories: Array<Int>,
        collections: Array<Int>,
    ): ProductPageResponse {
        return client.get("api/products/published") {
            url {
                parameters.append("page", page.toString())
                parameters.append("order", order)
                parameters.appendAll("range", range.map { it.toString() })
                parameters.appendAll("categories", categories.map { it.toString() })
                parameters.appendAll("collections", collections.map { it.toString() })
            }
        }.body()
    }

    /**
     * Get products published
     */
    @Throws(Exception::class)
    suspend fun productsCountPublished(
        categories: Array<Int>,
        collections: Array<Int>,
    ): ProductCountResponse {
        return client.get("api/products/published/count") {
            url {
                parameters.appendAll("categories", categories.map { it.toString() })
                parameters.appendAll("collections", collections.map { it.toString() })
            }
        }.body()
    }

    /**
     * Get products published
     */
    @Throws(Exception::class)
    suspend fun productsPurchased(
        excludeID: Int,
    ): List<ProductResponse> {
        return client.get("api/products/purchased/$excludeID").body()
    }

    /**
     * Get products published by IDs
     */
    @Throws(Exception::class)
    suspend fun productsPublishedByIDs(
        ids: Array<Int>
    ): List<ProductResponse> {
        return client.get("api/products/published/by-ids") {
            url {
                parameters.appendAll("ids", ids.map { it.toString() })
            }
        }.body()
    }

    /**
     * Get product by id
     */
    @Throws(Exception::class)
    suspend fun product(id: Int): ProductResponse {
        return client.get("api/products/$id").body()
    }

    /**
     * Get prices min/max
     */
    @Throws(Exception::class)
    suspend fun prices(
        categories: Array<Int>,
        collections: Array<Int>,
    ): ProductPricesResponse {
        return client.get("api/products/prices") {
            url {
                parameters.appendAll("categories", categories.map { it.toString() })
                parameters.appendAll("collections", collections.map { it.toString() })
            }
        }.body()
    }

    /**
     * Get orders type [OrderState.NEW]
     */
    @Throws(Exception::class)
    suspend fun orders(filter: OrderState): List<OrderResponse> {
        return when (filter) {
            OrderState.NEW -> client.get("api/orders/new").body()
            OrderState.PENDING -> client.get("api/orders/pending").body()
            OrderState.COMPLETED -> client.get("api/orders/completed").body()
            OrderState.CANCELED -> client.get("api/orders/canceled").body()
        }
    }

    /**
     * Get order by number
     */
    @Throws(Exception::class)
    suspend fun orderByNumber(
        number: String
    ): OrderResponse {
        return client.get("api/orders/number/$number").body()
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

    /**
     * Get dashboard info "Made Orders"
     */
    @Throws(Exception::class)
    suspend fun dashboardMadeOrders(): DashboardCountResponse {
        return client.get("api/dashboard/made-orders").body()
    }

    /**
     * Get dashboard info "Orders Completed"
     */
    @Throws(Exception::class)
    suspend fun dashboardOrdersCompleted(): DashboardCountResponse {
        return client.get("api/dashboard/orders-completed").body()
    }

    /**
     * Get dashboard info "Total Earnings"
     */
    @Throws(Exception::class)
    suspend fun dashboardTotalEarnings(): DashboardAmountResponse {
        return client.get("api/dashboard/total-earnings").body()
    }

    /**
     * Get dashboard info "Best Seller"
     */
    @Throws(Exception::class)
    suspend fun dashboardSeller(): List<OrderResponse> {
        return client.get("api/dashboard/seller").body()
    }

    /**
     * Get dashboard info "Chart"
     */
    @Throws(Exception::class)
    suspend fun dashboardChart(): DashboardChartResponse {
        return client.get("api/dashboard/chart").body()
    }

    /**
     * Get count new order
     */
    @Throws(Exception::class)
    suspend fun countNewOrder(): CountResponse {
        return client.get("api/orders/new/count").body()
    }

    /**
     * Get count help message not checked
     */
    @Throws(Exception::class)
    suspend fun countHelpNotChecked(): CountResponse {
        return client.get("api/messages/not-checked-count").body()
    }
}
