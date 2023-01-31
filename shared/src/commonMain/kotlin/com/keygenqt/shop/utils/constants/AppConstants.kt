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
package com.keygenqt.shop.utils.constants

import com.keygenqt.shop.utils.constants.impl.FormatConstants
import com.keygenqt.shop.utils.constants.impl.LinksConstants
import com.keygenqt.shop.utils.constants.impl.OtherConstants
import kotlin.js.JsExport

@JsExport
object AppConstants {
    val format = FormatConstants
    val links = LinksConstants
    val other = OtherConstants
}
