/*
 * Copyright 2023 Vitaliy Zarubin
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
import com.keygenqt.shop.data.responses.OrderState
import com.keygenqt.shop.db.entities.toModels
import com.keygenqt.shop.db.service.OrdersService
import com.keygenqt.shop.extension.getBestSellerIDs
import com.keygenqt.shop.extension.getDates
import com.keygenqt.shop.extension.getMountSum
import com.keygenqt.shop.extension.getPercent
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.koin.ktor.ext.inject
import java.time.Month

fun Route.dashboard() {

    val ordersService: OrdersService by inject()

    val dates = getDates()

    route("/dashboard") {
        get("/made-orders") {
            // check role
            call.checkRoleAuth()
            // act
            val countNow = ordersService.transaction {
                getMonthCount(
                    month = dates.first.first,
                    year = dates.first.second,
                )
            }
            val countPre = ordersService.transaction {
                getMonthCount(
                    month = dates.second.first,
                    year = dates.second.second,
                )
            }
            // response
            call.respond(
                DashboardCountResponse(
                    count = countNow,
                    percent = Pair(countNow, countPre).getPercent()
                )
            )
        }
        get("/orders-completed") {
            // check role
            call.checkRoleAuth()
            // act
            val countNow = ordersService.transaction {
                getMonthCount(
                    month = dates.first.first,
                    year = dates.first.second,
                    state = OrderState.COMPLETED,
                )
            }
            val countPre = ordersService.transaction {
                getMonthCount(
                    month = dates.second.first,
                    year = dates.second.second,
                    state = OrderState.COMPLETED,
                )
            }
            // response
            call.respond(
                DashboardCountResponse(
                    count = countNow,
                    percent = Pair(countNow, countPre).getPercent()
                )
            )
        }
        get("/total-earnings") {
            // check role
            call.checkRoleAuth()
            // act
            val sum = ordersService.transactionRaw {
                getMountSum(
                    month = dates.first.first,
                    year = dates.first.second,
                    state = OrderState.COMPLETED
                )
            }
            // response
            call.respond(
                DashboardAmountResponse(
                    amount = sum,
                )
            )
        }
        get("/seller") {
            // check role
            call.checkRoleAuth()
            // act
            val ids = ordersService.transactionRaw {
                getBestSellerIDs()
            }
            val entities = ordersService.transaction {
                getBestSeller(ids).toModels()
            }
            // response
            call.respond(entities)
        }
        get("/chart") {
            // check role
            call.checkRoleAuth()
            // act
            call.respond(
                DashboardChartResponse(
                    series1 = arrayOf(
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.JANUARY,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.FEBRUARY,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.MARCH,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.APRIL,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.MAY,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.JUNE,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.JULY,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.AUGUST,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.SEPTEMBER,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.OCTOBER,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.NOVEMBER,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.DECEMBER,
                                year = dates.first.second,
                                state = OrderState.COMPLETED,
                            )
                        }
                    ),
                    series2 = arrayOf(
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.JANUARY,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.FEBRUARY,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.MARCH,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.APRIL,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.MAY,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.JUNE,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.JULY,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.AUGUST,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.SEPTEMBER,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.OCTOBER,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.NOVEMBER,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        },
                        ordersService.transaction {
                            getMonthCount(
                                month = Month.DECEMBER,
                                year = dates.first.second,
                                state = OrderState.CANCELED,
                            )
                        }
                    ),
                )
            )
        }
    }
}
