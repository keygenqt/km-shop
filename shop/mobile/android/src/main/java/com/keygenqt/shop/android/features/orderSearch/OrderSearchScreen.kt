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
package com.keygenqt.shop.android.features.orderSearch

import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ContentPasteSearch
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.ExperimentalTextApi
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.lottie.CatSneakingAnimation
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.features.orderSearch.elements.AppScaffoldOrderSearch
import com.keygenqt.shop.android.routes.RouteOrder

/**
 * Home page, main for app
 *
 * @param viewModel page view model
 */
@OptIn(ExperimentalTextApi::class)
@Composable
fun OrderSearchScreen(
    navController: NavHostController,
    viewModel: OrderSearchViewModel = hiltViewModel(),
) {
    val colorPrimary = MaterialTheme.colors.primary
    val colorSecondary = MaterialTheme.colors.secondary

    var valueKey by remember { mutableStateOf("") }

    val brush = remember {
        Brush.linearGradient(
            colors = listOf(
                colorPrimary,
                colorSecondary
            )
        )
    }

    AppScaffoldOrderSearch(navController = navController) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .fillMaxHeight(),
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
            ) {
                AppText(stringResource(id = R.string.order_search_subtitle))

                Spacer(modifier = Modifier.size(16.dp))

                Row(
                    modifier = Modifier
                ) {
                    Column(
                        modifier = Modifier.weight(1f)
                    ) {
                        OutlinedTextField(
                            modifier = Modifier.fillMaxWidth(),
                            singleLine = true,
                            label = {
                                Text(
                                    text = stringResource(id = R.string.order_search_number_order),
                                    color = colorPrimary
                                )
                            },
                            value = valueKey,
                            onValueChange = { valueKey = it },
                            textStyle = TextStyle(brush = brush)
                        )
                    }

                    Spacer(modifier = Modifier.size(16.dp))

                    Column(
                        modifier = Modifier.requiredWidth(60.dp)
                    ) {
                        Spacer(modifier = Modifier.size(8.dp))

                        Button(
                            enabled = valueKey.length == 36,
                            contentPadding = PaddingValues(
                                start = 4.dp,
                                top = 16.dp,
                                end = 4.dp,
                                bottom = 16.dp
                            ),
                            onClick = {
                                navController.navigate(RouteOrder.link(
                                    orderKey = valueKey
                                ))
                            }
                        ) {
                            Icon(
                                imageVector = Icons.Filled.ContentPasteSearch,
                                contentDescription = null,
                            )
                        }
                    }
                }

            }

            CatSneakingAnimation(
                modifier = Modifier
                    .align(Alignment.BottomEnd)
                    .offset(x = (-20).dp, 50.dp)
                    .requiredHeight(130.dp)
                    .requiredWidth(130.dp)
            )
        }
    }
}