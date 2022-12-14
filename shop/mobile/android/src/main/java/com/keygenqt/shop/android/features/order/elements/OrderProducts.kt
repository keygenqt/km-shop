package com.keygenqt.shop.android.features.order.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Card
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.FormatListBulleted
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.OrderModel
import com.keygenqt.shop.android.extensions.priceFormat

@Composable
fun OrderProducts(
    model: OrderModel,
    onClickProduct: (id: Int) -> Unit
) {
    Card(
        backgroundColor = MaterialTheme.colors.surface,
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            Row {
                Icon(
                    contentDescription = null,
                    imageVector = Icons.Outlined.FormatListBulleted,
                    tint = MaterialTheme.colors.onSurface
                )
                Spacer(modifier = Modifier.size(10.dp))
                AppText(text = "Список товаров")
            }

            Spacer(modifier = Modifier.size(16.dp))

            model.products.forEachIndexed { index, orderProductModel ->

                if (index != 0) {
                    Spacer(modifier = Modifier.size(10.dp))
                }

                Column(
                    modifier = Modifier
                        .clip(MaterialTheme.shapes.medium)
                        .background(MaterialTheme.colors.background)
                        .fillMaxWidth()
                        .clickable {
                            onClickProduct.invoke(orderProductModel.product.id)
                        }
                        .padding(10.dp)
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        AsyncImage(
                            model = ImageRequest.Builder(LocalContext.current)
                                .data(orderProductModel.product.image1)
                                .crossfade(true)
                                .build(),
                            placeholder = painterResource(R.drawable.no_image),
                            error = painterResource(R.drawable.no_image),
                            contentDescription = "",
                            contentScale = ContentScale.Crop,
                            modifier = Modifier
                                .clip(CircleShape)
                                .size(50.dp)
                        )

                        Spacer(modifier = Modifier.size(10.dp))

                        Column {
                            AppText(
                                maxLines = 1,
                                text = orderProductModel.product.name,
                                style = MaterialTheme.typography.body1
                            )

                            Spacer(modifier = Modifier.size(6.dp))

                            AppText(
                                color = Color(0XFF707f95),
                                text = "${orderProductModel.price.priceFormat()} x ${orderProductModel.count}",
                                style = MaterialTheme.typography.caption
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.size(16.dp))

            Row {
                Spacer(modifier = Modifier.weight(1f))
                AppText(
                    color = MaterialTheme.colors.onSurface,
                    style = MaterialTheme.typography.body2,
                    text = "Общая сумма: ${model.sum.priceFormat()}"
                )
            }
        }
    }
}