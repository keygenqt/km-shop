package com.keygenqt.shop.android.base

import android.util.Log
import io.ktor.client.plugins.logging.*

object AndroidHttpLogger : Logger {
    private const val logTag = "AndroidHttpLogger"

    override fun log(message: String) {
        Log.i(logTag, message)
    }
}