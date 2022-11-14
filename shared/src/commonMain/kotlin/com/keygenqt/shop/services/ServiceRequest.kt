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
package com.keygenqt.shop.services

import com.keygenqt.shop.exception.ErrorResponse
import com.keygenqt.shop.exception.ResponseException
import com.keygenqt.shop.services.impl.GetRequest
import com.keygenqt.shop.services.impl.PostRequest
import com.keygenqt.shop.services.impl.PutRequest
import com.keygenqt.shop.utils.constants.AppConstants
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.logging.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json

/**
 * Get platform client
 */
expect fun httpClient(config: HttpClientConfig<*>.() -> Unit = {}): HttpClient

/**
 * Common service network
 */
class ServiceRequest(
    private val apiUrl: String? = null
) {

    val get by lazy { GetRequest(httpClient) }
    val put by lazy { PutRequest(httpClient) }
    val post by lazy { PostRequest(httpClient) }

    private val json = Json {
        prettyPrint = true
        isLenient = true
        ignoreUnknownKeys = true
    }

    private val httpClient = httpClient {

        expectSuccess = false

        HttpResponseValidator {
            validateResponse { response ->
                if (response.status != HttpStatusCode.OK) {
                    val error: ErrorResponse = response.body()
                    throw ResponseException(
                        code = response.status.value,
                        message = error.message,
                        validate = error.validate?.toTypedArray(),
                    )
                }
            }
        }

        install(Logging) {
            logger = Logger.DEFAULT
            level = LogLevel.ALL
        }

        install(DefaultRequest) {
            apiUrl?.let {
                url(it)
            } ?: run {
                url(AppConstants.link.API_URL)
            }
            contentType(ContentType.Application.Json)
        }

        install(ContentNegotiation) {
            json(json)
        }
    }
}
