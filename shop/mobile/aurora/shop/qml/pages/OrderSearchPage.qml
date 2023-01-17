import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: orderSearchPage

    onStatusChanged: {
        if (status == PageStatus.Active) {
            pageStack.pushAttached(idOrderHistoryPage)
        }
    }

    Components.AppPage {
        header: qsTr("История заказов")

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
                        id: idNumberField
                        placeholderText : qsTr("Номер заказа")
                        singleLine: true
                        onTextChanged: {
                            error = text.length !== 36 ? "Номер заказа должен содержать 36 символов" : ""
                        }
                        error: error
                    }

                    Components.AppButton {
                        width: parent.width
                        text: qsTr("Искать")
                        onEndAnimationClick: {
                            // Change page
//                            pageStack.push(Qt.resolvedUrl("OrderPage.qml"), {orderId: idNumberField.text})
                            pageStack.push(Qt.resolvedUrl("OrderPage.qml"), {orderId: "298cc8bd-eb61-4ab3-970c-ebc85a15e6d0"}) // full
//                            pageStack.push(Qt.resolvedUrl("OrderPage.qml"), {orderId: "02d1c9d4-a8c4-4a9b-943a-404449ae4f2a"}) // min
                            // Run clear field
                            idApp.helper.setTimeout(function() {
                                idNumberField.text = ""
                                idNumberField.error = ""
                            }, 300)
                        }
                        padding: appTheme.paddingLarge
                        disabled: idNumberField.text.length === 0 || idNumberField.error.length !== 0
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
                                    width: img.width
                                    height: img.width
                                    radius: appTheme.paddingLarge
                                }
                            }
                        }
                    }
                }

            }
        }
    }

    Page {
        id: idOrderHistoryPage
        Loader {
            anchors.fill: parent
            source: "OrderHistoryPage.qml";
        }
    }
}
