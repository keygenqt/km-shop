package com.keygenqt.shop.android.components.base

import androidx.compose.foundation.background
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.keygenqt.shop.android.base.LocalAndroidColors

@Composable
fun BoxColorBg(
    content: @Composable () -> Unit
) {
    val dark = isSystemInDarkTheme()
    Box(
        modifier = Modifier
            .fillMaxSize()
            .then(if (dark) Modifier else Modifier.background(LocalAndroidColors.current.bgVariant1))
    ) {
        content.invoke()
    }
}