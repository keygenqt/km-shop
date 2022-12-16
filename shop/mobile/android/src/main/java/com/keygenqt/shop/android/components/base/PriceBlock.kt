package com.keygenqt.shop.android.components.base

import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.extensions.priceFormat

@Composable
fun PriceBlock(
    price: Double
) {
    Box(
        modifier = Modifier
            .border(width = 1.dp, color = Color(0XFF22C55E), shape = MaterialTheme.shapes.large)
            .padding(vertical = 5.dp, horizontal = 10.dp)
    ) {
        AppText(
            color = Color(0XFF22C55E),
            style = MaterialTheme.typography.caption,
            text = price.priceFormat(),
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
    }
}

@Composable
fun PriceBlockLarge(
    price: Double
) {
    Box(
        modifier = Modifier
            .border(width = 1.dp, color = Color(0XFF22C55E), shape = MaterialTheme.shapes.large)
            .padding(vertical = 7.dp, horizontal = 16.dp)
    ) {
        AppText(
            color = Color(0XFF22C55E),
            style = MaterialTheme.typography.body1,
            text = price.priceFormat(),
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
    }
}