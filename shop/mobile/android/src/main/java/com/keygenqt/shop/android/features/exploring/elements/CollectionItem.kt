package com.keygenqt.shop.android.features.exploring.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Card
import androidx.compose.material.Divider
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CollectionModel
import com.keygenqt.shop.android.extensions.iconsByString

@Composable
fun CollectionItem(
    model: CollectionModel,
    onClickCollection: (Int) -> Unit
) {
    Card(
        backgroundColor = MaterialTheme.colors.surface,
        modifier = Modifier
            .fillMaxWidth()
    ) {
        Column(
            modifier = Modifier
                .clickable { onClickCollection(model.id) }
                .padding(16.dp)
                .fillMaxWidth()
        ) {
            Row {
                Box(
                    modifier = Modifier
                        .size(50.dp)
                        .clip(CircleShape)
                        .background(MaterialTheme.colors.background)
                ) {
                    Icon(
                        contentDescription = null,
                        modifier = Modifier
                            .size(30.dp)
                            .align(Alignment.Center),
                        imageVector = iconsByString(model.icon),
                        tint = MaterialTheme.colors.primary
                    )
                }

                Spacer(modifier = Modifier.size(16.dp))

                Column {
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
            }

            Spacer(modifier = Modifier.size(16.dp))
            Divider()
            Spacer(modifier = Modifier.size(16.dp))

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