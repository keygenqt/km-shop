package com.keygenqt.shop.android.features.exploring.elements

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.Card
import androidx.compose.material.Divider
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CategoryModel

@Composable
fun CategoryItem(
    model: CategoryModel,
    onClickCategory: (Int) -> Unit
) {
    Card(
        backgroundColor = MaterialTheme.colors.surface,
        modifier = Modifier
            .fillMaxWidth()
    ) {
        Column(
            modifier = Modifier
                .clickable { onClickCategory(model.id) }
                .fillMaxWidth()
        ) {

            AsyncImage(
                model = ImageRequest.Builder(LocalContext.current)
                    .data(model.image)
                    .crossfade(true)
                    .build(),
                placeholder = painterResource(R.drawable.no_image),
                error = painterResource(R.drawable.no_image),
                contentDescription = "",
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(150.dp)
            )

            Column(
                modifier = Modifier
                    .padding(horizontal = 16.dp)
                    .padding(bottom = 16.dp)
            ) {
                Column {

                    Spacer(modifier = Modifier.size(10.dp))

                    AppText(
                        color = Color(0XFF707f95),
                        modifier = Modifier.fillMaxWidth(),
                        style = MaterialTheme.typography.caption,
                        text = model.name
                    )

                    Spacer(modifier = Modifier.size(4.dp))

                    AppText(
                        style = MaterialTheme.typography.h6,
                        text = model.desc
                    )
                }

                Spacer(modifier = Modifier.size(10.dp))
                Divider()
                Spacer(modifier = Modifier.size(10.dp))

                Box(
                    modifier = Modifier.fillMaxWidth()
                ) {
                    AppText(
                        style = MaterialTheme.typography.caption,
                        text = "Найдено: 11"
                    )
                }
            }
        }
    }
}