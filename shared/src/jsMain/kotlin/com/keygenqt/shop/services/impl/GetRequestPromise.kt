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

import com.keygenqt.shop.data.requests.OrderProduct
import com.keygenqt.shop.data.responses.OrderState
import com.keygenqt.shop.platform.wrapPromise
import com.keygenqt.shop.services.ServiceRequest

@JsExport
@Suppress("unused", "NON_EXPORTABLE_TYPE")
class GetRequestPromise(private val client: ServiceRequest) {
    /**
     * Override [GetRequest.categories] for JS
     */
    fun categories() = wrapPromise { client.get.categories() }

    /**
     * Override [GetRequest.categoriesPublished] for JS
     */
    fun categoriesPublished() = wrapPromise { client.get.categoriesPublished() }

    /**
     * Override [GetRequest.collection] for JS
     */
    fun collection(id: Int) = wrapPromise { client.get.collection(id) }

    /**
     * Override [GetRequest.collections] for JS
     */
    fun collections() = wrapPromise { client.get.collections() }

    /**
     * Override [GetRequest.collectionsPublished] for JS
     */
    fun collectionsPublished() = wrapPromise { client.get.collectionsPublished() }

    /**
     * Override [GetRequest.category] for JS
     */
    fun category(id: Int) = wrapPromise { client.get.category(id) }

    /**
     * Override [GetRequest.messages] for JS
     */
    fun messages() = wrapPromise { client.get.messages() }

    /**
     * Override [GetRequest.message] for JS
     */
    fun message(id: Int) = wrapPromise { client.get.message(id) }

    /**
     * Override [GetRequest.products] for JS
     */
    fun products() = wrapPromise { client.get.products() }

    /**
     * Override [GetRequest.productsPublished] for JS
     */
    fun productsPublished(
        page: Int = 1,
        order: String = OrderProduct.NEWEST.name,
        range: Array<Double> = arrayOf(0.0, 999999999.0),
        categories: Array<Int> = emptyArray(),
        collections: Array<Int> = emptyArray(),
    ) = wrapPromise {
        client.get.productsPublished(
            page = page,
            order = order,
            range = range,
            categories = categories,
            collections = collections,
        )
    }

    /**
     * Override [GetRequest.productsCountPublished] for JS
     */
    fun productsCountPublished(
        categories: Array<Int>,
        collections: Array<Int>,
    ) = wrapPromise {
        client.get.productsCountPublished(
            categories = categories,
            collections = collections,
        )
    }

    /**
     * Override [GetRequest.productsPurchased] for JS
     */
    fun productsPurchased(
        excludeID: Int,
    ) = wrapPromise {
        client.get.productsPurchased(
            excludeID = excludeID,
        )
    }

    /**
     * Override [GetRequest.productsPublishedByIDs] for JS
     */
    fun productsPublishedByIDs(
        ids: Array<Int>
    ) = wrapPromise { client.get.productsPublishedByIDs(ids) }

    /**
     * Override [GetRequest.product] for JS
     */
    fun product(id: Int) = wrapPromise { client.get.product(id) }

    /**
     * Override [GetRequest.prices] for JS
     */
    fun prices(
        categories: Array<Int> = emptyArray(),
        collections: Array<Int> = emptyArray(),
    ) = wrapPromise { client.get.prices(categories, collections) }

    /**
     * Override [GetRequest.orders] for JS
     */
    fun orders(filter: OrderState) = wrapPromise { client.get.orders(filter) }

    /**
     * Get order by number
     */
    fun orderByNumber(
        number: String
    ) = wrapPromise { client.get.orderByNumber(number) }

    /**
     * Override [GetRequest.order] for JS
     */
    fun order(id: Int) = wrapPromise { client.get.order(id) }

    /**
     * Override [GetRequest.admins] for JS
     */
    fun admins() = wrapPromise { client.get.admins() }

    /**
     * Override [GetRequest.admin] for JS
     */
    fun admin(id: Int) = wrapPromise { client.get.admin(id) }

    /**
     * Override [GetRequest.dashboardMadeOrders] for JS
     */
    fun dashboardMadeOrders() = wrapPromise { client.get.dashboardMadeOrders() }

    /**
     * Override [GetRequest.dashboardOrdersCompleted] for JS
     */
    fun dashboardOrdersCompleted() = wrapPromise { client.get.dashboardOrdersCompleted() }

    /**
     * Override [GetRequest.dashboardTotalEarnings] for JS
     */
    fun dashboardTotalEarnings() = wrapPromise { client.get.dashboardTotalEarnings() }

    /**
     * Override [GetRequest.dashboardSeller] for JS
     */
    fun dashboardSeller() = wrapPromise { client.get.dashboardSeller() }

    /**
     * Override [GetRequest.dashboardChart] for JS
     */
    fun dashboardChart() = wrapPromise { client.get.dashboardChart() }
}
