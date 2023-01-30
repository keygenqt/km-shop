package com.keygenqt.shop.pc.client.extensions

import com.keygenqt.shop.exception.ResponseException

/**
 * Check response error if count < 0
 */
fun Int.checkResponseCount(): Int {
    if (this < 0) {
        when (this) {
            -403 -> throw ResponseException(403, "Authentication failed.")
            else -> throw ResponseException(500, "Failed to connect to the server. Try later.")
        }
    }
    return this
}