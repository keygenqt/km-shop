package com.keygenqt.shop.cli.features

import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.services.ServiceRequest
import kotlinx.coroutines.runBlocking
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class DemoFeature : KoinComponent {

    private val arg: ArgRoot by inject()

    private val request: ServiceRequest by inject()

    fun runDemoQuery() {
        println("Loading rockets...")

        runBlocking {
            val rocketsDemoJetBrains = request.get.rocketsDemoJetBrains()
            val rocketsDemoAPI = request.get.rocketsDemoAPI()

            println("Rockets JetBrains count: ${rocketsDemoJetBrains.size}")
            println("Rockets API count: ${rocketsDemoAPI.size}")
        }
    }

    companion object {
        fun init() {
            with(DemoFeature()) {
                if (arg.demo) {
                    runDemoQuery()
                }
            }
        }
    }
}