package com.keygenqt.shop.android.features.exploring.elements

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
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
            .clickable { onClickCategory(model.id) }
    ) {
        Column(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth()
        ) {
            AppText(text = model.name)
            Spacer(modifier = Modifier.size(4.dp))
            AppText(text = model.desc)
        }
    }
}