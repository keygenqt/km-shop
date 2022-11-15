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
package com.keygenqt.shop.api.routing.security

import com.keygenqt.shop.api.base.Exceptions
import com.keygenqt.shop.api.extension.getStringParam
import com.keygenqt.shop.db.entities.UploadEntity
import com.keygenqt.shop.db.service.UploadsService
import com.keygenqt.shop.utils.helpers.ConstantsMime.toExtension
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject
import java.io.File
import java.util.*

fun Route.uploads() {

    val uploadsService: UploadsService by inject()

    route("/uploads") {
        // upload file
        post {

            val uploads = mutableListOf<UploadEntity>()
            val multipart = call.receiveMultipart()

            multipart.forEachPart { part ->
                if (part is PartData.FileItem) {

                    val name = "${UUID.randomUUID()}.${part.contentType.toExtension()}"
                    val file = File("uploads/$name")

                    part.streamProvider().use { its ->
                        file.outputStream().buffered().use {
                            its.copyTo(it)
                        }
                    }

                    uploadsService.transaction {
                        uploads.add(
                            UploadEntity.new {
                                fileName = name
                                fileMime = part.contentType.toString()
                                originalFileName = part.originalFileName!!
                            }
                        )
                    }
                }
                part.dispose()
            }

            if (uploads.isNotEmpty()) {
                if (uploads.size == 1) {
                    call.respond(uploads.first())
                } else {
                    call.respond(call.respond(uploads))
                }
            } else {
                throw Exceptions.BadRequest()
            }
        }

        // delete file
        delete("/{name}") {
            val name = call.getStringParam()
            // delete db row
            uploadsService.transaction {
                deleteByFileName(name)
            }
            // delete file
            val file = File("uploads/$name")
            if (file.exists()) {
                file.delete()
                call.respond(HttpStatusCode.OK)
            } else throw Exceptions.NotFound()
        }
    }
}
