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
package com.keygenqt.shop.android.features.home.elements

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppScaffold
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.routes.RouteContact
import com.keygenqt.shop.android.routes.RouteOrderSearch

@Composable
fun AppScaffoldHome(
    cartCount: Int,
    checkoutSate: Boolean,
    navController: NavHostController,
    activeTab: Int = 0,
    onChangeTab: (Int) -> Unit,
    toCreateOrder: () -> Unit,
    content: @Composable () -> Unit
) {
    AppScaffold(
        title = stringResource(id = R.string.app_name),
        navigationIcon = {
            Box(
                modifier = Modifier.padding(start = 12.dp)
            ) {
                Box(
                    modifier = Modifier
                        .clip(CircleShape)
                        .background(Color(0xFF333438))
                        .padding(4.dp)
                ) {
                    Image(
                        modifier = Modifier.size(24.dp),
                        contentDescription = null,
                        painter = painterResource(id = R.drawable.launcher),
                    )
                }
            }
        },
        actions = {
            when (activeTab) {
                0, 1 -> {
                    IconButton(onClick = {
                        navController.navigate(RouteContact.link())
                    }) {
                        Icon(
                            imageVector = Icons.Outlined.ContactSupport,
                            contentDescription = null,
                            tint = MaterialTheme.colors.onPrimary
                        )
                    }
                    IconButton(onClick = {
                        navController.navigate(RouteOrderSearch.link())
                    }) {
                        Icon(
                            imageVector = Icons.Outlined.LocalMall,
                            contentDescription = null,
                            tint = MaterialTheme.colors.onPrimary
                        )
                    }
                }
                2 -> {
                    if (checkoutSate) {
                        TextButton(
                            colors = ButtonDefaults.textButtonColors(
                                contentColor = Color.White
                            ),
                            onClick = toCreateOrder
                        ) {
                            AppText(
                                color = MaterialTheme.colors.onPrimary,
                                text = stringResource(id = R.string.home_btn_order)
                            )
                        }
                    }
                }
            }
        },
        bottomBar = {
            BottomNavigation(
                modifier = Modifier.height(60.dp),
                backgroundColor = MaterialTheme.colors.primary,
                contentColor = MaterialTheme.colors.onPrimary,
            ) {
                BottomNavigationItem(
                    selected = activeTab == 0,
                    icon = {
                        Icon(
                            imageVector = Icons.Outlined.ShoppingBasket,
                            contentDescription = null
                        )
                    },
                    label = { Text(stringResource(id = R.string.tab_home)) },
                    onClick = {
                        onChangeTab(0)
                    }
                )
                BottomNavigationItem(
                    selected = activeTab == 1,
                    icon = {
                        Icon(
                            imageVector = Icons.Outlined.Search,
                            contentDescription = null
                        )
                    },
                    label = { Text(stringResource(id = R.string.tab_exploring)) },
                    onClick = {
                        onChangeTab(1)
                    }
                )
                BottomNavigationItem(
                    selected = activeTab == 2,
                    icon = {
                        BadgedBox(badge = {
                            if (cartCount > 0) Badge(backgroundColor = MaterialTheme.colors.secondary) {
                                Text(cartCount.toString())
                            }
                        }) {
                            Icon(
                                imageVector = Icons.Outlined.ShoppingCart,
                                contentDescription = null
                            )
                        }
                    },
                    label = { Text(stringResource(id = R.string.tab_cart)) },
                    onClick = {
                        onChangeTab(2)
                    }
                )
            }
        }
    ) {
        content.invoke()
    }
}
