package com.keygenqt.shop.android.features.products.elements

import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.outlined.FilterList
import androidx.compose.material.icons.outlined.Sort
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.navigation.NavHostController
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppScaffold

@Composable
fun AppScaffoldProducts(
    enabled: Boolean,
    navController: NavHostController,
    onShowFilter: () -> Unit,
    onShowSearch: () -> Unit,
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
                IconButton(onClick = onShowFilter) {
                    Icon(
                        imageVector = Icons.Outlined.FilterList,
                        contentDescription = null,
                        tint = MaterialTheme.colors.onPrimary
                    )
                }
                IconButton(onClick = onShowSearch) {
                    Icon(
                        imageVector = Icons.Outlined.Sort,
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