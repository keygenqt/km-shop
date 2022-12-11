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
package com.keygenqt.shop.android.features.home

import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.routes.RouteHome

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
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight()
            .padding(16.dp),

        ) {

        Text(text = "argument0: ${viewModel.argument0}")
        Text(text = "argument1: ${viewModel.argument1}")
        Text(text = "argument2: ${viewModel.argument2}")
        Text(text = "argument3: ${viewModel.argument3}")
        Text(text = "argument4: ${viewModel.argument4}")
        Text(text = "argument5: ${viewModel.argument5}")

        Spacer(modifier = Modifier.padding(10.dp))

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
            Text(text = "Update route")
        }
    }
}