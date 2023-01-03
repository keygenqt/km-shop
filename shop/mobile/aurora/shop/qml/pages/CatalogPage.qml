import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0
import "../components" as Components

Page {
    id: catalogPage

    property int tabIndex: 0

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
                        textTab0: qsTr("Категории")
                        textTab1: qsTr("Коллекции")
                        onTabChanged: tabIndex = appTabs.tab;
                    }

                    Column {
                        visible: tabIndex == 0
                        opacity: tabIndex == 0 ? 1.0 : 0.7
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Behavior on opacity {
                            NumberAnimation { properties: "opacity"; easing.type: Easing.InOutQuad; duration: 100 }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Категория 1")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Категория 2")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Категория 3")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }
                    }


                    Column {
                        visible: tabIndex == 1
                        opacity: tabIndex == 1 ? 1.0 : 0.7
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Behavior on opacity {
                            NumberAnimation { properties: "opacity"; easing.type: Easing.InOutQuad; duration: 100 }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant4
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 1")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant4
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 2")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant4
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 3")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant4
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 4")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant4
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 5")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant4
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 6")
                                color: "white"
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH4
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            backgroundColor: appTheme.colorVariant4
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 7")
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
}
