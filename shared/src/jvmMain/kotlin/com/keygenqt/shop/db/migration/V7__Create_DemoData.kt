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

import com.keygenqt.shop.db.utils.MigrationHelper
import org.flywaydb.core.api.migration.BaseJavaMigration
import org.flywaydb.core.api.migration.Context
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.transactions.transaction
import org.yaml.snakeyaml.Yaml
import java.io.File

@Suppress("unused", "ClassName")
class V7__Create_DemoData : BaseJavaMigration() {

    lateinit var categories: Map<String, EntityID<Int>>

    override fun migrate(context: Context?) {

        val configuration = Yaml().load<Map<String, Any>>(
            File("configuration/migrations/V7__migration.yaml").readText()
        )

        transaction {
            MigrationHelper.insertAdmins(
                admins = configuration["admins"] as List<*>
            )
        }

        transaction {
            MigrationHelper.insertMessages(
                messages = configuration["messages"] as List<*>
            )
        }

        transaction {
            categories = MigrationHelper.insertCategories(
                host = configuration["host"] as String,
                categories = configuration["categories"] as List<*>
            )
        }

        transaction {
            MigrationHelper.insertProducts(
                host = configuration["host"] as String,
                products = configuration["products"] as List<*>,
                categoriesIds = categories
            )
        }
    }
}
