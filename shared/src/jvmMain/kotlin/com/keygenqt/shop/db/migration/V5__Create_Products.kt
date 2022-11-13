package com.keygenqt.shop.db.migration

import com.keygenqt.shop.db.entities.ProductUploads
import com.keygenqt.shop.db.entities.Products
import org.flywaydb.core.api.migration.BaseJavaMigration
import org.flywaydb.core.api.migration.Context
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

@Suppress("unused", "ClassName")
class V5__Create_Products : BaseJavaMigration() {
    override fun migrate(context: Context?) {
        transaction {
            SchemaUtils.create(Products)
            SchemaUtils.create(ProductUploads)
        }
    }
}