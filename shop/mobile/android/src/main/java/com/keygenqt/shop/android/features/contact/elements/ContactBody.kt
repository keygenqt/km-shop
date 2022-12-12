package com.keygenqt.shop.android.features.contact.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun ContactBody(
    onSendMessage: () -> Unit
) {

    val scrollState = rememberScrollState()
    var scrollEnable by remember { mutableStateOf(true) }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight()
            .verticalScroll(state = scrollState, enabled = scrollEnable)
            .padding(16.dp),
    ) {
        ContactMessageBlock(onSendMessage = onSendMessage)
        Spacer(modifier = Modifier.height(16.dp))
        ContactEmailBlock()
        Spacer(modifier = Modifier.height(16.dp))
        ContactPhoneBlock()
        Spacer(modifier = Modifier.height(16.dp))
        ContactAddressBlock()
        Spacer(modifier = Modifier.height(16.dp))
        ContactMapBlock(onFocused = { scrollEnable = !it })
    }
}