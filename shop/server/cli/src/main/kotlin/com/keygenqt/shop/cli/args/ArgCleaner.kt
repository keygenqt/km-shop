package com.keygenqt.shop.cli.args

import kotlinx.cli.ArgType
import kotlinx.cli.ExperimentalCli
import kotlinx.cli.Subcommand

enum class CleanerTypes {
    TOKENS,
    IMAGES,
}

@OptIn(ExperimentalCli::class)
class SubcommandCleaner : Subcommand("cleaner", "Cleaner old db data (default tokens) { tokens, images }") {

    internal var isInit: Boolean = false

    val type by option(
        ArgType.Choice<CleanerTypes>(),
        fullName = "type",
        shortName = "t",
        description = "Cleaner data type"
    )

    override fun execute() {
        isInit = true
    }
}

object ArgCleaner {

    val subcommand: SubcommandCleaner = SubcommandCleaner()

    val isInit: Boolean
        get() {
            return subcommand.isInit
        }

    val type: CleanerTypes
        get() {
            return subcommand.type ?: CleanerTypes.TOKENS
        }
}