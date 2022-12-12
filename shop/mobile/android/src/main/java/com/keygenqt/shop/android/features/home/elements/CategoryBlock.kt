package com.keygenqt.shop.android.features.home.elements

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.TextButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.ArrowForward
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.texts.AppText
import com.keygenqt.shop.android.data.models.CategoryModel

@Composable
fun CategoryBlock(
    category: CategoryModel,
    bg: Painter
) {
    val dark = isSystemInDarkTheme()

    Box(
        modifier = Modifier
            .clip(MaterialTheme.shapes.medium)
            .fillMaxWidth()
            .background(Color.White)
    ) {
        Image(
            modifier = Modifier
                .height(120.dp)
                .align(Alignment.BottomEnd),
            contentDescription = null,
            painter = bg,
            contentScale = ContentScale.Inside,
        )

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(8.dp)
        ) {

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp)
            ) {
                AppText(
                    color = Color(0XFF707f95),
                    text = category.name,
                    style = MaterialTheme.typography.caption
                )

                Spacer(modifier = Modifier.height(6.dp))

                AppText(
                    color = Color.Black,
                    text = category.desc,
                    style = MaterialTheme.typography.body1,
                )
            }

            Box(
                modifier = Modifier.padding(start = if (dark) 8.dp else 0.dp)
            ) {
                TextButton(
                    colors = if (dark) ButtonDefaults.textButtonColors(
                        backgroundColor = MaterialTheme.colors.surface
                    ) else ButtonDefaults.textButtonColors(),
                    onClick = {

                    }
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        AppText(
                            color = if (dark) MaterialTheme.colors.onSurface else MaterialTheme.colors.primary,
                            text = stringResource(id = R.string.category_block_btn),
                            style = MaterialTheme.typography.caption,
                        )

                        Spacer(modifier = Modifier.width(4.dp))

                        Icon(
                            modifier = Modifier.height(14.dp),
                            imageVector = Icons.Outlined.ArrowForward,
                            contentDescription = "Category",
                            tint = if (dark) MaterialTheme.colors.onSurface else MaterialTheme.colors.primary
                        )
                    }
                }
            }
        }
    }
}