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

import com.keygenqt.shop.data.responses.RocketModel
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.request.*
import io.ktor.http.*

class GetRequest(private val client: HttpClient) {

    /**
     * Test query without tokens from demo KM
     */
    @Throws(Exception::class)
    suspend fun rocketsDemoJetBrains(): List<RocketModel> {
        return client.get("https://api.spacexdata.com/v4/launches").body()
    }

    /**
     * Test query without tokens from demo KM ktor API
     */
    @Throws(Exception::class)
    suspend fun rocketsDemoAPI(): List<RocketModel> {
        return client.get("rockets").body()
    }
}
