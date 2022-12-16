package com.keygenqt.shop.android.components.base

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.TextButton
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AddCircle
import androidx.compose.material.icons.outlined.RemoveCircle
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.base.LocalAndroidColors
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun CounterBlock(
    countCart: Int,
    modifier: Modifier = Modifier,
) {
    Row(
        modifier = modifier
            .clip(MaterialTheme.shapes.large)
            .background(LocalAndroidColors.current.bgVariant1)
            .padding(
                PaddingValues(
                    start = 8.dp,
                    top = 4.dp,
                    end = 8.dp,
                    bottom = 4.dp
                )
            ),
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        TextButton(
            enabled = countCart > 0,
            shape = CircleShape,
            onClick = { /*TODO*/ },
            modifier = Modifier.size(30.dp),
            contentPadding = PaddingValues(
                start = 0.dp,
                top = 0.dp,
                end = 0.dp,
                bottom = 0.dp
            ),
        ) {
            Icon(
                modifier = Modifier.size(22.dp),
                imageVector = Icons.Outlined.RemoveCircle,
                contentDescription = null
            )
        }

        Spacer(modifier = Modifier.size(6.dp))

        AppText(
            style = MaterialTheme.typography.body1,
            modifier = Modifier.offset(0.dp, (-0.5).dp),
            text = countCart.toString()
        )

        Spacer(modifier = Modifier.size(6.dp))

        TextButton(
            shape = CircleShape,
            onClick = { /*TODO*/ },
            modifier = Modifier.size(30.dp),
            contentPadding = PaddingValues(
                start = 0.dp,
                top = 0.dp,
                end = 0.dp,
                bottom = 0.dp
            ),
        ) {
            Icon(
                modifier = Modifier.size(22.dp),
                imageVector = Icons.Outlined.AddCircle,
                contentDescription = null
            )
        }
    }
}