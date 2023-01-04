import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0
import "../components" as Components
import "../js/qmlKMM.js" as LibKMM
import Sailfish.WebView 1.0
import Sailfish.WebEngine 1.0

Page {
    id: kmmPage

    property string kmmResponse: "Empty"

    AppTheme {
        id: appTheme
    }

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height + appTheme.paddingLarge

        VerticalScrollDecorator {}

         Column {
             id: column
             width: parent.width

             PageHeader {
                 title: qsTr("KMM Test")
             }

             Column {
                 width: parent.width - appTheme.paddingLarge * 2
                 spacing: appTheme.paddingMedium
                 anchors.horizontalCenter: parent.horizontalCenter

                 Row {
                     id: iconButtons
                     width: parent.width
                     spacing: appTheme.paddingMedium
                     anchors.horizontalCenter: parent.horizontalCenter

                     Components.AppBlock {
                         width: parent.width / 2 - appTheme.paddingMedium / 2
                         backgroundColor: appTheme.colorVariant2
                         disabled: false

                         onClicked: webView.runJavaScript("return $.capitalize('text for capitalize')", function(result) {
                             kmmPage.kmmResponse = result
                         });

                         Row {
                             spacing: appTheme.paddingMedium
                             anchors.horizontalCenter: parent.horizontalCenter
                             Label {
                                 text: qsTr("Just fun")
                                 color: "white"
                                 font.pixelSize: appTheme.fontSizeH6
                             }
                         }
                     }

                     Components.AppBlock {
                         width: parent.width / 2 - appTheme.paddingMedium / 2
                         backgroundColor: appTheme.colorVariant2
                         disabled: false

                         onClicked: webView.runJavaScript("return getCategoriesCount()", function(result) {
                             console.log("Result", result);
                         });

                         Row {
                             spacing: appTheme.paddingMedium
                             anchors.horizontalCenter: parent.horizontalCenter
                             Label {
                                 text: qsTr("Ktor async fun")
                                 color: "white"
                                 font.pixelSize: appTheme.fontSizeH6
                             }
                         }
                     }
                 }

                 Components.AppBlock {
                     width: parent.width
                     backgroundColor: appTheme.colorVariant3

                     WebView {
                         id: webView
                         height: 400
                         width: parent.width
                         url: "../js-webpack/index.html"
                     }
                 }

                 Components.AppBlock {
                     width: parent.width
                     backgroundColor: appTheme.colorVariant1

                     Row {
                         width: parent.width
                         spacing: appTheme.paddingSmall

                         Column {
                             width: parent.width
                             spacing: appTheme.paddingSmall

                             Label {
                                 text: "JS KMM Const: " + LibKMM.getContactEmail()
                                 color: "white"
                                 bottomPadding: 10
                                 font.pixelSize: appTheme.fontSizeBody2
                             }

                             Label {
                                 text: "WebView KMM Response: " + kmmPage.kmmResponse
                                 color: "white"
                                 font.pixelSize: appTheme.fontSizeBody2
                             }
                         }
                     }
                 }
             }
         }
    }
}

