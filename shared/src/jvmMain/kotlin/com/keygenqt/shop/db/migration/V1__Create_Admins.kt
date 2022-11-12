package com.keygenqt.shop.db.migration

import com.keygenqt.shop.data.responses.AdminModelRole
import com.keygenqt.shop.db.entities.Admins
import com.keygenqt.shop.db.utils.Password
import org.flywaydb.core.api.migration.BaseJavaMigration
import org.flywaydb.core.api.migration.Context
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.transactions.transaction

@Suppress("unused", "ClassName")
class V1__Create_Admins : BaseJavaMigration() {
    override fun migrate(context: Context?) {
        transaction {
            SchemaUtils.create(Admins)

            Admins.insert {
                it[email] = "admin@keygenqt.com"
                it[password] = Password.encode("12345678")
                it[role] = AdminModelRole.ADMIN
            }
        }
    }
}