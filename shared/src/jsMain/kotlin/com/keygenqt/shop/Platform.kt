package com.keygenqt.shop

class JSPlatform : Platform {
    override val name: String = "Kotlin/JS"
}

actual fun getPlatform(): Platform = JSPlatform()