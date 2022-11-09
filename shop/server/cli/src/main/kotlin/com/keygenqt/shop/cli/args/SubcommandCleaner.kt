package com.keygenqt.shop.cli.args

import kotlinx.cli.ArgType
import kotlinx.cli.ExperimentalCli
import kotlinx.cli.Subcommand

enum class CleanerTypes {
    TOKENS,
    IMAGES,
}

@OptIn(ExperimentalCli::class)
class SubcommandCleaner :
    Subcommand("cleaner", "Cleaner old db data (default tokens) { tokens, images }") {

    private var _isInit: Boolean = false

    val isInit get() = _isInit

    val type by option(
        ArgType.Choice<CleanerTypes>(),
        fullName = "type",
        shortName = "t",
        description = "Cleaner data type"
    )

    override fun execute() {
        _isInit = true
    }
}