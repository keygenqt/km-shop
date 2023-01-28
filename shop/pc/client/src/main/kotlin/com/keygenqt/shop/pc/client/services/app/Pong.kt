package com.keygenqt.shop.pc.client.services.app

import org.freedesktop.dbus.annotations.DBusInterfaceName
import org.freedesktop.dbus.interfaces.DBusInterface
import org.freedesktop.dbus.types.UInt32

@DBusInterfaceName("local.pong.Pong")
interface Pong : DBusInterface {
    fun updateOrder(secret: String, value: UInt32)
    fun updateHelp(secret: String, value: UInt32)
}