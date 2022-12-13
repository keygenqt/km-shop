package com.keygenqt.shop.android.features.orderHistory.elements

import android.util.Log
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
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
import coil.compose.rememberAsyncImagePainter
import coil.request.ImageRequest
import coil.size.Size
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.OrderHistoryModel
import com.keygenqt.shop.android.extensions.priceFormat

@Composable
fun OrderHistoryBody(
    models: List<OrderHistoryModel>,
    onClickItem: (number: String) -> Unit
) {
    val scrollState = rememberScrollState()

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .verticalScroll(state = scrollState)
            .padding(16.dp),
    ) {
        models.forEachIndexed { index, orderHistoryModel ->
            if (index != 0) {
                Spacer(modifier = Modifier.size(16.dp))
            }
            OrderHistoryItem(
                model = orderHistoryModel,
                onClickItem = onClickItem
            )
        }
    }
}

@Composable
fun CombineImage(
    modifier: Modifier = Modifier,
    images: List<String>
) {
    Box(modifier = modifier) {
        images.take(4).forEach { url ->
            val painter = rememberAsyncImagePainter(url)
            Image(
                modifier = Modifier.size(50.dp).clip(CircleShape),
                contentDescription = null,
                painter = painter,
            )
        }
    }
}

@Composable
fun OrderHistoryItem(
    model: OrderHistoryModel,
    onClickItem: (key: String) -> Unit
) {

    Card(
        backgroundColor = MaterialTheme.colors.surface,
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .clickable {
                    onClickItem(model.number)
                }
                .padding(10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
            ) {
                CombineImage(
                    modifier = Modifier.clip(CircleShape).size(50.dp),
                    images = model.images
                )

                Spacer(modifier = Modifier.size(10.dp))

                Column{
                    AppText(
                        maxLines = 1,
                        text = "# ${model.number}",
                        style = MaterialTheme.typography.body1
                    )

                    Spacer(modifier = Modifier.size(6.dp))

                    AppText(
                        color = Color(0XFF707f95),
                        text = model.sum.priceFormat(),
                        style = MaterialTheme.typography.caption
                    )
                }
            }
        }
    }
}