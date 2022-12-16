package com.keygenqt.shop.android.base

import android.content.Context
import androidx.compose.ui.graphics.Color
import com.keygenqt.shop.android.R

@Suppress("unused")
class AndroidColors(context: Context) {
    // bg
    val bgSplash by lazy { Color(context.getColor(R.color.bg_splash)) }
    val bgPage by lazy { Color(context.getColor(R.color.bg_page)) }
    val bgVariant1 by lazy { Color(context.getColor(R.color.bg_variant_1)) }
    val bgVariant2 by lazy { Color(context.getColor(R.color.bg_variant_2)) }
    val bgVariant3 by lazy { Color(context.getColor(R.color.bg_variant_3)) }
    val bgVariant4 by lazy { Color(context.getColor(R.color.bg_variant_4)) }
    val bgVariant5 by lazy { Color(context.getColor(R.color.bg_variant_5)) }
    // text
    val textCaption by lazy { Color(context.getColor(R.color.text_caption)) }
}