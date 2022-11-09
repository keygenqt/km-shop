package com.keygenqt.shop.cli.args

import kotlinx.cli.ArgType
import kotlinx.cli.ExperimentalCli
import kotlinx.cli.Subcommand

enum class BackupTypes {
    DB,
    IMAGES,
}

@OptIn(ExperimentalCli::class)
class SubcommandBackup : Subcommand("backup", "Backup data (default db) { db, images }") {

    private var _isInit: Boolean = false

    val isInit get() = _isInit

    val type by option(
        ArgType.Choice<BackupTypes>(),
        fullName = "type",
        shortName = "t",
        description = "Backup data type"
    )

    override fun execute() {
        _isInit = true
    }
}