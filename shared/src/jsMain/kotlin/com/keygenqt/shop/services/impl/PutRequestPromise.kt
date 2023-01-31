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

import com.keygenqt.shop.data.requests.*
import com.keygenqt.shop.platform.wrapPromise
import com.keygenqt.shop.services.ServiceRequest

@JsExport
@Suppress("unused", "NON_EXPORTABLE_TYPE")
class PutRequestPromise(private val client: ServiceRequest) {
    /**
     * Override [PutRequest.messageState] for JS
     */
    fun messageState(
        id: Int,
        request: MessageStateRequest
    ) = wrapPromise {
        client.put.messageState(id, request)
    }

    /**
     * Override [PutRequest.category] for JS
     */
    fun category(
        id: Int,
        request: CategoryRequest
    ) = wrapPromise {
        client.put.category(id, request)
    }

    /**
     * Override [PutRequest.categoryState] for JS
     */
    fun categoryState(
        id: Int,
        request: CategoryStateRequest
    ) = wrapPromise {
        client.put.categoryState(id, request)
    }

    /**
     * Override [PutRequest.collection] for JS
     */
    fun collection(
        id: Int,
        request: CollectionRequest
    ) = wrapPromise {
        client.put.collection(id, request)
    }

    /**
     * Override [PutRequest.collectionState] for JS
     */
    fun collectionState(
        id: Int,
        request: CollectionStateRequest
    ) = wrapPromise {
        client.put.collectionState(id, request)
    }

    /**
     * Override [PutRequest.product] for JS
     */
    fun product(
        id: Int,
        request: ProductRequest
    ) = wrapPromise {
        client.put.product(id, request)
    }

    /**
     * Override [PutRequest.productState] for JS
     */
    fun productState(
        id: Int,
        request: ProductStateRequest
    ) = wrapPromise {
        client.put.productState(id, request)
    }

    /**
     * Override [PutRequest.admin] for JS
     */
    fun admin(
        id: Int,
        request: AdminUpdateRequest
    ) = wrapPromise {
        client.put.admin(id, request)
    }

    /**
     * Override [PutRequest.orderCustomer] for JS
     */
    fun orderCustomer(
        id: Int,
        request: OrderCustomerRequest
    ) = wrapPromise {
        client.put.orderCustomer(id, request)
    }

    /**
     * Override [PutRequest.orderNote] for JS
     */
    fun orderNote(
        id: Int,
        request: OrderNoteRequest
    ) = wrapPromise {
        client.put.orderNote(id, request)
    }

    /**
     * Override [PutRequest.orderState] for JS
     */
    fun orderState(
        id: Int,
        request: OrderStateRequest
    ) = wrapPromise {
        client.put.orderState(id, request)
    }
}
