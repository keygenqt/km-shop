package com.keygenqt.shop.db.migration

import com.keygenqt.shop.db.entities.Categories
import com.keygenqt.shop.db.entities.CategoryUploads
import org.flywaydb.core.api.migration.BaseJavaMigration
import org.flywaydb.core.api.migration.Context
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

@Suppress("unused", "ClassName")
class V2__Create_Categories : BaseJavaMigration() {
    override fun migrate(context: Context?) {
        transaction {
            SchemaUtils.create(Categories)
            SchemaUtils.create(CategoryUploads)
        }
    }
}