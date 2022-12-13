package com.keygenqt.shop.android.extensions

import java.util.*

fun Double.priceFormat() = "₽ %,.2f".format(Locale.ENGLISH, this)