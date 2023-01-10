import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: homePage

    QtObject {
        id: state
        property var response
        property string error: ""
        property bool loading: true
    }

    Component.onCompleted: {
        agent.run(
            "kmm.Requests.get.categoriesPublished()",
            function(result) {
                try {
                    var list = JSON.parse(result)
                    state.response = list
                    for (var index = 0; index < list.length; index++) {
                        list[index]['bg'] = index < 4 ? "../icons/cat_bg_" +(index + 1)+ ".svg" : "../icons/cat_bg_4.svg"
                        categoryModel.append(list[index])
                    }
                } catch (e) {
                    state.error = error
                }
                state.loading = false
            },
            function(error) {
                state.error = error
                state.loading = false
            }
        )
    }

    ListModel {
        id: categoryModel
    }

    Components.AppPage {
        id: idAppPage
        header: qsTr("Майшоп")
        menuDisabled: state.loading
        selectedPage: "itemMenuHome"
        fixed: state.loading

        Components.AppBlock {
            id: idInfoBlock
            width: parent.width
            backgroundColor: appTheme.colorVariant1

            Row {
                width: parent.width
                spacing: appTheme.paddingSmall

                Column {
                    width: parent.width - 180
                    spacing: appTheme.paddingSmall

                    Label {
                        text: qsTr("В этом сезоне найди лучшее 🔥")
                        color: "white"
                        bottomPadding: 4
                        font.pixelSize: appTheme.fontSizeBody2
                    }

                    Column {
                        width: parent.width
                        spacing: appTheme.paddingLarge

                        Text {
                            width: parent.width
                            text: qsTr("Коллекции для вашего стиля")
                            color: "white"
                            wrapMode: Text.WordWrap
                            font.pixelSize: appTheme.fontSizeH4
                        }

                        Components.AppButton {
                            text: qsTr("Начните поиск")
                            onClicked: console.log("Click")
                            padding: appTheme.paddingMedium
                            background: 'black'
                        }
                    }
                }

                Image {
                    source: Qt.resolvedUrl("../icons/girl.png")
                    fillMode: Image.PreserveAspectFit
                    anchors.verticalCenter: parent.verticalCenter
                    width: 180
                    height: 180
                    anchors.bottom: parent.bottom
                }
            }
        }

        Components.AppBlock {
            visible: state.error !== "" || state.loading
            width: parent.width
            height: idAppPage.pageH - idInfoBlock.height - appTheme.paddingMedium
            backgroundColor: appTheme.colorVariant3

            Components.BlockLoading {
               visible: state.loading
            }

            Components.BlockError {
               error: state.error
               visible: state.error !== ""
            }
        }

        Components.AppBlock {
            id: contentBlock
            width: parent.width
            backgroundColor: appTheme.colorVariant3
            visible: state.response !== undefined

            Column {
                width: parent.width
                spacing: appTheme.paddingLarge

                Row {
                    width: parent.width
                    spacing: 0

                    Label {
                        id: allLabel
                        text: qsTr("Топ категорий")
                        font.pixelSize: appTheme.fontSizeH5
                        color: "white"
                    }

                    Rectangle {
                        color: 'transparent'
                        height: 1
                        width: parent.width - allLabel.width - allButton.width
                    }

                    Components.AppButton {
                        id: allButton
                        text: qsTr("Все")
                        onClicked: console.log("Click")
                        padding: appTheme.paddingMedium
                    }
                }

                Repeater {
                    model: categoryModel
                    delegate: Components.AppBlock {
                        width: parent.width
                        backgroundColor: "white"
                        bgSource: bg

                        Label {
                            text: d4o_1
                            font.pixelSize: appTheme.fontSizeBody2
                            bottomPadding: 5
                        }

                        Column {
                            width: parent.width
                            spacing: appTheme.paddingLarge

                            Text {
                                width: parent.width
                                text: e4o_1
                                wrapMode: Text.WordWrap
                                font.pointSize: appTheme.fontSizeBody1
                            }

                            Components.AppButton {
                                text: qsTr("Смотреть")
                                iconEnd: "image://theme/icon-m-enter-next"
                                onClicked: console.log("Click")
                                padding: appTheme.paddingMedium
                            }
                        }
                   }
               }
            }
        }

    }
}
