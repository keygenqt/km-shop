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
package com.keygenqt.shop.android.features.orderCreate.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.TextField
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.alerts.AlertError
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.components.texts.AppTextHelper
import com.keygenqt.shop.exception.ResponseException

@Composable
fun OrderCreateBody(
    loading: Boolean,
    error: ResponseException?,
    onSubmit: (
        email: String,
        phone: String,
        address: String,
    ) -> Unit
) {
    val scrollState = rememberScrollState()

    var email by remember { mutableStateOf("") }
    var phone by remember { mutableStateOf("") }
    var address by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight()
            .verticalScroll(state = scrollState)
            .padding(16.dp)
            .imePadding()
    ) {

        AppText(
            style = MaterialTheme.typography.h6,
            text = stringResource(id = R.string.order_create_title2)
        )

        Spacer(modifier = Modifier.size(3.dp))

        AppText(
            style = MaterialTheme.typography.caption,
            text = stringResource(id = R.string.order_create_info)
        )

        Spacer(modifier = Modifier.size(16.dp))

        error?.let {
            if (it.validate.isNullOrEmpty()) {
                AlertError(text = error.message)
                Spacer(modifier = Modifier.size(16.dp))
            }
        }

        TextField(
            keyboardOptions = KeyboardOptions.Default.copy(
                keyboardType = KeyboardType.Phone
            ),
            isError = error?.validate?.any { it.filed == "phone" } ?: false,
            enabled = !loading,
            singleLine = true,
            maxLines = 1,
            modifier = Modifier.fillMaxWidth(),
            label = { Text(stringResource(id = R.string.order_create_field_phone)) },
            value = phone,
            onValueChange = { phone = it },
        )

        Spacer(modifier = Modifier.size(3.dp))

        AppTextHelper(
            filed = "phone",
            validate = error?.validate
        )

        Spacer(modifier = Modifier.size(16.dp))

        TextField(
            keyboardOptions = KeyboardOptions.Default.copy(
                keyboardType = KeyboardType.Email
            ),
            isError = error?.validate?.any { it.filed == "email" } ?: false,
            enabled = !loading,
            singleLine = true,
            maxLines = 1,
            modifier = Modifier.fillMaxWidth(),
            label = { Text(stringResource(id = R.string.order_create_field_email)) },
            value = email,
            onValueChange = { email = it },
        )

        Spacer(modifier = Modifier.size(3.dp))

        AppTextHelper(
            filed = "email",
            validate = error?.validate
        )

        Spacer(modifier = Modifier.size(16.dp))

        TextField(
            keyboardOptions = KeyboardOptions.Default.copy(
                keyboardType = KeyboardType.Text
            ),
            isError = error?.validate?.any { it.filed == "address" } ?: false,
            enabled = !loading,
            singleLine = false,
            maxLines = 10,
            modifier = Modifier
                .fillMaxWidth()
                .defaultMinSize(minHeight = 130.dp),
            label = { Text(stringResource(id = R.string.order_create_field_address)) },
            value = address,
            onValueChange = { address = it },
        )

        Spacer(modifier = Modifier.size(3.dp))

        AppTextHelper(
            filed = "address",
            validate = error?.validate
        )

        Spacer(modifier = Modifier.size(16.dp))

        Button(
            enabled = !loading,
            modifier = Modifier.fillMaxWidth(),
            onClick = {
                onSubmit.invoke(
                    email,
                    phone,
                    address,
                )
            },
        ) {
            AppText(
                color = Color.White,
                text = stringResource(id = R.string.order_create_btn_submit)
            )
        }
    }
}
