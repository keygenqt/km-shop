package com.keygenqt.shop.android.extensions

import androidx.compose.foundation.lazy.LazyListState

fun LazyListState.isScrolledToTheEnd() =
    layoutInfo.visibleItemsInfo
        .lastOrNull()
        ?.index == layoutInfo.totalItemsCount - 1