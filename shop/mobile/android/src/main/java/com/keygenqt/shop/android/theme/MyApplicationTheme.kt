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
