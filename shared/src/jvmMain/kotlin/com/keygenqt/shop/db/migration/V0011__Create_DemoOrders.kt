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
import org.jetbrains.exposed.sql.transactions.transaction

@Suppress("unused", "ClassName")
class V0011__Create_DemoOrders : BaseJavaMigration() {
    override fun migrate(context: Context?) {
        transaction {
            val configuration = MigrationHelper.parseMigration(
              "configuration/migrations/V0011__Create_DemoOrders.yaml")
            MigrationHelper.insertOrders(
                orders = configuration["orders"] as List<*>,
            )
        }
    }
}
