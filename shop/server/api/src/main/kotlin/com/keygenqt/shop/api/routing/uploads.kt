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
package com.keygenqt.shop.api.routing

import com.keygenqt.shop.api.base.Exceptions
import com.keygenqt.shop.api.extension.checkRoleAuth
import com.keygenqt.shop.api.extension.checkRoleFull
import com.keygenqt.shop.api.extension.getStringParam
import com.keygenqt.shop.api.extension.toFileNameIcon
import com.keygenqt.shop.db.entities.UploadEntity
import com.keygenqt.shop.db.entities.toModels
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
        get("/{name}") {
            // check role
            call.checkRoleFull()
            // get request
            val name = call.getStringParam()
            val path = when {
                name.contains(".") -> "uploads/$name"
                name.contains("Outlined") -> "material-icons/${name.toFileNameIcon()}/outline.svg"
                name.contains("Rounded") -> "material-icons/${name.toFileNameIcon()}/round.svg"
                name.contains("TwoTone") -> "material-icons/${name.toFileNameIcon()}/twotone.svg"
                name.contains("Sharp") -> "material-icons/${name.toFileNameIcon()}/sharp.svg"
                else -> "material-icons/${name.toFileNameIcon()}/baseline.svg"
            }
            // act
            val file = File(path)
            if (!file.exists()) throw Exceptions.NotFound()
            // response
            call.respondFile(file)
        }
        post {
            // check role
            call.checkRoleAuth()
            // get request
            val uploads = mutableListOf<UploadEntity>()
            // act
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

                    uploads.add(
                        uploadsService.transaction {
                            insert(
                                fileName = name,
                                contentType = part.contentType ?: throw Exceptions.BadRequest(),
                                originalFileName = part.originalFileName
                                    ?: throw Exceptions.BadRequest()
                            )
                        }
                    )
                }
                part.dispose()
            }
            // response
            call.respond(uploads.toModels())
        }
        delete("/{name}") {
            // check role
            call.checkRoleAuth()
            // get request
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
