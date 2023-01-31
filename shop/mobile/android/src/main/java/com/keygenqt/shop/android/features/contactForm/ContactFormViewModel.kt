/*
 * Copyright 2023 Vitaliy Zarubin
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
package com.keygenqt.shop.android.features.contactForm

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.keygenqt.shop.data.requests.MessageRequest
import com.keygenqt.shop.exception.ResponseException
import com.keygenqt.shop.services.ServiceRequest
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class ContactFormViewModel @Inject constructor(
    private val serviceRequest: ServiceRequest,
) : ViewModel() {

    /**
     * Loading query
     */
    private val _loading: MutableStateFlow<Boolean> = MutableStateFlow(false)

    /**
     * [StateFlow] for [_loading]
     */
    val loading: StateFlow<Boolean> get() = _loading.asStateFlow()

    /**
     * Error response
     */
    private val _error: MutableStateFlow<ResponseException?> = MutableStateFlow(null)

    /**
     * [StateFlow] for [_error]
     */
    val error: StateFlow<ResponseException?> get() = _error.asStateFlow()

    /**
     * Error response
     */
    private val _success: MutableStateFlow<Boolean> = MutableStateFlow(false)

    /**
     * [StateFlow] for [_success]
     */
    val success: StateFlow<Boolean> get() = _success.asStateFlow()

    fun sendMessage(
        email: String,
        fname: String,
        lname: String,
        phone: String,
        message: String,
    ) {
        _error.value = null
        _loading.value = true
        _success.value = false
        viewModelScope.launch {
            delay(500)
            try {
                serviceRequest.post.message(
                    MessageRequest(
                        email = email,
                        fname = fname,
                        lname = lname,
                        phone = phone,
                        message = message,
                    )
                ).let {
                    _success.value = true
                    launch {
                        delay(3000)
                        _success.value = false
                    }
                }
            } catch (ex: ResponseException) {
                _error.value = ex
            }
            _loading.value = false
        }
    }
}
