package com.keygenqt.shop.cli.features

import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.cli.args.BackupTypes
import com.keygenqt.shop.cli.args.CleanerTypes
import com.keygenqt.shop.db.service.RocketsService
import kotlinx.coroutines.runBlocking
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class CleanerFeature : KoinComponent {

    private val arg: ArgRoot by inject()

    private val rocketsService: RocketsService by inject()

    fun runClearTokens() {
        println("Clear tokens")
    }

    fun runClearImages() {
        runBlocking {
            val rockets = rocketsService.getAll()
            println("Rockets db count: ${rockets.size}")
        }
        println("Clear IMAGES")
    }

    companion object {
        fun init() {
            with(CleanerFeature()) {
                if (arg.cleaner.isInit) {
                    when (arg.cleaner.type) {
                        CleanerTypes.TOKENS, null -> runClearTokens()
                        CleanerTypes.IMAGES -> runClearImages()
                    }
                }
            }
        }
    }
}