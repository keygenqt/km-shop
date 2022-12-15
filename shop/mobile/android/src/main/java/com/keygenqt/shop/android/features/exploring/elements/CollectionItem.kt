package com.keygenqt.shop.android.features.exploring.elements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Card
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.GradientColors
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CollectionModel
import com.keygenqt.shop.android.extensions.iconsByString

@Composable
fun CollectionItem(
    model: CollectionModel,
    onClickCollection: (Int) -> Unit
) {
    Box {
        Box(
            modifier = Modifier.padding(start = 30.dp)
        ) {
            Card(
                elevation = 0.dp,
                backgroundColor = LocalAndroidColors.current.bgVariant3,
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier
                        .clickable { onClickCollection(model.id) }
                        .fillMaxWidth()
                        .padding(start = 43.dp, end = 16.dp, top = 16.dp, bottom = 16.dp)
                ) {
                    AppText(
                        modifier = Modifier.fillMaxWidth().offset(0.dp, (-3).dp),
                        style = MaterialTheme.typography.h6,
                        text = model.name
                    )
                    Spacer(modifier = Modifier.size(4.dp))
                    AppText(
                        color = LocalAndroidColors.current.textCaption,
                        style = MaterialTheme.typography.caption,
                        text = model.desc
                    )
                }
            }
        }
        Box(
            modifier = Modifier
                .size(60.dp)
                .align(Alignment.CenterStart)
                .shadow(
                    elevation = 4.dp,
                    shape = CircleShape,
                    clip = true
                )
                .background(GradientColors.Anamnisar)
        ) {
            Icon(
                contentDescription = null,
                modifier = Modifier
                    .size(33.dp)
                    .align(Alignment.Center),
                imageVector = iconsByString(model.icon),
                tint = MaterialTheme.colors.background
            )
        }
    }
}