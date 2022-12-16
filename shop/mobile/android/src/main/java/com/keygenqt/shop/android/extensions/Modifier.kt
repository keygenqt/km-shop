package com.keygenqt.shop.android.extensions

import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.material.BottomSheetScaffold
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.layout.positionInRoot
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/**
 * Disable swipe content [BottomSheetScaffold]
 */
fun Modifier.swipeInterception(): Modifier =
    pointerInput(Unit) { detectDragGestures { _, _ -> } }


fun Modifier.positionedBottomSheet(
    change: (position: Dp) -> Unit
): Modifier = composed {
    val density = LocalDensity.current
    val configuration = LocalConfiguration.current
    onGloballyPositioned { coordinates ->
        val screenHeight = configuration.screenHeightDp.dp
        val position = with(density) { coordinates.positionInRoot().y.toDp() }
        change.invoke(screenHeight - position)
    }
}