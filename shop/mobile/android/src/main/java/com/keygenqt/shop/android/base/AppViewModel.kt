/*
 * Copyright 2022 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.keygenqt.shop.android.base

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

/**
 * Main [ViewModel] for app
 */
@HiltViewModel
class AppViewModel @Inject constructor() : ViewModel() {

    /**
     * [MutableStateFlow] for start app and end splash
     */
    private val _isSplash: MutableStateFlow<Boolean> = MutableStateFlow(true)

    /**
     * [StateFlow] for [_isSplash]
     */
    val isSplash: StateFlow<Boolean> get() = _isSplash.asStateFlow()

    init {
        viewModelScope.launch {
            delay(3000)
            _isSplash.value = false
        }
    }
}
