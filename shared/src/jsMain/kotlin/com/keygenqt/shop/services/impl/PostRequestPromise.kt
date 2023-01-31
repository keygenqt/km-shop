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
class PostRequestPromise(private val client: ServiceRequest) {
    /**
     * Override [PostRequest.login] for JS
     */
    fun login(request: LoginRequest) = wrapPromise {
        client.post.login(request)
    }

    /**
     * Override [PostRequest.message] for JS
     */
    fun message(
        request: MessageRequest
    ) = wrapPromise {
        client.post.message(request)
    }

    /**
     * Override [PostRequest.category] for JS
     */
    fun category(
        request: CategoryRequest
    ) = wrapPromise {
        client.post.category(request)
    }

    /**
     * Override [PostRequest.collection] for JS
     */
    fun collection(
        request: CollectionRequest
    ) = wrapPromise {
        client.post.collection(request)
    }

    /**
     * Override [PostRequest.product] for JS
     */
    fun product(
        request: ProductRequest
    ) = wrapPromise {
        client.post.product(request)
    }

    /**
     * Override [PostRequest.admin] for JS
     */
    fun admin(
        request: AdminCreateRequest
    ) = wrapPromise {
        client.post.admin(request)
    }

    /**
     * Override [PostRequest.uploads] for JS
     */
    fun uploads(
        files: Array<FileRequest>
    ) = wrapPromise {
        client.post.uploads(files)
    }

    /**
     * Override [PostRequest.orderCreate] for JS
     */
    fun orderCreate(
        request: OrderCreateRequest
    ) = wrapPromise {
        client.post.orderCreate(request)
    }
}
