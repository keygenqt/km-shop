package com.keygenqt.shop.android.data.models

import androidx.compose.runtime.Immutable
import com.keygenqt.shop.data.responses.OrderProductResponse

/**
 * Order model without db
 */
@Immutable
data class OrderProductModel(
    val price: Double,
    val count: Int,
    val sum: Double,
    val product: ProductModel,
)

fun OrderProductResponse.mapToModel() =
    OrderProductModel(
        price = price,
        count = count,
        sum = sum,
        product = product.mapToModel(),
    )

fun List<OrderProductResponse>.mapToModels() =
    map { it.mapToModel() }