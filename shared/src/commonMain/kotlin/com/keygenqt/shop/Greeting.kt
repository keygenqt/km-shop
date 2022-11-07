package com.keygenqt.shop

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("Greeting")
class Greeting {
    private val platform: Platform = getPlatform()

    fun greeting(): String {
        return "Hello, ${platform.name}!"
    }
}