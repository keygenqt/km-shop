package com.keygenqt.shop.cli.args

import kotlinx.cli.ArgParser
import kotlinx.cli.ArgType
import kotlinx.cli.ExperimentalCli
import kotlinx.cli.default

@OptIn(ExperimentalCli::class)
object ArgRoot {

    private val argParser = ArgParser("Shop CLI", strictSubcommandOptionsOrder = true).apply {
        subcommands(
            ArgBackup.subcommand,
            ArgCleaner.subcommand,
            ArgNotification.subcommand,
        )
    }

    val demo by argParser.option(
        ArgType.Boolean,
        fullName = "demo",
        description = "Demo multiplatform request"
    ).default(false)

    fun parse(args: Array<String>) {
        argParser.parse(args)
    }
}