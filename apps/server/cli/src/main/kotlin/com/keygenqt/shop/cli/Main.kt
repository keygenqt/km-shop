package com.keygenqt.shop.cli

import com.keygenqt.shop.Greeting
import kotlinx.cli.ArgParser
import kotlinx.cli.ArgType
import kotlinx.cli.required

object AppArgParser {
    private val argParser = ArgParser("Shop CLI")

    val output by argParser.option(
        ArgType.String,
        fullName = "output",
        shortName = "o",
        description = "Output argument string"
    ).required()

    fun parse(args: Array<String>) {
        argParser.parse(args)
    }
}

fun main(args: Array<String>) {

    AppArgParser.parse(args)

    println("CLI: " + Greeting().greeting())

    // Try adding program arguments via Run/Debug configuration.
    // Learn more about running applications: https://www.jetbrains.com/help/idea/running-applications.html.
    println("Program arguments: ${AppArgParser.output}")
}