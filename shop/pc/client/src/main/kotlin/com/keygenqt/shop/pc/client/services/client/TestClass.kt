package com.keygenqt.shop.pc.client.services.client

import org.freedesktop.dbus.annotations.DBusInterfaceName
import org.freedesktop.dbus.interfaces.DBusInterface
import kotlin.system.exitProcess

@DBusInterfaceName("com.keygenqt.shop.client.TestClass")
interface ITestClass : DBusInterface {
    fun closeApp()
}

class TestClass : ITestClass {

    override fun getObjectPath(): String {
        return "/"
    }

    override fun closeApp() {
        exitProcess(0)
    }
}