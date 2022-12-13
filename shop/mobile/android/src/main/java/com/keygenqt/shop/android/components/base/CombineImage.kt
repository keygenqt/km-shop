package com.keygenqt.shop.android.components.base

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import coil.compose.AsyncImagePainter
import coil.compose.rememberAsyncImagePainter
import com.keygenqt.shop.android.R

@Composable
fun CombineImage(
    modifier: Modifier = Modifier,
    images: List<String>,
    placeholder: Painter = painterResource(R.drawable.no_image),
) {
    val imagesTake = images.take(4)

    val painter1 = rememberAsyncImagePainter(imagesTake.getOrNull(0))
    val painter2 = rememberAsyncImagePainter(imagesTake.getOrNull(1))
    val painter3 = rememberAsyncImagePainter(imagesTake.getOrNull(2))
    val painter4 = rememberAsyncImagePainter(imagesTake.getOrNull(3))

    val painters = listOf(painter1, painter2, painter3, painter4)

    val placeholderImage: @Composable () -> Unit = {
        Image(
            contentDescription = null,
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.Crop,
            painter = placeholder,
        )
    }

    Box(modifier = modifier) {
        if (imagesTake.isNotEmpty()) {
            (imagesTake.indices).forEach { index ->
                Image(
                    painter = painters[index],
                    contentScale = ContentScale.Crop,
                    contentDescription = null,
                    modifier = Modifier.then(
                        when (imagesTake.size) {
                            1 -> Modifier.fillMaxSize()
                            2 -> Modifier
                                .fillMaxHeight()
                                .fillMaxWidth(0.47f)
                                .align(
                                    when (index) {
                                        0 -> Alignment.TopStart
                                        else -> Alignment.BottomEnd
                                    }
                                )
                            3 -> Modifier
                                .fillMaxHeight(if (index == 2) 1f else 0.47f)
                                .fillMaxWidth(0.47f)
                                .align(
                                    when (index) {
                                        0 -> Alignment.TopStart
                                        1 -> Alignment.BottomStart
                                        else -> Alignment.TopEnd
                                    }
                                )
                            else -> Modifier
                                .fillMaxSize(0.47f)
                                .align(
                                    when (index) {
                                        0 -> Alignment.TopStart
                                        1 -> Alignment.BottomStart
                                        2 -> Alignment.TopEnd
                                        else -> Alignment.BottomEnd
                                    }
                                )
                        }
                    )
                )
            }
        }

        when (imagesTake.size) {
            1 -> if (painter1.state !is AsyncImagePainter.State.Success) {
                placeholderImage.invoke()
            }
            2 -> if (painter1.state !is AsyncImagePainter.State.Success
                || painter2.state !is AsyncImagePainter.State.Success
            ) {
                placeholderImage.invoke()
            }
            3 -> if (painter1.state !is AsyncImagePainter.State.Success
                || painter2.state !is AsyncImagePainter.State.Success
                || painter3.state !is AsyncImagePainter.State.Success
            ) {
                placeholderImage.invoke()
            }
            4 -> if (painter1.state !is AsyncImagePainter.State.Success
                || painter2.state !is AsyncImagePainter.State.Success
                || painter3.state !is AsyncImagePainter.State.Success
                || painter4.state !is AsyncImagePainter.State.Success
            ) {
                placeholderImage.invoke()
            }
            else -> placeholderImage.invoke()
        }
    }
}