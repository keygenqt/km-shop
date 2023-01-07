import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0
import "../components" as Components

Page {
    id: kmmPage

    property string response0: "Empty"
    property string response1: "Empty"
    property string response2: "Empty"

    property string error1: ""
    property string error2: ""

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

                 Components.AppBlock {
                     width: parent.width
                     backgroundColor: appTheme.colorVariant2
                     disabled: false

                     onClicked: agent.run("return kmm.AppConstants.other.CONTACT_EMAIL", function(result) {
                         kmmPage.response0 = result
                     });

                     Label {
                         text: qsTr("Just fun")
                         color: "white"
                         font.pixelSize: appTheme.fontSizeH6
                     }
                 }

                 Components.AppBlock {
                     width: parent.width
                     backgroundColor: appTheme.colorVariant2
                     disabled: false
                     onClicked: agent.run(
                        "action1()",
                        function(result) {
                            kmmPage.response1 = result
                        },
                        function(error) {
                            kmmPage.error1 = error
                        }
                    );

                     Label {
                         text: qsTr("Ktor async fun1")
                         color: "white"
                         font.pixelSize: appTheme.fontSizeH6
                     }
                 }

                 Components.AppBlock {
                     width: parent.width
                     backgroundColor: appTheme.colorVariant2
                     disabled: false
                     onClicked: agent.run(
                        "action2()",
                        function(result) {
                            kmmPage.response2 = result
                        },
                        function(error) {
                            kmmPage.error2 = error
                        }
                    );

                     Label {
                         text: qsTr("Ktor async fun2")
                         color: "white"
                         font.pixelSize: appTheme.fontSizeH6
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
                                 text: "KMM response: " + kmmPage.response0
                                 color: "white"
                                 font.pixelSize: appTheme.fontSizeBody2
                             }

                             Label {
                                 text: "KMM async response1: " + (kmmPage.error1 ? kmmPage.error1 : kmmPage.response1)
                                 color: "white"
                                 font.pixelSize: appTheme.fontSizeBody2
                             }

                             Label {
                                 text: "KMM async response2: " + (kmmPage.error2 ? kmmPage.error2 : kmmPage.response2)
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

