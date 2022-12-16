package com.keygenqt.shop.android.features.products.elements

import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.outlined.Sort
import androidx.compose.material.icons.outlined.TrendingDown
import androidx.compose.material.icons.outlined.TrendingUp
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppScaffold
import com.keygenqt.shop.data.requests.OrderProduct

@Composable
fun AppScaffoldProducts(
    enabled: Boolean,
    sort: OrderProduct,
    navController: NavHostController,
    onToggleSort: () -> Unit,
    content: @Composable () -> Unit,
) {
    AppScaffold(
        title = stringResource(id = R.string.products_title),
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
            if (enabled) {
                IconButton(onClick = onToggleSort) {
                    Icon(
                        imageVector = when (sort) {
                            OrderProduct.NEWEST -> Icons.Outlined.Sort
                            OrderProduct.LOW -> Icons.Outlined.TrendingDown
                            OrderProduct.HEIGHT -> Icons.Outlined.TrendingUp
                        },
                        contentDescription = null,
                        tint = MaterialTheme.colors.onPrimary
                    )
                }
            }
        },
    ) {
        content.invoke()
    }
}