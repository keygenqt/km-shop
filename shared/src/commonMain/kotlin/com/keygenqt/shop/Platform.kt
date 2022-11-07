package com.keygenqt.shop

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform