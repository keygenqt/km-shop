/*
 * Copyright 2022 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.keygenqt.shop.pc.client

import ch.qos.logback.classic.Level
import ch.qos.logback.classic.Logger
import com.keygenqt.shop.data.responses.SessionCookieResponse
import com.keygenqt.shop.pc.client.arguments.ArgRoot
import com.keygenqt.shop.pc.client.base.AppWebSocket
import com.keygenqt.shop.pc.client.extensions.checkResponseCount
import com.keygenqt.shop.pc.client.extensions.read
import com.keygenqt.shop.pc.client.extensions.toCookie
import com.keygenqt.shop.pc.client.services.AppDbusService
import com.keygenqt.shop.pc.client.services.app.AppDbusMethods
import com.keygenqt.shop.pc.client.services.client.ClientFeatures
import com.keygenqt.shop.services.ServiceRequest
import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory
import org.apache.commons.lang3.RandomStringUtils
import org.freedesktop.dbus.types.UInt32
import org.koin.core.context.startKoin
import org.koin.dsl.module
import org.slf4j.LoggerFactory
import java.util.*
import kotlin.system.exitProcess

fun main(args: Array<String>) {

    var secret = System.getenv("SECRET_KEY")

    // load configuration
    val conf: Config = ConfigFactory.load()

    // logger
    val logger = (LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME) as Logger).apply {
        level = if (conf.getBoolean("config.development")) Level.DEBUG else Level.OFF
    }

    // init dbus
    val dbus: AppDbusService = AppDbusService.getInstance()

    // init koin
    startKoin {
        modules(module {
            // Logging app
            single { logger }
            // D-Bus connect
            single { dbus }
            // Client services
            single {
                ServiceRequest(
                    cookie = SessionCookieResponse.read()?.toCookie()
                )
            }
        })
    }

    // init app methods
    val methods = ClientFeatures()

    // init CLI
    if (secret === null) {
        ArgRoot.parse(args)?.let {
            when {
                it.auth.isInit -> {
                    when (methods.login(it.auth.email, it.auth.password)) {
                        200 -> println("Authorization was successful. You can start listen with --run (-r) option.")
                        403 -> println("Authorization already done. You can start listen with --run (-r) option.")
                        else -> {
                            println("Authorisation error.")
                            exitProcess(0)
                        }
                    }
                    exitProcess(0)
                }
                it.logout == true -> {
                    methods.logout()
                    println("Logout was successful.")
                    exitProcess(0)
                }
                it.run != true -> {
                    exitProcess(0)
                }
                else -> {}
            }
        }
        // set secret
        secret = "${UUID.randomUUID()}-${RandomStringUtils.randomAlphanumeric(12)}"
    }

    try {
        println("Server connection...")

        // get count new order and check auth
        val countNewOrder = methods
            .getCountNewOrder()
            .checkResponseCount()

        // get count message help and check auth
        val countHelpNotChecked = methods
            .getCountHelpNotChecked()
            .checkResponseCount()

        println("Current data: order status NEW: $countNewOrder, message not read: $countHelpNotChecked.")

        // run listen socket
        AppWebSocket(
            secret = secret
        ).init()

        // send app state
        dbus.call(
            AppDbusMethods.INIT_SUCCESS,
            listOf(secret, UInt32(countNewOrder.toLong()), UInt32(countHelpNotChecked.toLong()))
        )

    } catch (e: Exception) {
        val error = e.message ?: "Application launch failed."
        // send app state
        dbus.call(
            AppDbusMethods.INIT_ERROR,
            listOf(secret, error)
        )
        // print app state
        println(error)
        // exit
        exitProcess(0)
    }
}
