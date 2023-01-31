/*
 * Copyright 2023 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.keygenqt.shop.base

import java.security.spec.KeySpec
import javax.crypto.Cipher
import javax.crypto.SecretKey
import javax.crypto.SecretKeyFactory
import javax.crypto.spec.IvParameterSpec
import javax.crypto.spec.PBEKeySpec
import javax.crypto.spec.SecretKeySpec

object AESEncryption {

    /**
     * Generate secret key
     */
    private fun getSecretKey(secret: String): SecretKey {
        val factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1")
        val spec: KeySpec = PBEKeySpec(secret.toCharArray(), secret.toByteArray().copyOf(newSize = 16), 10, 128)
        return SecretKeySpec(factory.generateSecret(spec).encoded, "AES")
    }

    fun encrypt(
        secret: String,
        value: String
    ): ByteArray? {
        try {
            val desCipher: Cipher = Cipher.getInstance("AES/CBC/PKCS5Padding")
            // Generating secret key
            val secretKey = getSecretKey(secret)
            // Creating byte array to store string
            val text = value.toByteArray(charset("UTF8"))
            // Encrypting text
            desCipher.init(Cipher.ENCRYPT_MODE, secretKey, IvParameterSpec(secret.toByteArray().copyOf(newSize = 16)))
            // Return data bytes
            return desCipher.doFinal(text)
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return null
    }

    fun decrypt(
        secret: String,
        data: ByteArray
    ): String? {
        try {
            val desCipher: Cipher = Cipher.getInstance("AES/CBC/PKCS5Padding")
            // Generating secret key
            val secretKey = getSecretKey(secret)
            // Decrypting text
            desCipher.init(Cipher.DECRYPT_MODE, secretKey, IvParameterSpec(secret.toByteArray().copyOf(newSize = 16)))
            // Get bytes array
            val textDecrypted = desCipher.doFinal(data)
            // Converting decrypted byte array to string
            return String(textDecrypted)
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return null
    }
}
