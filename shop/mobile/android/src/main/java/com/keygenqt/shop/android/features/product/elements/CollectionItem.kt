package com.keygenqt.shop.android.features.product.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun CollectionItem(
    icon: ImageVector,
    title: String
) {
    val dark = isSystemInDarkTheme()
    val color = if (dark) LocalAndroidColors.current.textCaption else MaterialTheme.colors.primary

    Box(
        modifier = Modifier
            .border(width = 1.dp, color = color, shape = CircleShape)
            .clip(CircleShape)
            .background(if (dark) MaterialTheme.colors.surface else MaterialTheme.colors.background)
            .padding(vertical = 5.dp, horizontal = 10.dp)
    ) {
        Row {
            Icon(
                tint = color,
                modifier = Modifier.size(18.dp),
                imageVector = icon,
                contentDescription = null,
            )

            Spacer(modifier = Modifier.size(4.dp))

            AppText(
                color = color,
                style = MaterialTheme.typography.caption,
                text = title,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}