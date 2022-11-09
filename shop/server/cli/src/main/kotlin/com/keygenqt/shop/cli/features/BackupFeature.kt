package com.keygenqt.shop.cli.features

import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.cli.args.BackupTypes
import com.keygenqt.shop.db.service.RocketsService
import kotlinx.coroutines.runBlocking
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class BackupFeature : KoinComponent {

    private val arg: ArgRoot by inject()

    private val rocketsService: RocketsService by inject()

    fun runBackupDb() {
        println("Backup DB")
    }

    fun runBackupImages() {
        runBlocking {
            val rockets = rocketsService.getAll()
            println("Rockets db count: ${rockets.size}")
        }
        println("Backup IMAGES")
    }

    companion object {
        fun init() {
            with(BackupFeature()) {
                if (arg.backup.isInit) {
                    when (arg.backup.type) {
                        BackupTypes.DB, null -> runBackupDb()
                        BackupTypes.IMAGES -> runBackupImages()
                    }
                }
            }
        }
    }
}