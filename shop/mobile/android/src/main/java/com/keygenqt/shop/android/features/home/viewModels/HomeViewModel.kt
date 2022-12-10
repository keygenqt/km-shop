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
package com.keygenqt.shop.android.features.home.viewModels

import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import com.keygenqt.shop.android.routes.RouteHome
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject

@HiltViewModel
class HomeViewModel @Inject constructor(
    savedStateHandle: SavedStateHandle
) : ViewModel() {
    /**
     * Demo arguments with custom [RouteHome.SearchParameters]
     */
    val argument0: Int = savedStateHandle[RouteHome.argument0.name]!!
    val argument1: Long? = savedStateHandle[RouteHome.argument1.name]
    val argument2: Float? = savedStateHandle[RouteHome.argument2.name]
    val argument3: Boolean? = savedStateHandle[RouteHome.argument3.name]
    val argument4: String? = savedStateHandle[RouteHome.argument4.name]
    val argument5: RouteHome.SearchParameters? = savedStateHandle[RouteHome.argument5.name]
}
