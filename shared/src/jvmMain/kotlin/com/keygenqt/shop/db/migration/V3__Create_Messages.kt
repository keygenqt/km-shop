package com.keygenqt.shop.db.migration

import com.keygenqt.shop.db.entities.Messages
import org.flywaydb.core.api.migration.BaseJavaMigration
import org.flywaydb.core.api.migration.Context
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.transactions.transaction

@Suppress("unused", "ClassName")
class V3__Create_Messages : BaseJavaMigration() {
    override fun migrate(context: Context?) {
        transaction {
            SchemaUtils.create(Messages)

            Messages.insert {
                it[email] = "admin@keygenqt.com"
                it[message] = "API DAO (объект доступа к данным) Exposed похож на фреймворки ORM, такие как Hibernate, с API-интерфейсом, специфичным для Kotlin."
                it[createAt] = System.currentTimeMillis()
                it[updateAt] = System.currentTimeMillis()
            }

            Messages.insert {
                it[email] = "admin@keygenqt.com"
                it[message] = "Обратите внимание, что эти типы столбцов будут определены автоматически, поэтому вы также можете просто их не указывать."
                it[createAt] = System.currentTimeMillis()
                it[updateAt] = System.currentTimeMillis()
            }
        }
    }
}