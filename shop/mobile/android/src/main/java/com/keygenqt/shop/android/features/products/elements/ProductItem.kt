package com.keygenqt.shop.android.features.products.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Divider
import androidx.compose.material.Icon
import androidx.compose.material.IconToggleButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AddShoppingCart
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.ProductModel
import com.keygenqt.shop.android.extensions.priceFormat

@Composable
fun ProductItem(
    index: Int,
    model: ProductModel,
    onClickProduct: (Int) -> Unit
) {
    if (index != 0) {
        Spacer(modifier = Modifier.size(16.dp))
    }

    Column(
        modifier = Modifier
            .shadow(
                elevation = 1.dp,
                shape = MaterialTheme.shapes.medium,
                clip = true
            )
            .background(MaterialTheme.colors.surface)
            .fillMaxWidth()
            .clickable { onClickProduct.invoke(model.id) }
            .padding(10.dp)
    ) {
        Column {
            Row(
                verticalAlignment = Alignment.CenterVertically
            ) {

                Box(
                    modifier = Modifier.fillMaxHeight()
                ) {
                    AsyncImage(
                        model = ImageRequest.Builder(LocalContext.current)
                            .data(model.image1)
                            .crossfade(true)
                            .build(),
                        placeholder = painterResource(R.drawable.no_image),
                        error = painterResource(R.drawable.no_image),
                        contentDescription = "",
                        contentScale = ContentScale.Crop,
                        modifier = Modifier
                            .clip(CircleShape)
                            .size(60.dp)
                            .align(Alignment.TopCenter)
                    )
                }

                Spacer(modifier = Modifier.size(10.dp))

                Column {
                    AppText(
                        maxLines = 1,
                        text = model.name,
                        style = MaterialTheme.typography.h6
                    )

                    Spacer(modifier = Modifier.size(6.dp))

                    AppText(
                        text = model.description,
                        color = LocalAndroidColors.current.textCaption,
                        style = MaterialTheme.typography.caption
                    )
                }
            }

            Spacer(modifier = Modifier.size(10.dp))
            Divider()
            Spacer(modifier = Modifier.size(10.dp))

            Row {
                Box(
                    modifier = Modifier
                        .border(width = 1.dp, color = Color(0XFF22C55E), shape = CircleShape)
                        .padding(vertical = 5.dp, horizontal = 10.dp)
                ) {
                    AppText(
                        color = Color(0XFF22C55E),
                        style = MaterialTheme.typography.caption,
                        text = model.price.priceFormat(),
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                }

                Spacer(modifier = Modifier.weight(1f))

                IconToggleButton(
                    modifier = Modifier
                        .border(
                            width = 1.dp,
                            color = MaterialTheme.colors.secondary,
                            shape = CircleShape
                        )
                        .size(28.dp),
                    checked = true,
                    onCheckedChange = {

                    }
                ) {
                    Icon(
                        contentDescription = null,
                        modifier = Modifier.size(14.dp),
                        imageVector = Icons.Outlined.AddShoppingCart,
                        tint = MaterialTheme.colors.secondary
                    )
                }
            }
        }
    }
}