package com.keygenqt.shop.android.features.product.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun ProductInfoBlock(
    modifier: Modifier = Modifier,
    icon: ImageVector,
    color: Color,
    title: String,
    description: String,
) {
    Column(
        modifier = modifier
            .clip(MaterialTheme.shapes.medium)
            .background(color)
            .padding(10.dp)
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
        )
        Spacer(modifier = Modifier.size(6.dp))
        AppText(
            fontWeight = FontWeight.Bold,
            text = title
        )
        Spacer(modifier = Modifier.size(3.dp))
        AppText(
            color = LocalAndroidColors.current.textCaption,
            style = MaterialTheme.typography.caption,
            text = description
        )
    }
}