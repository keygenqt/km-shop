package com.keygenqt.shop.android.features.home.elements

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.material.pullrefresh.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.base.AppPullRefreshIndicator
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CategoryModel

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun HomeBody(
    loading: Boolean,
    onRefresh: () -> Unit,
    categories: List<CategoryModel>?
) {

    val scrollState = rememberScrollState()
    val refreshState = rememberPullRefreshState(
        refreshing = loading,
        onRefresh = onRefresh
    )

    Box(Modifier.pullRefresh(refreshState)) {

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .fillMaxHeight()
                .verticalScroll(scrollState)
                .padding(16.dp),
        ) {
            InfoBlock()

            Spacer(modifier = Modifier.height(16.dp))

            Card(
                backgroundColor = MaterialTheme.colors.surface,
                modifier = Modifier
                    .fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(8.dp)
                ) {

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Box(
                            modifier = Modifier.padding(start = 10.dp)
                        ) {
                            AppText(
                                text = stringResource(id = R.string.category_block_title),
                                style = MaterialTheme.typography.h6,
                            )
                        }

                        TextButton(onClick = {

                        }) {
                            Text(
                                color = MaterialTheme.colors.onSurface,
                                text = stringResource(id = R.string.category_block_title_btn)
                            )
                        }
                    }

                    Column(
                        modifier = Modifier.padding(8.dp)
                    ) {
                        categories?.take(3)?.forEachIndexed { index, model ->
                            if (index != 0) {
                                Spacer(modifier = Modifier.height(16.dp))
                            }
                            CategoryBlock(
                                category = model,
                                bg = painterResource(
                                    id = when (index) {
                                        0 -> R.drawable.cat_bg_1
                                        1 -> R.drawable.cat_bg_3
                                        2 -> R.drawable.cat_bg_5
                                        else -> R.drawable.cat_bg_2
                                    }
                                )
                            )
                        }
                    }
                }
            }
        }

        AppPullRefreshIndicator(
            state = refreshState,
        )
    }
}