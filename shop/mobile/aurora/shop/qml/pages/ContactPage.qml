import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components
import Sailfish.WebView 1.0
import Sailfish.WebEngine 1.0

Page {
    id: contactPage

    property bool activeMap: false

    Components.AppPage {
        header: qsTr("Контакты")
        selectedPage: "itemMenuContacts"
        fixed: false
        interactive: !activeMap

        Rectangle {
            height: idItems.height
            width: parent.width
            color: 'transparent'

            Column {
                id: idItems
                width: parent.width
                spacing: appTheme.paddingMedium

                Components.AppBlock {
                    width: parent.width
                    backgroundColor: idApp.colors.highlightDarkColor
                    isOpacity: contactPage.activeMap

                    Row {
                        width: parent.width
                        spacing: appTheme.paddingLarge
                        anchors.horizontalCenter: parent.horizontalCenter

                        Rectangle {
                            id: idIconRectangle
                            height: 125
                            width: 125
                            color: "white"
                            radius: 150

                            Rectangle {
                                width: 80
                                height: 80
                                color: "transparent"
                                anchors.horizontalCenter: parent.horizontalCenter
                                anchors.verticalCenter: parent.verticalCenter

                                Image {
                                    source: Qt.resolvedUrl("../icons/contact_comment.png")
                                    fillMode: Image.PreserveAspectFit
                                    height: parent.height
                                    width: parent.width
                                    anchors.top: parent.top
                                    anchors.topMargin: 5
                                }
                            }
                        }

                        Column {
                            width: parent.width - idIconRectangle.width - appTheme.paddingLarge
                            spacing: 20

                            Text {
                                width: parent.width
                                text: qsTr("Напишите нам!")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeBody1
                            }

                            Components.AppButton {
                                width: parent.width
                                text: qsTr("Написать сообщение")
                                onEndAnimationClick: pageStack.push(Qt.resolvedUrl("ContactFormPage.qml"))
                                padding: appTheme.paddingMedium
                                background: 'white'
                            }
                        }
                    }
                }

                Components.AppBlock {
                    width: parent.width
                    borderColor: idApp.colors.highlightDarkColor
                    isOpacity: contactPage.activeMap

                    Row {
                        width: parent.width
                        spacing: appTheme.paddingLarge
                        anchors.horizontalCenter: parent.horizontalCenter

                        Rectangle {
                            id: idIconRectangle2
                            height: 125
                            width: 125
                            border.color: idApp.colors.highlightDarkColor
                            border.width: 2
                            radius: 150

                            Rectangle {
                                width: 80
                                height: 80
                                color: "transparent"
                                anchors.horizontalCenter: parent.horizontalCenter
                                anchors.verticalCenter: parent.verticalCenter

                                Image {
                                    source: Qt.resolvedUrl("../icons/contact_email.png")
                                    fillMode: Image.PreserveAspectFit
                                    height: parent.height
                                    width: parent.width
                                    anchors.top: parent.top
                                    anchors.topMargin: 8
                                }
                            }
                        }

                        Column {
                            width: parent.width - idIconRectangle2.width - appTheme.paddingLarge
                            spacing: 20

                            Text {
                                width: parent.width
                                text: qsTr("Моя личная почта")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeBody1
                            }

                            Components.AppButton {
                                width: parent.width
                                text: idApp.constants.email
                                onEndAnimationClick: console.log("Click")
                                padding: appTheme.paddingMedium
                            }
                        }
                    }
                }

                Components.AppBlock {
                    width: parent.width
                    borderColor: idApp.colors.highlightDarkColor
                    isOpacity: contactPage.activeMap

                    Row {
                        width: parent.width
                        spacing: appTheme.paddingLarge
                        anchors.horizontalCenter: parent.horizontalCenter

                        Rectangle {
                            id: idIconRectangle3
                            height: 125
                            width: 125
                            border.color: idApp.colors.highlightDarkColor
                            border.width: 2
                            radius: 150

                            Rectangle {
                                width: 80
                                height: 80
                                color: "transparent"
                                anchors.horizontalCenter: parent.horizontalCenter
                                anchors.verticalCenter: parent.verticalCenter

                                Image {
                                    source: Qt.resolvedUrl("../icons/contact_phone.png")
                                    fillMode: Image.PreserveAspectFit
                                    height: parent.height
                                    width: parent.width
                                    anchors.top: parent.top
                                    anchors.topMargin: 3
                                }
                            }
                        }

                        Column {
                            width: parent.width - idIconRectangle3.width - appTheme.paddingLarge
                            spacing: 20

                            Text {
                                width: parent.width
                                text: qsTr("Добавляйтесь в Telegramm")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeBody1
                            }

                            Components.AppButton {
                                width: parent.width
                                text: idApp.constants.phone
                                onEndAnimationClick: console.log("Click")
                                padding: appTheme.paddingMedium
                            }
                        }
                    }
                }

                Components.AppBlock {
                    width: parent.width
                    borderColor: idApp.colors.highlightDarkColor
                    isOpacity: contactPage.activeMap

                    Column {
                        width: parent.width
                        spacing: appTheme.paddingLarge
                        anchors.horizontalCenter: parent.horizontalCenter

                        Rectangle {
                            height: 125
                            width: 125
                            border.color: idApp.colors.highlightDarkColor
                            border.width: 2
                            radius: 150
                            anchors.horizontalCenter: parent.horizontalCenter

                            Rectangle {
                                width: 80
                                height: 80
                                color: "transparent"
                                anchors.horizontalCenter: parent.horizontalCenter
                                anchors.verticalCenter: parent.verticalCenter

                                Image {
                                    source: Qt.resolvedUrl("../icons/contact_address.png")
                                    fillMode: Image.PreserveAspectFit
                                    height: parent.height
                                    width: parent.width
                                    anchors.top: parent.top
                                    anchors.topMargin: -2
                                }
                            }
                        }

                        Text {
                            width: parent.width
                            text: qsTr("Доставка осуществляется по всей России, а мы находимся в городе Волгодонск")
                            wrapMode: Text.WordWrap
                            font.pixelSize: appTheme.fontSizeBody1
                            horizontalAlignment: Text.AlignHCenter
                        }

                    }
                }

                Components.AppBlock {
                    width: parent.width
                    borderColor: idApp.colors.highlightDarkColor
                    padding: 8

                    WebView {
                        id: idMap
                        height: 350
                        width: parent.width
                        privateMode: true
                        url: idApp.constants.mapUrl
                        Component.onCompleted: {
                            WebEngineSettings.javascriptEnabled = true
                            WebEngineSettings.popupEnabled = false
                        }
                        onActiveFocusChanged: {
                            contactPage.activeMap = idMap.focus
                        }
                    }
                }
            }

            MouseArea {
                height: parent.height - 350
                width: parent.width
                visible: contactPage.activeMap
                onPressed: {
                    idMap.focus = false
                }
            }
        }
    }
}
