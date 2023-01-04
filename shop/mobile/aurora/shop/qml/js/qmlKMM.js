.import "../js/kotlin-kotlin-stdlib-js-ir.js" as Helper
.import "../js/88b0986a7186d029-atomicfu-js-ir.js" as Helper
.import "../js/Kotlin-DateTime-library-kotlinx-datetime-js-ir.js" as Helper
.import "../js/kotlin-kotlinx-atomicfu-runtime-js-ir.js" as Helper
.import "../js/kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js" as Helper
.import "../js/kotlinx-serialization-kotlinx-serialization-core-js-ir.js" as Helper
.import "../js/kotlinx-serialization-kotlinx-serialization-json-js-ir.js" as Helper
.import "../js/ktor-ktor-io-js-ir.js" as Helper
.import "../js/ktor-ktor-utils-js-ir.js" as Helper
.import "../js/ktor-ktor-http-js-ir.js" as Helper
.import "../js/ktor-ktor-events-js-ir.js" as Helper
.import "../js/ktor-ktor-websockets-js-ir.js" as Helper
.import "../js/ktor-ktor-client-core-js-ir.js" as Helper
.import "../js/ktor-ktor-serialization-js-ir.js" as Helper
.import "../js/ktor-ktor-client-content-negotiation-js-ir.js" as Helper
.import "../js/ktor-ktor-client-js-js-ir.js" as Helper
.import "../js/ktor-ktor-client-logging-js-ir.js" as Helper
.import "../js/ktor-ktor-serialization-kotlinx-js-ir.js" as Helper
.import "../js/ktor-ktor-serialization-kotlinx-json-js-ir.js" as Helper
.import "../js/ktor-ktor-websocket-serialization-js-ir.js" as Helper
.import "../js/shared.js" as Shared

function getContactEmail() {
    return Shared.shared.com.keygenqt.shop.utils.constants.AppConstants.other.CONTACT_EMAIL
}

function getCountCategories() {
    try {
        var client = new Shared.shared.com.keygenqt.shop.services.ServiceRequestJS("http://localhost:8086")
        return "Success client"
    } catch (e) {
        console.log(e)
        return "Error client"
    }
}
