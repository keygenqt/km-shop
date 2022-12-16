/*
 * Copyright 2022 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.keygenqt.shop.android.features.product.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.material.pullrefresh.pullRefresh
import androidx.compose.material.pullrefresh.rememberPullRefreshState
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.decode.DataSource
import coil.request.ImageRequest
import com.google.accompanist.flowlayout.FlowRow
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.base.AppPullRefreshIndicator
import com.keygenqt.shop.android.components.base.CounterBlock
import com.keygenqt.shop.android.components.base.PriceBlockLarge
import com.keygenqt.shop.android.components.lottie.LoadingAnimation
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.ProductModel
import com.keygenqt.shop.android.extensions.iconsByString
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun ProductBody(
    loading: Boolean,
    countCart: Int,
    model: ProductModel,
    onRefresh: () -> Unit,
    onChangeCart: (Int, Int) -> Unit,
) {
    val scope = rememberCoroutineScope()
    val scrollState = rememberScrollState()
    val refreshState = rememberPullRefreshState(
        refreshing = loading,
        onRefresh = onRefresh
    )

    var loadingImage by remember { mutableStateOf(true) }
    var imageUrl by remember { mutableStateOf(model.image1) }

    Box(Modifier.pullRefresh(refreshState)) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .verticalScroll(state = scrollState)
                .padding(16.dp),
        ) {

            Column {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(230.dp)
                        .clip(MaterialTheme.shapes.medium)
                ) {
                    AsyncImage(
                        model = ImageRequest.Builder(LocalContext.current)
                            .data(imageUrl)
                            .crossfade(true)
                            .build(),
                        placeholder = painterResource(R.drawable.no_image),
                        error = painterResource(R.drawable.no_image),
                        contentDescription = null,
                        contentScale = ContentScale.Crop,
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(230.dp)
                            .clip(MaterialTheme.shapes.medium),
                        onLoading = {
                            loadingImage = true
                        },
                        onSuccess = { state ->
                            scope.launch {
                                if (state.result.dataSource != DataSource.MEMORY_CACHE) {
                                    delay(100)
                                }
                                loadingImage = false
                            }
                        },
                        onError = {
                            scope.launch {
                                delay(100)
                                loadingImage = false
                            }
                        }
                    )

                    if (loadingImage) {
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .background(LocalAndroidColors.current.bgVariant1)
                        ) {
                            LoadingAnimation(
                                modifier = Modifier.align(Alignment.Center)
                            )
                        }
                    }
                }

                if (model.image2 != null || model.image3 != null) {
                    Column {
                        Spacer(modifier = Modifier.size(10.dp))

                        Row {
                            ImageButton(
                                active = model.image1 == imageUrl,
                                url = model.image1,
                                onClick = { imageUrl = it }
                            )

                            Spacer(modifier = Modifier.size(6.dp))

                            model.image2?.let {
                                ImageButton(
                                    active = model.image2 == imageUrl,
                                    url = model.image2,
                                    onClick = { imageUrl = it }
                                )
                            }

                            Spacer(modifier = Modifier.size(6.dp))

                            model.image3?.let {
                                ImageButton(
                                    active = model.image3 == imageUrl,
                                    url = model.image3,
                                    onClick = { imageUrl = it }
                                )
                            }
                        }
                    }
                }
            }

            Column {
                Spacer(modifier = Modifier.size(16.dp))

                PriceBlockLarge(
                    price = model.price
                )

                Spacer(modifier = Modifier.size(16.dp))

                Column {
                    AppText(
                        modifier = Modifier.offset(0.dp, (-5).dp),
                        style = MaterialTheme.typography.h6,
                        text = stringResource(id = R.string.product_description)
                    )
                    Spacer(modifier = Modifier.size(1.dp))
                    AppText(text = model.description)
                }

                Spacer(modifier = Modifier.size(16.dp))

                Row(
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    CounterBlock(
                        countCart = countCart,
                        onClickPlus = {
                            onChangeCart.invoke(model.id, countCart + 1)
                        },
                        onClickMinus = {
                            onChangeCart.invoke(model.id, countCart - 1)
                        }
                    )

                    Spacer(modifier = Modifier.size(10.dp))

                    Button(
                        modifier = Modifier.weight(1f),
                        shape = MaterialTheme.shapes.large,
                        colors = ButtonDefaults.buttonColors(
                            backgroundColor = Color.Black,
                            contentColor = Color.White,
                        ),
                        contentPadding = PaddingValues(
                            start = 18.dp,
                            top = 10.dp,
                            end = 18.dp,
                            bottom = 10.dp
                        ),
                        onClick = {
                            if (countCart > 0) {
                                onChangeCart.invoke(model.id, 0)
                            } else {
                                onChangeCart.invoke(model.id, 1)
                            }
                        },
                    ) {
                        Row {
                            Icon(
                                modifier = Modifier.size(18.dp),
                                imageVector = if (countCart > 0)
                                    Icons.Outlined.RemoveShoppingCart
                                else
                                    Icons.Outlined.AddShoppingCart,
                                contentDescription = null
                            )
                            Spacer(modifier = Modifier.size(10.dp))
                            Text(
                                modifier = Modifier.offset(0.dp, (-2).dp),
                                text = if (countCart > 0)
                                    stringResource(id = R.string.product_btn_remove)
                                else
                                    stringResource(id = R.string.product_btn_add)
                            )
                        }
                    }
                }
            }

            if (!model.collections.isNullOrEmpty()) {
                Column {
                    Spacer(modifier = Modifier.size(16.dp))
                    Divider()
                    Spacer(modifier = Modifier.size(16.dp))

                    FlowRow(
                        mainAxisSpacing = 6.dp,
                        crossAxisSpacing = 6.dp
                    ) {
                        model.collections.forEach {
                            CollectionItem(
                                icon = iconsByString(it.icon),
                                title = it.name
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.size(16.dp))
            Divider()
            Spacer(modifier = Modifier.size(16.dp))

            Column {
                Row {
                    ProductInfoBlock(
                        modifier = Modifier.weight(1f),
                        icon = Icons.Outlined.LocalShipping,
                        color = LocalAndroidColors.current.bgVariant1,
                        title = stringResource(id = R.string.product_block_1_title),
                        description = stringResource(id = R.string.product_block_1_text)
                    )

                    Spacer(modifier = Modifier.size(16.dp))

                    ProductInfoBlock(
                        modifier = Modifier.weight(1f),
                        icon = Icons.Outlined.WifiProtectedSetup,
                        color = LocalAndroidColors.current.bgVariant2,
                        title = stringResource(id = R.string.product_block_2_title),
                        description = stringResource(id = R.string.product_block_2_text)
                    )
                }

                Spacer(modifier = Modifier.size(16.dp))

                Row {
                    ProductInfoBlock(
                        modifier = Modifier.weight(1f),
                        icon = Icons.Outlined.Language,
                        color = LocalAndroidColors.current.bgVariant3,
                        title = stringResource(id = R.string.product_block_3_title),
                        description = stringResource(id = R.string.product_block_3_text)
                    )

                    Spacer(modifier = Modifier.size(16.dp))

                    ProductInfoBlock(
                        modifier = Modifier.weight(1f),
                        icon = Icons.Outlined.CurrencyExchange,
                        color = LocalAndroidColors.current.bgVariant4,
                        title = stringResource(id = R.string.product_block_4_title),
                        description = stringResource(id = R.string.product_block_4_text)
                    )
                }
            }
        }

        AppPullRefreshIndicator(
            state = refreshState,
        )
    }
}
