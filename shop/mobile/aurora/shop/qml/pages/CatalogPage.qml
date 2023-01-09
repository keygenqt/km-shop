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

        Components.GlobalMenu {}

        Column {
            id: column
            width: parent.width

            Components.MainPageHeader {
                title: qsTr("Каталог")
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
                        opacity: tabIndex == 0 ? 1.0 : 0.9
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Behavior on opacity {
                            NumberAnimation { properties: "opacity"; easing.type: Easing.InOutQuad; duration: 300 }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant2
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Категория 1")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant2
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Категория 2")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant2
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Категория 3")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }
                    }


                    Column {
                        visible: tabIndex == 1
                        opacity: tabIndex == 1 ? 1.0 : 0.9
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Behavior on opacity {
                            NumberAnimation { properties: "opacity"; easing.type: Easing.InOutQuad; duration: 300 }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 1")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 2")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 3")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 4")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 5")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 6")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 7")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant3
                            disabled: false

                            Text {
                                width: parent.width
                                text: qsTr("Коллекция 8")
                                wrapMode: Text.WordWrap
                                font.pixelSize: appTheme.fontSizeH6
                            }
                        }

                    }
                }
            }
        }
    }
}
