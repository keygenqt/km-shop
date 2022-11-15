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
package com.keygenqt.shop.db.migration

import com.keygenqt.shop.data.responses.AdminRole
import com.keygenqt.shop.db.entities.*
import com.keygenqt.shop.db.utils.Password
import com.keygenqt.shop.extension.createFileUploadCategory
import com.keygenqt.shop.extension.createFileUploadProducts
import com.keygenqt.shop.utils.helpers.ConstantsMime.toMime
import org.flywaydb.core.api.migration.BaseJavaMigration
import org.flywaydb.core.api.migration.Context
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.transactions.transaction

@Suppress("unused", "ClassName")
class V7__Create_DemoData : BaseJavaMigration() {
    override fun migrate(context: Context?) {
        transaction {
            "http://localhost:8086".let { host ->
                users()
                categories(host)
                products(host)
            }
        }
    }
}

/**
 * Demo categories
 */
private fun categories(
    host: String
) {
    val categoryBows = "categoryBows.png".createFileUploadCategory()

    CategoryEntity.new {
        name = "Бантики"

        image = "$host/api/uploads/${categoryBows?.fileName}"
        uploads = SizedCollection(*listOfNotNull(categoryBows).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val categoryHeadbands = "categoryHeadbands.png".createFileUploadCategory()

    CategoryEntity.new {
        name = "Ободки"

        image = "$host/api/uploads/${categoryHeadbands?.fileName}"
        uploads = SizedCollection(*listOfNotNull(categoryHeadbands).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val categoryBox = "categoryBox.png".createFileUploadCategory()

    CategoryEntity.new {
        name = "Набор"

        image = "$host/api/uploads/${categoryBox?.fileName}"
        uploads = SizedCollection(*listOfNotNull(categoryBox).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }
}

/**
 * Demo products
 */
private fun products(
    host: String
) {

    val imgDSC0004 = "DSC_0004.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Цветочные Бантики"
        price = 1000.50
        description = "Цветочные банттики для цветочков."

        image = "$host/api/uploads/${imgDSC0004?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0004).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0007 = "DSC_0007.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Бантик Крутой"
        price = 1200.50
        description = "Крутой бант для рокерш нерфомалок."

        image = "$host/api/uploads/${imgDSC0007?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0007).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0009 = "DSC_0009.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Сладкий Бантик"
        price = 900.50
        description = "Бантики для сладкоежек."

        image = "$host/api/uploads/${imgDSC0009?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0009).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0017 = "DSC_0017.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Бантик Красота"
        price = 2100.90
        description = "Топовый бантки для топовых девченок."

        image = "$host/api/uploads/${imgDSC0017?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0017).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0022 = "DSC_0022.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Бантик Морской Свет"
        price = 1300.0
        description = "Любишьш море? Носи море на черепушке."

        image = "$host/api/uploads/${imgDSC0022?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0022).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0026 = "DSC_0026.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(3, Categories)
        name = "Наборчик"
        price = 3200.20
        description = "Набор для девочек любящих бантики."

        image = "$host/api/uploads/${imgDSC0026?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0026).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0033 = "DSC_0033.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Королина"
        price = 800.20
        description = "Заколка стилизованная по Королину"

        image = "$host/api/uploads/${imgDSC0033?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0033).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0045 = "DSC_0045.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Дорого-багато"
        price = 3100.20
        description = "Бантикти для буржуев."

        image = "$host/api/uploads/${imgDSC0045?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0045).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0053 = "DSC_0053.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Свадьба"
        price = 2800.70
        description = "Одень корапуза красивее невесты."

        image = "$host/api/uploads/${imgDSC0053?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0053).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0072 = "DSC_0072.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(1, Categories)
        name = "Микки"
        price = 3200.20
        description = "Стилизованные бантики по Дисней"

        image = "$host/api/uploads/${imgDSC0072?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0072).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }

    val imgDSC0093 = "DSC_0093.png".createFileUploadProducts()

    ProductEntity.new {
        categoryID = EntityID(2, Categories)
        name = "Ободок красота"
        price = 3200.20
        description = "Крутой ободок для крутых карапузов."

        image = "$host/api/uploads/${imgDSC0093?.fileName}"
        uploads = SizedCollection(*listOfNotNull(imgDSC0093).toTypedArray())

        isPublished = true

        createAt = System.currentTimeMillis()
        updateAt = System.currentTimeMillis()
    }
}

/**
 * Demo users
 */
private fun users() {
    Admins.insert {
        it[email] = "admin@keygenqt.com"
        it[password] = Password.encode("12345678")
        it[role] = AdminRole.ADMIN
    }

    (0..5).forEach { index ->
        Admins.insert {
            it[email] = "admin$index@keygenqt.com"
            it[password] = Password.encode("12345678")
            it[role] = AdminRole.ADMIN
        }
    }

    (0..10).forEach { index ->
        Admins.insert {
            it[email] = "manager$index@keygenqt.com"
            it[password] = Password.encode("12345678")
            it[role] = AdminRole.MANAGER
        }
    }
}
