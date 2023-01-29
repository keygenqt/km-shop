package com.keygenqt.shop.pc.client.services.app

import org.freedesktop.dbus.annotations.DBusInterfaceName
import org.freedesktop.dbus.interfaces.DBusInterface
import org.freedesktop.dbus.types.UInt32

enum class AppDbusMethods(val method: String) {
    UPDATE_ORDER("inUpdateOrder"),
    UPDATE_HELP("inUpdateHelp")
}

@DBusInterfaceName("local.app.AppDbus")
interface AppDbus : DBusInterface {
    fun inUpdateOrder(secret: String, value: UInt32)
    fun inUpdateHelp(secret: String, value: UInt32)
}