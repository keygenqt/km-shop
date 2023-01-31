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
package com.keygenqt.shop.services

import com.keygenqt.shop.services.impl.DeleteRequestPromise
import com.keygenqt.shop.services.impl.GetRequestPromise
import com.keygenqt.shop.services.impl.PostRequestPromise
import com.keygenqt.shop.services.impl.PutRequestPromise
import io.ktor.client.*
import io.ktor.client.engine.js.*

/**
 * Get platform JS client
 */
actual fun httpClient(config: HttpClientConfig<*>.() -> Unit) = HttpClient(Js) {
    config(this)
}

/**
 * JS service network
 */
@JsExport
@Suppress("unused", "NON_EXPORTABLE_TYPE")
class ServiceRequestJS(apiUrl: String = "") {
    private val request = ServiceRequest(apiUrl)

    val get by lazy { GetRequestPromise(request) }
    val put by lazy { PutRequestPromise(request) }
    val post by lazy { PostRequestPromise(request) }
    val delete by lazy { DeleteRequestPromise(request) }
}
