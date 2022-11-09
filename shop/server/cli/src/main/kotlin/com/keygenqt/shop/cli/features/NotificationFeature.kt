package com.keygenqt.shop.cli.features

import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.db.service.RocketsService
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class NotificationFeature : KoinComponent {

    private val arg: ArgRoot by inject()

    private val rocketsService: RocketsService by inject()

    fun runPushNotification() {
        println("Push firebase notification")
    }

    companion object {
        fun init() {
            with(NotificationFeature()) {
                if (arg.notification.isInit) {
                    runPushNotification()
                }
            }
        }
    }
}