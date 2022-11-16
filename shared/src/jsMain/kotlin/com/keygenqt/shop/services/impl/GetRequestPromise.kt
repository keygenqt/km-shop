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
     * Override [GetRequest.product] for JS
     */
    fun product(id: Int) = wrapPromise { client.get.product(id) }

    /**
     * Override [GetRequest.ordersNew] for JS
     */
    fun ordersNew() = wrapPromise { client.get.ordersNew() }

    /**
     * Override [GetRequest.ordersNew] for JS
     */
    fun ordersPending() = wrapPromise { client.get.ordersPending() }

    /**
     * Override [GetRequest.ordersCompleted] for JS
     */
    fun ordersCompleted() = wrapPromise { client.get.ordersCompleted() }

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
}
