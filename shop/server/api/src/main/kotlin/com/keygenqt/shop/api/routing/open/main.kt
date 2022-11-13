package com.keygenqt.shop.api.routing.open

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
                h3 {
                    +"Routes Guest:"
                }
                ul {
                    li {
                        a("/api/greeting") { +"/api/greeting" }
                    }
                    li {
                        a("/api/rockets") { +"/api/rockets" }
                    }
                    li {
                        a("/api/categories") { +"/api/categories" }
                    }
                    li {
                        a("/api/products") { +"/api/products" }
                    }
                    li {
                        a("/api/products/1") { +"/api/products/{ID}" }
                    }
                }
                h3 {
                    +"Routes User:"
                }
                ul {
                    li {
                        a("/api/sec/rockets") { +"/api/sec/rockets" }
                    }
                    li {
                        a("/api/sec/categories") { +"/api/sec/categories" }
                    }
                    li {
                        a("/api/sec/categories/uploads") { +"/api/sec/categories/uploads" }
                    }
                    li {
                        a("/api/sec/products") { +"/api/sec/products" }
                    }
                    li {
                        a("/api/sec/products/1") { +"/api/sec/products/{ID}" }
                    }
                    li {
                        a("/api/sec/products/uploads") { +"/api/sec/products/uploads" }
                    }
                    li {
                        a("/api/sec/products/uploads/1") { +"/api/sec/products/uploads/{ID}" }
                    }
                    li {
                        a("/api/sec/orders") { +"/api/sec/orders" }
                    }
                    li {
                        a("/api/sec/messages") { +"/api/sec/messages" }
                    }
                    li {
                        a("/api/sec/uploads") { +"/api/sec/uploads" }
                    }
                }
            }
        }
    }
}