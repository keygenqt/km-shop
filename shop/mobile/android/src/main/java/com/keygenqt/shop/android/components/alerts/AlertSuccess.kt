package com.keygenqt.shop.android.components.alerts

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun AlertSuccess(
    text: String?
) {
    text?.let {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .clip(MaterialTheme.shapes.medium)
                .background(LocalAndroidColors.current.bgVariant6)
                .padding(vertical = 10.dp, horizontal = 16.dp)
        ) {
            AppText(color = Color.White, text = it)
        }
    }
}