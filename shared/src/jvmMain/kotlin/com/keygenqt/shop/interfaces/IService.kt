package com.keygenqt.shop.interfaces

import com.keygenqt.shop.db.base.DatabaseMysql

interface IService<T> {
    val db: DatabaseMysql
    suspend fun <R> transaction(query: T.() -> R) = db.transaction {
        query.invoke(this as T)
    }
}