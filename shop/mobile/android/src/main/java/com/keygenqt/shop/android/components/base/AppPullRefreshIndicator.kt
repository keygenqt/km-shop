package com.keygenqt.shop.android.components.base

import androidx.compose.foundation.layout.BoxScope
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.MaterialTheme
import androidx.compose.material.pullrefresh.PullRefreshIndicator
import androidx.compose.material.pullrefresh.PullRefreshState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun BoxScope.AppPullRefreshIndicator(
    state: PullRefreshState,
) {
    PullRefreshIndicator(
        modifier = Modifier.align(Alignment.TopCenter),
        refreshing = true,
        state = state,
        backgroundColor = MaterialTheme.colors.onPrimary,
        contentColor = MaterialTheme.colors.primary
    )
}