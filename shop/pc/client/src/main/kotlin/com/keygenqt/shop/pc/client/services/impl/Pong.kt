package com.keygenqt.shop.pc.client.services.impl

import org.freedesktop.dbus.annotations.DBusInterfaceName
import org.freedesktop.dbus.interfaces.DBusInterface
import org.freedesktop.dbus.types.UInt32

@DBusInterfaceName("local.pong.Pong")
interface Pong : DBusInterface {
    fun updateOrder(value: UInt32)
    fun updateHelp(value: UInt32)
}