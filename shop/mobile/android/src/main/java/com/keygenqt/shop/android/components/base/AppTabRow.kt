package com.keygenqt.shop.android.components.base

import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.material.TabRowDefaults.tabIndicatorOffset
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp

@Composable
fun AppTabRow(
    modifier: Modifier = Modifier,
    tabs: List<String>,
    onChangeTab: (Int) -> Unit
) {

    var pagerActive by rememberSaveable { mutableStateOf(0) }

    TabRow(
        modifier = modifier,
        selectedTabIndex = pagerActive,
        indicator = @Composable { tabPositions ->
            TabRowDefaults.Indicator(
                height = 4.dp,
                color = MaterialTheme.colors.onPrimary,
                modifier = Modifier
                    .tabIndicatorOffset(tabPositions[pagerActive])
                    .padding(
                        start = 5.dp,
                        end = 5.dp
                    )
                    .clip(
                        RoundedCornerShape(
                            topStart = 8.dp,
                            topEnd = 8.dp,
                            bottomEnd = 0.dp,
                            bottomStart = 0.dp
                        )
                    )
            )
        },
    ) {
        tabs.forEachIndexed { index, title ->
            Tab(
                text = {
                    Text(
                        text = title,
                        color = if (pagerActive == index)
                            MaterialTheme.colors.onPrimary
                        else
                            MaterialTheme.colors.onPrimary.copy(0.7f)
                    )
                },
                selected = pagerActive == index,
                onClick = {
                    pagerActive = index
                    onChangeTab(index)
                }
            )
        }
    }
}