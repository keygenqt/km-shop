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
package com.keygenqt.shop.android.features.contactForm

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.features.contactForm.elements.AppScaffoldContactFrom
import com.keygenqt.shop.android.features.contactForm.elements.ContactFormBody

/**
 * Contact page with form message
 *
 * @param viewModel page view model
 */
@Composable
fun ContactFormScreen(
    navController: NavHostController,
    viewModel: ContactFormViewModel = hiltViewModel(),
) {
    val success by viewModel.success.collectAsState()
    val loading by viewModel.loading.collectAsState()
    val error by viewModel.error.collectAsState()

    AppScaffoldContactFrom(
        loading = loading,
        navController = navController
    ) {
        ContactFormBody(
            success = success,
            loading = loading,
            error = error,
            onSubmit = { email, fname, lname, phone, message ->
                viewModel.sendMessage(
                    email = email,
                    fname = fname,
                    lname = lname,
                    phone = phone,
                    message = message,
                )
            }
        )
    }
}
