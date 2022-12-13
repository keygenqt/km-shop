package com.keygenqt.shop.android.features.orderSearch.elements

import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ContentPasteSearch
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.ExperimentalTextApi
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.components.lottie.CatSneakingAnimation
import com.keygenqt.shop.android.components.texts.AppText

@Composable
@OptIn(ExperimentalTextApi::class)
fun OrderSearchBody(
    onPressSearch: (number: String) -> Unit
) {
    val colorPrimary = MaterialTheme.colors.primary
    val colorSecondary = MaterialTheme.colors.secondary

    var valueKey by remember { mutableStateOf("") }

    val brush = remember {
        Brush.linearGradient(
            colors = listOf(
                colorPrimary,
                colorSecondary
            )
        )
    }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight(),
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            AppText(stringResource(id = com.keygenqt.shop.android.R.string.order_search_subtitle))

            Spacer(modifier = Modifier.size(16.dp))

            Row(
                modifier = Modifier
            ) {
                Column(
                    modifier = Modifier.weight(1f)
                ) {
                    OutlinedTextField(
                        modifier = Modifier.fillMaxWidth(),
                        singleLine = true,
                        label = {
                            Text(
                                text = stringResource(id = com.keygenqt.shop.android.R.string.order_search_number_order),
                                color = colorPrimary
                            )
                        },
                        value = valueKey,
                        onValueChange = { valueKey = it },
                        textStyle = TextStyle(brush = brush)
                    )
                }

                Spacer(modifier = Modifier.size(16.dp))

                Column(
                    modifier = Modifier.requiredWidth(60.dp)
                ) {
                    Spacer(modifier = Modifier.size(8.dp))

                    Button(
                        enabled = valueKey.length == 36,
                        contentPadding = PaddingValues(
                            start = 4.dp,
                            top = 16.dp,
                            end = 4.dp,
                            bottom = 16.dp
                        ),
                        onClick = {
                            onPressSearch(valueKey)
                        }
                    ) {
                        Icon(
                            imageVector = Icons.Filled.ContentPasteSearch,
                            contentDescription = null,
                        )
                    }
                }
            }
        }

        CatSneakingAnimation(
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .offset(x = (-20).dp, 50.dp)
                .requiredHeight(130.dp)
                .requiredWidth(130.dp)
        )
    }
}