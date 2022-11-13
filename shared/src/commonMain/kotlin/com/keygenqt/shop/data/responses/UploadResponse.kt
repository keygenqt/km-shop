package com.keygenqt.shop.data.responses

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Response upload files
 */
@JsExport
@Serializable
data class UploadResponse(
    val id: Int,
    val fileName: String,
    val fileMime: String,
    val originalFileName: String,
    val createAt: String,
)