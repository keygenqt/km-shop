/**
 * Copyright © 2022 Surf. All rights reserved.
 */
package com.keygenqt.shop.android.base

import android.annotation.SuppressLint
import android.graphics.Bitmap
import android.view.MotionEvent
import android.view.ViewGroup
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun ComposeWebView(
    url: String,
    modifier: Modifier = Modifier,
    onFocused: (Boolean) -> Unit = {},
    onError: (url: String?, code: Int) -> Unit = { _, _ -> },
    onStarted: (url: String) -> Unit = {},
    onFinished: (url: String) -> Unit = {},
) {

    val context = LocalContext.current
    val scope = rememberCoroutineScope()

    val webView: WebView = remember { WebView(context) }

    AndroidView(
        modifier = modifier,
        factory = {
            webView.apply {
                settings.javaScriptEnabled = true

                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT,
                )
                webViewClient = ClientWebView(
                    scope = scope,
                    onError = onError,
                    onStarted = onStarted,
                    onFinished = onFinished,
                )

                loadUrl(url)

                setOnTouchListener { _, event ->
                    performClick()
                    when (event.action) {
                        MotionEvent.ACTION_DOWN,
                        MotionEvent.ACTION_BUTTON_PRESS -> onFocused(true)
                        MotionEvent.ACTION_UP,
                        MotionEvent.ACTION_BUTTON_RELEASE -> onFocused(false)
                    }
                    return@setOnTouchListener false
                }
            }
        },
    )
}

class ClientWebView(
    private val scope: CoroutineScope,
    private val onError: (url: String?, code: Int) -> Unit,
    private val onStarted: (url: String) -> Unit,
    private val onFinished: (url: String) -> Unit,
) : WebViewClient() {

    private var job: Job? = null

    override fun onReceivedError(
        view: WebView?,
        request: WebResourceRequest?,
        error: WebResourceError?
    ) {
        error?.let {
            onError.invoke(request?.url?.toString(), it.errorCode)
        }
        super.onReceivedError(view, request, error)
    }

    override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
        url?.let {
            job?.cancel()
            onStarted.invoke(it)
        }
    }

    override fun onPageFinished(view: WebView?, url: String?) {
        url?.let {
            job = scope.launch {
                delay(200)
                onFinished.invoke(it)
            }
        }
    }
}

