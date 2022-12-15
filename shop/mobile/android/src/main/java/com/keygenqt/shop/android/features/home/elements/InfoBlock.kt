package com.keygenqt.shop.android.features.home.elements

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun InfoBlock() {
    Card(
        backgroundColor = LocalAndroidColors.current.bgVariant2,
        modifier = Modifier
            .fillMaxWidth()
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(start = 16.dp, end = 16.dp, top = 16.dp)
        ) {
            Image(
                modifier = Modifier
                    .size(120.dp)
                    .align(Alignment.BottomEnd),
                contentDescription = null,
                painter = painterResource(id = R.drawable.girl),
            )

            Column(
                modifier = Modifier.fillMaxHeight()
            ) {
                AppText(
                    text = stringResource(id = R.string.info_block_title),
                    style = MaterialTheme.typography.subtitle2
                )

                Spacer(modifier = Modifier.height(10.dp))

                AppText(
                    text = stringResource(id = R.string.info_block_subtitle),
                    style = MaterialTheme.typography.h5,
                )

                Spacer(modifier = Modifier.height(12.dp))

                Button(
                    colors = ButtonDefaults.buttonColors(
                        backgroundColor = Color.Black,
                        contentColor = Color.White,
                    ),
                    onClick = {

                    },
                ) {
                    Text(text = stringResource(id = R.string.info_block_btn))
                }

                Spacer(modifier = Modifier.height(16.dp))
            }
        }
    }
}