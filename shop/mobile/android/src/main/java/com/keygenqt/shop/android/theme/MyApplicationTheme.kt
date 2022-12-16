package com.keygenqt.shop.android.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.keygenqt.shop.android.base.LocalAndroidColors

@Composable
fun MyApplicationTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colors = if (darkTheme) {
        darkColors(
            background = LocalAndroidColors.current.bgPage,
            primary = Color(0xFF2b96f1),
            onPrimary = Color(0xFFFFFFFF),
            secondary = Color(0xFFA63FC2),
            onSecondary = Color(0xFFFFFFFF),
            surface = Color(0xFF4E4E4E),
            onSurface = Color(0xFFFFFFFF)
        )
    } else {
        lightColors(
            background = LocalAndroidColors.current.bgPage,
            primary = Color(0xFF2b96f1),
            onPrimary = Color(0xFFFFFFFF),
            secondary = Color(0xFFA63FC2),
            onSecondary = Color(0xFFFFFFFF),
            surface = Color(0xFFFFFFFF),
            onSurface = Color(0xFF4E4E4E)
        )
    }
    val typography = Typography(
        body1 = TextStyle(
            fontFamily = FontFamily.Default,
            fontWeight = FontWeight.Normal,
            fontSize = 16.sp
        )
    )

    val shapes = Shapes(
        small = RoundedCornerShape(4.dp),
        medium = RoundedCornerShape(8.dp),
        large = RoundedCornerShape(12.dp)
    )

    MaterialTheme(
        colors = colors,
        typography = typography,
        shapes = shapes,
        content = content
    )
}