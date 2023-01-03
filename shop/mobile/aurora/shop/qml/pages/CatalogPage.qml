import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0
import "../components" as Components

Page {
    id: catalogPage

    AppTheme {
        id: appTheme
    }

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height + appTheme.paddingLarge

        VerticalScrollDecorator {}

        PullDownMenu {
            id: pullDownMenu
            topMargin: appTheme.paddingLarge
            bottomMargin: appTheme.paddingLarge

            MenuItem {
                text: qsTr("Главная")
                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("MainPage.qml"), {}, PageStackAction.Replace)
            }
            MenuItem {
                text: qsTr("Корзина")
                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("CartPage.qml"), {}, PageStackAction.Replace)
            }
        }

        Column {
            id: column
            width: parent.width

            PageHeader {
                id: idPageHeader
                title: qsTr("Каталог")
                extraContent.children: [
                    Image {
                        source: Qt.resolvedUrl("../icons/toolbar_icon.png")
                        fillMode: Image.PreserveAspectFit
                        anchors.verticalCenter: parent.verticalCenter
                        width: 60
                        height: 60
                    }
                ]
            }

            Rectangle {
                height: contentPage.height
                width: parent.width - appTheme.paddingLarge * 2
                anchors.horizontalCenter: parent.horizontalCenter
                color: "transparent"

                Column {
                    id: contentPage
                    width: parent.width
                    spacing: appTheme.paddingMedium

                    Components.AppTabs {
                        id: appTabs
                        width: parent.width
                    }

                    Components.AppBlock {
                        width: parent.width
                        backgroundColor: appTheme.colorVariant1

                        Text {
                            width: parent.width
                            text: qsTr("Коллекции для вашего стиля")
                            color: "white"
                            wrapMode: Text.WordWrap
                            font.pixelSize: appTheme.fontSizeH4
                        }
                    }

                    Components.AppBlock {
                        width: parent.width
                        backgroundColor: appTheme.colorVariant1

                        Text {
                            width: parent.width
                            text: qsTr("Коллекции для вашего стиля")
                            color: "white"
                            wrapMode: Text.WordWrap
                            font.pixelSize: appTheme.fontSizeH4
                        }
                    }

                    Components.AppBlock {
                        width: parent.width
                        backgroundColor: appTheme.colorVariant1

                        Text {
                            width: parent.width
                            text: qsTr("Коллекции для вашего стиля")
                            color: "white"
                            wrapMode: Text.WordWrap
                            font.pixelSize: appTheme.fontSizeH4
                        }
                    }

                    Components.AppBlock {
                        width: parent.width
                        backgroundColor: appTheme.colorVariant1

                        Text {
                            width: parent.width
                            text: qsTr("Коллекции для вашего стиля")
                            color: "white"
                            wrapMode: Text.WordWrap
                            font.pixelSize: appTheme.fontSizeH4
                        }
                    }

                    Components.AppBlock {
                        width: parent.width
                        backgroundColor: appTheme.colorVariant1

                        Text {
                            width: parent.width
                            text: qsTr("Коллекции для вашего стиля")
                            color: "white"
                            wrapMode: Text.WordWrap
                            font.pixelSize: appTheme.fontSizeH4
                        }
                    }
                }
            }
        }
    }
}
