package com.keygenqt.shop.platform

import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise
import kotlin.js.Promise

@OptIn(DelicateCoroutinesApi::class)
fun <T> wrapPromise(function: suspend () -> T): Promise<T> {
    return GlobalScope.promise {
        function.invoke()
    }
}