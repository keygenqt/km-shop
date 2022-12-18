/*
 * Copyright 2022 Vitaliy Zarubin
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
package com.keygenqt.shop.android.features.contact.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.base.BoxColorBg

@Composable
fun ContactBody(
    onSendMessage: () -> Unit
) {

    val scrollState = rememberScrollState()
    var scrollEnable by remember { mutableStateOf(true) }

    BoxColorBg {
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
}
