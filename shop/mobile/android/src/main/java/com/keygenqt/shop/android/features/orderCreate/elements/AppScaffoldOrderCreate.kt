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

import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppScaffold
import com.keygenqt.shop.android.components.lottie.LoadingAnimation

@Composable
fun AppScaffoldOrderCreate(
    loading: Boolean,
    onClickBack: () -> Unit,
    content: @Composable () -> Unit
) {
    AppScaffold(
        title = stringResource(id = R.string.order_create_title),
        navigationIcon = {
            IconButton(onClick = onClickBack) {
                Icon(
                    imageVector = Icons.Filled.ArrowBack,
                    contentDescription = null,
                )
            }
        },
        actions = {
            if (loading) {
                LoadingAnimation()
            }
        }
    ) {
        content.invoke()
    }
}
