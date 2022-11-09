package com.keygenqt.shop.cli.args

import kotlinx.cli.ArgParser
import kotlinx.cli.ArgType
import kotlinx.cli.ExperimentalCli
import kotlinx.cli.default

@OptIn(ExperimentalCli::class)
class ArgRoot {

    val backup: SubcommandBackup = SubcommandBackup()
    val cleaner: SubcommandCleaner = SubcommandCleaner()
    val notification: SubcommandNotification = SubcommandNotification()

    private val parser = ArgParser("Shop CLI", strictSubcommandOptionsOrder = true).apply {
        subcommands(
            backup,
            cleaner,
            notification,
        )
    }

    val demo by parser.option(
        ArgType.Boolean,
        fullName = "demo",
        description = "Demo multiplatform request"
    ).default(false)

    companion object {
        fun parse(args: Array<String>): ArgRoot? {
            return ArgRoot().let {
                it.parser.parse(if (args.isEmpty()) arrayOf("--help") else args)
                if (args.isEmpty()) {
                    null
                } else {
                    it
                }
            }
        }
    }
}