package com.keygenqt.shop.pc.client.extensions

/**
 * Check response error if count < 0
 */
fun Int.checkResponseCount(): Int {
    if (this < 0) {
        when (this) {
            -403 -> throw RuntimeException("Authentication failed.")
            else -> throw RuntimeException("Failed to connect to the server. Try later.")
        }
    }
    return this
}