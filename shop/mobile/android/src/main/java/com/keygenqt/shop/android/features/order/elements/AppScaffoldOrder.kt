package com.keygenqt.shop.android.features.order.elements

import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.components.base.AppScaffold

@Composable
fun AppScaffoldOrder(
    navController: NavHostController,
    content: @Composable () -> Unit
) {
    AppScaffold(
        title = "Orders",
        navigationIcon = {
            IconButton(onClick = {
                navController.popBackStack()
            }) {
                Icon(
                    imageVector = Icons.Filled.ArrowBack,
                    contentDescription = "Back",
                )
            }
        }
    ) {
        content.invoke()
    }
}