package com.keygenqt.shop.android.components.state

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.lottie.EmptyBoxAnimation
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun EmptyBody(
    title: String,
    subtitle: String
) {
    Box {
        Box(
            modifier = Modifier.fillMaxSize(),
        ) {
            Column(
                modifier = Modifier
                    .align(Alignment.Center)
                    .offset(0.dp, (-55).dp),
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                EmptyBoxAnimation(
                    modifier = Modifier.size(230.dp)
                )

                AppText(
                    modifier = Modifier
                        .fillMaxWidth(),
                    text = title,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.size(16.dp))

                AppText(
                    color = Color(0XFF707f95),
                    modifier = Modifier.fillMaxWidth(0.7f),
                    style = MaterialTheme.typography.caption,
                    text = subtitle,
                    textAlign = TextAlign.Center
                )
            }
        }
        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState()),
        ) { }
    }
}