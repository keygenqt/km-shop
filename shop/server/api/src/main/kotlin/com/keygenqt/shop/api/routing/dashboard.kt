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
package com.keygenqt.shop.api.routing

import com.keygenqt.shop.api.extension.checkRoleAuth
import com.keygenqt.shop.data.responses.DashboardAmountResponse
import com.keygenqt.shop.data.responses.DashboardChartResponse
import com.keygenqt.shop.data.responses.DashboardCountResponse
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.OrdersService
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject

fun Route.dashboard() {

    val ordersService: OrdersService by inject()

    route("/dashboard") {
        get("/made-orders") {
            // check role
            call.checkRoleAuth()
            // act
            // @todo
            // response
            call.respond(
                DashboardCountResponse(
                    count = 252,
                    percent = 10
                )
            )
        }
        get("/orders-completed") {
            // check role
            call.checkRoleAuth()
            // act
            // @todo
            // response
            call.respond(
                DashboardCountResponse(
                    count = 421,
                    percent = -10
                )
            )
        }
        get("/total-earnings") {
            // check role
            call.checkRoleAuth()
            // act
            // @todo
            // response
            call.respond(
                DashboardAmountResponse(
                    amount = 8005.504444,
                )
            )
        }
        get("/seller") {
            // check role
            call.checkRoleAuth()
            // act
            val entities = ordersService.transaction {
                getBestSeller().toModels()
            }
            // response
            call.respond(entities)
        }
        get("/chart") {
            // check role
            call.checkRoleAuth()
            // act
            // @todo
            // response
            call.respond(
                DashboardChartResponse(
                    series1 = arrayOf(31, 40, 28, 51, 42, 109, 100, 120, 111, 119, 130, 133),
                    series2 = arrayOf(11, 32, 45, 32, 34, 52, 41, 60, 76, 33, 67, 50),
                )
            )
        }
    }
}
