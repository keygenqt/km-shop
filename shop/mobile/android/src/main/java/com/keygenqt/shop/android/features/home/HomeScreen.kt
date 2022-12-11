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

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CategoryModel

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
    val scrollState = rememberScrollState()

    val categories by viewModel.categories.collectAsState(false)

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight()
            .padding(16.dp)
            .verticalScroll(scrollState),
    ) {
        InfoBlock()

        Spacer(modifier = Modifier.height(10.dp))

        if (categories != false) {
            (categories as List<CategoryModel>).forEach { model ->
                AppText(text = model.name)
            }
        }
    }
}

@Composable
fun InfoBlock() {
    Card(
        backgroundColor = Color(0xFFF7F0EA),
        modifier = Modifier
            .fillMaxWidth()
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(start = 16.dp, end = 16.dp, top = 16.dp)
        ) {
            Image(
                modifier = Modifier
                    .size(120.dp)
                    .align(Alignment.BottomEnd),
                contentDescription = null,
                painter = painterResource(id = R.drawable.girl),
            )

            Column(
                modifier = Modifier.fillMaxHeight()
            ) {
                AppText(
                    text = "В этом сезоне найди лучшее \uD83D\uDD25",
                    style = MaterialTheme.typography.subtitle2
                )

                Spacer(modifier = Modifier.height(10.dp))

                AppText(
                    text = "Коллекции для\nвашего стиля",
                    style = MaterialTheme.typography.h5,
                )

                Spacer(modifier = Modifier.height(12.dp))

                Button(
                    colors = ButtonDefaults.buttonColors(
                        backgroundColor = Color(0xFF333438),
                        contentColor = Color.White,
                    ),
                    onClick = {

                    },
                ) {
                    Text(text = "Начните поиск")
                }

                Spacer(modifier = Modifier.height(16.dp))
            }
        }
    }
}