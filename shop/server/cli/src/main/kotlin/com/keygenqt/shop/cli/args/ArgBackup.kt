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

    internal var isInit: Boolean = false

    val type by option(
        ArgType.Choice<BackupTypes>(),
        fullName = "type",
        shortName = "t",
        description = "Backup data type"
    )

    override fun execute() {
        isInit = true
    }
}

object ArgBackup {

    val subcommand: SubcommandBackup = SubcommandBackup()

    val isInit: Boolean
        get() {
            return subcommand.isInit
        }

    val type: BackupTypes
        get() {
            return subcommand.type ?: BackupTypes.DB
        }
}