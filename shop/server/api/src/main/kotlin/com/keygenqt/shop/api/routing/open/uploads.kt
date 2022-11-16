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
package com.keygenqt.shop.api.routing.open

import com.keygenqt.shop.api.base.Exceptions
import com.keygenqt.shop.api.extension.getStringParam
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.io.File

fun Route.uploads() {
    get("/uploads/{name}") {
        // get request
        val name = call.getStringParam()
        // act
        val file = File("uploads/$name")
        if (!file.exists()) throw Exceptions.NotFound()
        // response
        call.respondFile(file)
    }
}
