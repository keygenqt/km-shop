package com.keygenqt.shop.pc.client.extensions

/**
 * App get one params from Qt app
 */
fun Array<String>.getSecret(): String {
    if (this.size != 1 || !this[0].matches("""^--secret=[\w\d\\-]+$""".toRegex())) {
        throw RuntimeException("Unique secret key required. --secret={key}")
    }
    return this[0].split("=")[1]
}