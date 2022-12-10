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
package com.keygenqt.shop.android.features.home.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.features.home.viewModels.HomeViewModel
import com.keygenqt.shop.android.routes.RouteHome
import com.keygenqt.shop.android.theme.MyApplicationTheme

/**
 * Home page, main for app
 *
 * @param viewModel page view model
 */
@Composable
fun HomeScreen(
    navController: NavHostController,
    viewModel: HomeViewModel = hiltViewModel(),
) {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = MaterialTheme.colors.background
    ) {
        Column {
            Greeting("argument0: ${viewModel.argument0}")
            Greeting("argument1: ${viewModel.argument1}")
            Greeting("argument2: ${viewModel.argument2}")
            Greeting("argument3: ${viewModel.argument3}")
            Greeting("argument4: ${viewModel.argument4}")
            Greeting("argument5: ${viewModel.argument5}")
            Button(
                onClick = {
                    navController.navigate(
                        RouteHome.link(
                            argument0 = 1,
                            argument1 = 10,
                            argument2 = 1.0f,
                            argument3 = false,
                            argument4 = "String",
                            argument5 = RouteHome.SearchParameters("Text", listOf("1", "2")),
                        )
                    )
                },
                modifier = Modifier.fillMaxWidth(),
            ) {
                Text(
                    text = "Update route"
                )
            }
        }
    }
}

@Composable
fun Greeting(text: String) {
    Text(text = text)
}

@Preview
@Composable
fun DefaultPreview() {
    MyApplicationTheme {
        Greeting("Hello, Android!")
    }
}