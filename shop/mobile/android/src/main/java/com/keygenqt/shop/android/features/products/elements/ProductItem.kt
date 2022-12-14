package com.keygenqt.shop.android.features.products.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
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
import com.keygenqt.shop.android.data.models.ProductModel

@Composable
fun ProductItem(
    index: Int,
    model: ProductModel,
    onClickProduct: (Int) -> Unit
) {
    if (index != 0) {
        Spacer(modifier = Modifier.size(10.dp))
    }

    Column(
        modifier = Modifier
            .clip(MaterialTheme.shapes.medium)
            .background(MaterialTheme.colors.surface)
            .fillMaxWidth()
            .clickable {
                onClickProduct.invoke(model.id)
            }
            .padding(10.dp)
    ) {
        Row {
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
                    .size(50.dp)
            )

            Spacer(modifier = Modifier.size(10.dp))

            Column {
                AppText(
                    maxLines = 1,
                    text = model.name,
                    style = MaterialTheme.typography.body1
                )

                Spacer(modifier = Modifier.size(6.dp))

                AppText(
                    color = Color(0XFF707f95),
                    text = model.description,
                    style = MaterialTheme.typography.caption
                )
            }
        }
    }
}