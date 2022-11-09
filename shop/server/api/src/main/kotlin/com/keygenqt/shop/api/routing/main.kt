package com.keygenqt.shop.api.routing

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.routing.*
import kotlinx.html.*

fun Route.main() {
    get("/") {
        val name = "API Shop"
        call.respondHtml(HttpStatusCode.OK) {
            head {
                title {
                    +name
                }
            }
            body {
                h1 {
                    +"Hello from $name!"
                }
                p {
                    +"Rockets: "
                    a("/rockets") { +"/rockets" }
                }
                p {
                    +"Multiplatform greeting: "
                    a("/greeting") { +"/greeting" }
                }
            }
        }
    }
}