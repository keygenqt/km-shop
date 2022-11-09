package com.keygenqt.shop.cli.args

import kotlinx.cli.ExperimentalCli
import kotlinx.cli.Subcommand

@OptIn(ExperimentalCli::class)
class SubcommandNotification : Subcommand("notification", "Push firebase notification") {

    private var _isInit: Boolean = false

    val isInit get() = _isInit

    override fun execute() {
        _isInit = true
    }
}