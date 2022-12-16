package com.keygenqt.shop.android.features.product.elements

import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppScaffold

@Composable
fun AppScaffoldProduct(
    title: String?,
    navController: NavHostController,
    content: @Composable () -> Unit
) {
    AppScaffold(
        title = title ?: stringResource(id = R.string.product_title),
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