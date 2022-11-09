package com.keygenqt.shop.cli.args

import kotlinx.cli.ExperimentalCli
import kotlinx.cli.Subcommand

@OptIn(ExperimentalCli::class)
class SubcommandNotification : Subcommand("notification", "Push firebase notification") {

    var isInit: Boolean = false

    override fun execute() {
        isInit = true
    }
}

object ArgNotification {

    val subcommand: SubcommandNotification = SubcommandNotification()

    val isInit: Boolean
        get() {
            return subcommand.isInit
        }
}