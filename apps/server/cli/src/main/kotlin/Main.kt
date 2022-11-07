import com.keygenqt.shop.Greeting

fun main(args: Array<String>) {

    println("CLI: " + Greeting().greeting())

    // Try adding program arguments via Run/Debug configuration.
    // Learn more about running applications: https://www.jetbrains.com/help/idea/running-applications.html.
    println("Program arguments: ${args.joinToString()}")
}