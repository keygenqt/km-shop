package com.keygenqt.shop.android.features.home.elements

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
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
import androidx.compose.ui.unit.dp
import androidx.core.graphics.toColorInt
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppScaffold
import com.keygenqt.shop.android.routes.RouteContact
import com.keygenqt.shop.android.routes.RouteOrder

@Composable
fun AppScaffoldHome(
    navController: NavHostController,
    activeTab: Int = 0,
    onChangeTab: (Int) -> Unit,
    content: @Composable () -> Unit
) {
    AppScaffold(
        title = "My Shop",
        navigationIcon = {
            Box(
                modifier = Modifier.padding(start = 12.dp)
            ) {
                Box(
                    modifier = Modifier
                        .clip(CircleShape)
                        .background(Color("#333438".toColorInt()))
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
            IconButton(onClick = {
                navController.navigate(RouteContact.link())
            }) {
                Icon(
                    imageVector = Icons.Outlined.ContactSupport,
                    contentDescription = "Settings",
                    tint = MaterialTheme.colors.onPrimary
                )
            }
            IconButton(onClick = {
                navController.navigate(RouteOrder.link())
            }) {
                Icon(
                    imageVector = Icons.Outlined.LocalMall,
                    contentDescription = "Settings",
                    tint = MaterialTheme.colors.onPrimary
                )
            }
        },
        bottomBar = {
            BottomNavigation(
                backgroundColor = Color(0xFFE3F2FD),
                contentColor = Color(0xFF4E4E4E),
            ) {
                BottomNavigationItem(
                    selected = activeTab == 0,
                    icon = {
                        Icon(
                            imageVector = Icons.Outlined.ShoppingBasket,
                            contentDescription = "Home"
                        )
                    },
                    label = { Text("Home") },
                    onClick = {
                        onChangeTab(0)
                    }
                )
                BottomNavigationItem(
                    selected = activeTab == 1,
                    icon = {
                        Icon(
                            imageVector = Icons.Outlined.Search,
                            contentDescription = "Exploring"
                        )
                    },
                    label = { Text("Exploring") },
                    onClick = {
                        onChangeTab(1)
                    }
                )
                BottomNavigationItem(
                    selected = activeTab == 2,
                    icon = {
                        Icon(
                            imageVector = Icons.Outlined.ShoppingCart,
                            contentDescription = "Cart"
                        )
                    },
                    label = { Text("Cart") },
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