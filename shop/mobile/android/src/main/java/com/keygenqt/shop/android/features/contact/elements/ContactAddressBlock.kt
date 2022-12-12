package com.keygenqt.shop.android.features.contact.elements

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.keygenqt.shop.android.R
import com.keygenqt.shop.android.components.texts.AppText

@Composable
fun ContactAddressBlock() {
    Card(
        backgroundColor = MaterialTheme.colors.secondaryVariant,
        modifier = Modifier
            .fillMaxWidth()
    ) {
        Column(
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(16.dp)
        ) {

            Box(
                modifier = Modifier
                    .size(75.dp)
                    .clip(CircleShape)
                    .background(Color.White.copy(alpha = 0.7f))
            ) {
                Image(
                    modifier = Modifier
                        .requiredSize(60.dp)
                        .align(Alignment.Center),
                    contentDescription = null,
                    painter = painterResource(id = R.drawable.contact_address),
                )
            }

            Spacer(modifier = Modifier.height(10.dp))

            AppText(
                textAlign = TextAlign.Center,
                text = "Доставка осуществляется по всей России, а мы находимся в городе Волгодонск."
            )
        }
    }
}