package com.keygenqt.shop.android.features.contactForm.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun ContactFormBody() {

    val scrollState = rememberScrollState()

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight()
            .verticalScroll(state = scrollState)
            .padding(16.dp),
    ) {
        AppText(text = "ContactFormBody")
    }
}