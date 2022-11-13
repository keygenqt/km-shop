package com.keygenqt.shop.db.migration

import com.keygenqt.shop.db.entities.OrderProducts
import com.keygenqt.shop.db.entities.Orders
import org.flywaydb.core.api.migration.BaseJavaMigration
import org.flywaydb.core.api.migration.Context
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

@Suppress("unused", "ClassName")
class V4__Create_Orders : BaseJavaMigration() {
    override fun migrate(context: Context?) {
        transaction {
            SchemaUtils.create(Orders)
            SchemaUtils.create(OrderProducts)
        }
    }
}