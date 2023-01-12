import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: orderSearchPage

    Components.AppPage {
        header: qsTr("Поиск заказа")

        Components.AppBlock {
            id: pageBlock
            height: parent.height
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: "white"

            Rectangle {
                height: pageBlock.height - appTheme.paddingLarge * 2
                width: parent.width
                color: 'transparent'

                Column {
                    height: parent.height
                    width: parent.width
                    spacing: appTheme.paddingLarge

                    Text {
                        width: parent.width
                        text: qsTr("Здесь вы можете найти свой заказ по номеру, полученному после успешного оформления заказа.")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeBody1
                    }

                    property string error: ""

                    Components.AppTextField {
                        placeholderText : qsTr("Номер заказа")
                        singleLine: true
                        onTextChanged: {
                            error = text.length === 0 ? "The field is required" : ""
                        }
                        error: error
                    }

                    Components.AppButton {
                        width: parent.width
                        text: qsTr("Искать")
                        onClicked: console.log("yes")
                        padding: appTheme.paddingLarge
                    }

                }

                Rectangle {
                    height: 200
                    width: 200
                    anchors.bottom: parent.bottom
                    anchors.right: parent.right
                    color: 'transparent'

                    AnimatedImage {
                        id: img
                        anchors.top: parent.top
                        anchors.left: parent.left
                        anchors.right: parent.right
                        anchors.bottom: parent.bottom
                        anchors.rightMargin: -16
                        anchors.bottomMargin: -16
                        source: Qt.resolvedUrl("../icons/animation_order_search.gif")
                        fillMode: Image.PreserveAspectFit
                        layer.enabled: true
                        layer.effect: OpacityMask {
                            maskSource: Item {
                                width: img.width
                                height: img.height
                                Rectangle {
                                    anchors.centerIn: parent
                                    width: img.adapt ? img.width : Math.min(img.width, img.height)
                                    height: img.adapt ? img.height : width
                                    radius: appTheme.paddingLarge
                                }
                            }
                        }
                    }
                }

            }
        }
    }
}
