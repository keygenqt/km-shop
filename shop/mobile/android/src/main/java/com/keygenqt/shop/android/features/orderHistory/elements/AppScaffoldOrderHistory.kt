package com.keygenqt.shop.android.features.orderHistory.elements

import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.outlined.History
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppScaffold
import com.keygenqt.shop.android.components.lottie.LoadingAnimation

@Composable
fun AppScaffoldOrderHistory(
    loading: Boolean,
    navController: NavHostController,
    content: @Composable () -> Unit
) {
    AppScaffold(
        title = stringResource(id = R.string.order_history_title),
        navigationIcon = {
            IconButton(onClick = {
                navController.popBackStack()
            }) {
                Icon(
                    imageVector = Icons.Filled.ArrowBack,
                    contentDescription = "Back",
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