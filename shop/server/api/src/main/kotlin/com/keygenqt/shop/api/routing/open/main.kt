package com.keygenqt.shop.api.routing.open

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.routing.*
import kotlinx.html.*

fun Route.main() {
    get("/") {

        val name = "API Shop"
        val subtitle = "API for Shop 6 in 1"
        val title = "API written in Ktor using multiplatform best practices"
        val text = "You can check out the method documentation on GitHub Pages"
        val button = "Documentation"
        val footer = "This API is used on 4 platforms combined Kotlin Multiplatform"

        call.respondHtml(HttpStatusCode.OK) {
            head {
                title {
                    +name
                }
                link(rel = "stylesheet", href = "/static/css/common.css", type = "text/css")
            }
            body {
                div("Root Table") {
                    div("Row") {
                        div("ToolBar Cell") {
                            style = "height: 86px"
                            +"Welcome!"
                        }
                    }
                    div("Row") {
                        div ("Cell") {
                            div("Body") {
                                div("Info") {
                                    div("Subtitle") {
                                        +subtitle
                                    }
                                    div("Title") {
                                        +title
                                    }
                                    div("Text") {
                                        +text
                                    }
                                    a(href = "https://keygenqt.github.io/km-shop/api/", classes = "Btn") {
                                        target = "_blank"
                                        +button
                                    }
                                }
                                div("Image") {
                                    img("Code", "/static/images/code.png")
                                }
                            }
                        }
                    }
                    div("Row") {
                        div("Footer Cell") {
                            p {
                                +footer
                            }
                            ul {
                                li {
                                    img("Code", "/static/images/ic_android.png")
                                }
                                li {
                                    img("Code", "/static/images/ic_apple.png")
                                }
                                li {
                                    img("Code", "/static/images/ic_react.png")
                                }
                                li {
                                    img("Code", "/static/images/ic_cli.png")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}