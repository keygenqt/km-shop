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
package com.keygenqt.shop.db.entities

import com.keygenqt.shop.data.responses.MessageResponse
import com.keygenqt.shop.extension.toUTC
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

/**
 * Table for help desk
 */
object Messages : IntIdTable() {
    val fname = varchar("fname", 255)
    val lname = varchar("lname", 255)
    val email = varchar("email", 255)
    val phone = varchar("phone", 255)
    val message = text("message")
    val isChecked = bool("isChecked").default(false)
    val createAt = long("createAt")
    val updateAt = long("updateAt")
}

/**
 * Exposed entity
 */
class MessageEntity(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<MessageEntity>(Messages)

    var lname by Messages.lname
    var fname by Messages.fname
    var email by Messages.email
    var phone by Messages.phone
    var message by Messages.message
    var isChecked by Messages.isChecked
    var createAt by Messages.createAt
    var updateAt by Messages.updateAt
}

/**
 * Convert to [MessageResponse]
 */
fun MessageEntity.toModel() = MessageResponse(
    id = id.value,
    lname = lname,
    fname = fname,
    email = email,
    phone = phone,
    message = message,
    isChecked = isChecked,
    createAt = createAt.toUTC(),
    updateAt = updateAt.toUTC(),
)

/**
 * Convert to [List]
 */
fun Iterable<MessageEntity>.toModels(): List<MessageResponse> {
    return map { it.toModel() }
}
