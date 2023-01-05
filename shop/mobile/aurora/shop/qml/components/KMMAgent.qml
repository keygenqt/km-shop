import QtQuick 2.0
import Sailfish.WebView 1.0
import Sailfish.WebEngine 1.0

WebView {
    id: webview
    height: 100
    width: parent.width
    privateMode: true
    url: "../js-webpack/index.html"
    visible: false

    property var response

    onViewInitialized: {
        webview.loadFrameScript(Qt.resolvedUrl("framescript.js"));
        webview.addMessageListener("webview:action")
    }

    onRecvAsyncMessage: {
        switch (message) {
        case "webview:action":
            webview.response = data.topic.indexOf("Error") !== -1 ? "Empty" : data.topic
            break
        }
   }

    Component.onCompleted: {
        WebEngineSettings.javascriptEnabled = true
        WebEngineSettings.popupEnabled = false
        WebEngineSettings.setPreference("security.disable_cors_checks", true, WebEngineSettings.BoolPref)
     }
}
