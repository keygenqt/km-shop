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
package com.keygenqt.shop.pc.client.services.app

import com.keygenqt.shop.pc.client.interfaces.IMethod
import org.freedesktop.dbus.annotations.DBusInterfaceName
import org.freedesktop.dbus.interfaces.DBusInterface
import org.freedesktop.dbus.types.UInt32

enum class AppDbusMethods(override val value: String) : IMethod {
    INIT_SUCCESS("inInitSuccess"),
    INIT_ERROR("inInitError"),
    UPDATE_ORDER("inUpdateOrder"),
    UPDATE_HELP("inUpdateHelp"),
}

@DBusInterfaceName("local.app.AppDbus")
interface AppDbus : DBusInterface {
    fun inInitSuccess(secret: String, countNewOrder: UInt32, countHelpNotChecked: UInt32)
    fun inInitError(secret: String, value: UInt32, error: String)
    fun inUpdateOrder(secret: String, value: UInt32)
    fun inUpdateHelp(secret: String, value: UInt32)
}
