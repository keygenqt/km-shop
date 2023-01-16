import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: idOrderPage

    property string orderId: ""

    onStatusChanged: {
        if (status == PageStatus.Active && !Boolean(state.response)) {
            idOrderPage.update()
        }
    }

    ListModel {
        id: productsModel
    }

    QtObject {
        id: state
        property var response
        property bool error: false
        property bool loading: false
        property bool notFound: false
        function clear() {
            productsModel.clear()
            response = undefined
            notFound = false
            loading = false
            error = false
        }
    }

    function update() {
        // clear state
        state.clear()
        state.loading = true
        // run query
        agent.run(
            "kmm.Service.get.orderByNumber('"+idOrderPage.orderId+"', 500)",
            function(result) {
                try {
                    var obj = JSON.parse(result)
                    var products = obj.products
                    state.response = obj
                    for (var index = 0; index < products.length; index++) {
                        productsModel.append(products[index])
                    }
                } catch (e) {
                    state.error = true
                }
                state.loading = false
            },
            function(error) {
                if (error.code === 404) {
                    state.notFound = true
                } else {
                    state.error = true
                }
                state.loading = false
            }
        )
    }

    Components.AppPage {
        header: qsTr("Заказ")
        fixed: state.response === undefined
        menuDisabled: state.loading
        menuIsUpdate: true
        menuUpdate: function () {
            idOrderPage.update()
        }

        Components.AppBlock {
            id: idStateBlock
            height: parent.height
            width: parent.width
            borderColor: state.notFound || state.response !== undefined ? idApp.colors.highlightDarkColor : 'transparent'
            backgroundColor: state.notFound || state.response !== undefined ? "white" : 'transparent'
            visible: state.notFound || state.loading || state.error || state.response === undefined

            Components.BlockEmpty {
                visible: state.notFound
                title: qsTr("Заказ не найден")
                text: qsTr("К сожалению, запрошенная вами страница не найдена")
            }

            Components.BlockLoading {
                visible: state.loading
            }

            Components.BlockError {
                visible: state.error
            }
        }

        Column {
            visible: !idStateBlock.visible
            width: parent.width
            spacing: appTheme.paddingMedium

            Components.AppBlock {
                width: parent.width
                backgroundColor: "white"
                borderColor: idApp.colors.borderColorBlock
                padding: appTheme.paddingLarge
                spacing: 5

                Column {
                    width: parent.width
                    spacing: appTheme.paddingLarge

                    Row {
                        width: parent.width
                        spacing: 15

                        Image {
                            width: 40
                            height: 40
                            source: Qt.resolvedUrl("../icons/ic_format_list_bulleted.svg")
                            sourceSize: Qt.size(40, 40)
                            fillMode: Image.PreserveAspectFit
                            anchors.top: parent.top
                            anchors.topMargin: 4
                            layer.enabled: true
                            layer.effect: ColorOverlay { color: 'black' }
                        }

                        Text {
                            width: parent.width
                            text: qsTr("Список товаров")
                            color: 'black'
                            wrapMode: Text.WordWrap
                            horizontalAlignment: Text.AlignLeft
                            font.pixelSize: appTheme.fontSizeH6
                            anchors.verticalCenter: parent.verticalCenter
                        }
                    }

                    Column {
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Repeater {
                            model: productsModel
                            delegate: Components.AppBlock {
                                width: parent.width
                                backgroundColor: idApp.colors.highlightDarkColor
                                borderColor: idApp.colors.highlightDarkColor
                                backgroundOpacity: 0.1
                                padding: appTheme.paddingMedium
                                disabled: false
                                onEndAnimationClick: pageStack.push(Qt.resolvedUrl("ProductPage.qml"), {productID: product.id})

                                Column {
                                    width: parent.width
                                    spacing: appTheme.paddingMedium

                                    Row {
                                        width: parent.width
                                        spacing: appTheme.paddingLarge

                                        Components.AppImage {
                                            id: img
                                            imageUrl: Qt.resolvedUrl(product.image1)
                                        }

                                        Rectangle {
                                            color: 'transparent'
                                            height: iconData.height
                                            width: parent.width - img.width - appTheme.paddingLarge
                                            anchors.verticalCenter: parent.verticalCenter

                                            Column {
                                                id: iconData
                                                width: parent.width
                                                spacing: appTheme.paddingSmall
                                                anchors.top: parent.top
                                                anchors.topMargin: -3

                                                Text {
                                                    width: parent.width
                                                    text: product.name
                                                    wrapMode: Text.WordWrap
                                                    font.pixelSize: appTheme.fontSizeH6
                                                }

                                                Text {
                                                    width: parent.width
                                                    text: idApp.helper.formatPrice(price) + " x " + count
                                                    wrapMode: Text.WordWrap
                                                    font.pixelSize: appTheme.fontSizeCaption
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    Text {
                        width: parent.width
                        text: qsTr("Общая сумма: ") + idApp.helper.formatPrice(state.response !== undefined ? state.response.sum : 0)
                        color: 'black'
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignRight
                        font.pixelSize: appTheme.fontSizeBody1
                    }
                }
            }

            Components.AppBlock {
                width: parent.width
                backgroundColor: "white"
                borderColor: idApp.colors.borderColorBlock
                padding: appTheme.paddingLarge
                spacing: 5

                Column {
                    width: parent.width
                    spacing: appTheme.paddingLarge

                    Row {
                        width: parent.width
                        spacing: 15

                        Image {
                            width: 40
                            height: 40
                            source: Qt.resolvedUrl("../icons/ic_info.svg")
                            sourceSize: Qt.size(40, 40)
                            fillMode: Image.PreserveAspectFit
                            anchors.top: parent.top
                            anchors.topMargin: 4
                            layer.enabled: true
                            layer.effect: ColorOverlay { color: 'black' }
                        }

                        Text {
                            width: parent.width
                            text: qsTr("Статус заказа")
                            color: 'black'
                            wrapMode: Text.WordWrap
                            horizontalAlignment: Text.AlignLeft
                            font.pixelSize: appTheme.fontSizeH6
                            anchors.verticalCenter: parent.verticalCenter
                        }
                    }

                    Column {
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Components.AppBlock {
                            id: idAppBlockState
                            width: parent.width
                            backgroundColor: idApp.colors.highlightDarkColor
                            borderColor: idApp.colors.highlightDarkColor
                            backgroundOpacity: 0.1
                            padding: appTheme.paddingMedium
                            spacing: 5
                            visible: idAppBlockState.state !== ""
                            readonly property string state: state.response !== undefined ? state.response.state : ""

                            Column {
                                width: parent.width
                                spacing: appTheme.paddingSmall

                                Row {
                                    width: parent.width
                                    spacing: 15
                                    visible: idAppBlockState.state === "NEW"

                                    Image {
                                        id: idIconStateNEW
                                        width: 40
                                        height: 40
                                        source: Qt.resolvedUrl("../icons/ic_new_releases.svg")
                                        sourceSize: Qt.size(40, 40)
                                        fillMode: Image.PreserveAspectFit
                                        anchors.top: parent.top
                                        anchors.topMargin: 4
                                        layer.enabled: true
                                        layer.effect: ColorOverlay { color: '#A63FC2' }
                                    }

                                    Text {
                                        width: parent.width - idIconStateNEW.width - parent.spacing
                                        text: qsTr("Новый")
                                        color: 'black'
                                        wrapMode: Text.WordWrap
                                        horizontalAlignment: Text.AlignLeft
                                        font.pixelSize: appTheme.fontSizeBody1
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }
                                Row {
                                    width: parent.width
                                    spacing: 15
                                    visible: idAppBlockState.state === "PENDING"

                                    Image {
                                        id: idIconStatePENDING
                                        width: 40
                                        height: 40
                                        source: Qt.resolvedUrl("../icons/ic_pending_actions.svg")
                                        sourceSize: Qt.size(40, 40)
                                        fillMode: Image.PreserveAspectFit
                                        anchors.top: parent.top
                                        anchors.topMargin: 4
                                        layer.enabled: true
                                        layer.effect: ColorOverlay { color: '#2b96f1' }
                                    }

                                    Text {
                                        width: parent.width - idIconStatePENDING.width - parent.spacing
                                        text: qsTr("В ожидании")
                                        color: 'black'
                                        wrapMode: Text.WordWrap
                                        horizontalAlignment: Text.AlignLeft
                                        font.pixelSize: appTheme.fontSizeBody1
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }
                                Row {
                                    width: parent.width
                                    spacing: 15
                                    visible: idAppBlockState.state === "COMPLETED"

                                    Image {
                                        id: idIconStateCOMPLETED
                                        width: 40
                                        height: 40
                                        source: Qt.resolvedUrl("../icons/ic_verified.svg")
                                        sourceSize: Qt.size(40, 40)
                                        fillMode: Image.PreserveAspectFit
                                        anchors.top: parent.top
                                        anchors.topMargin: 4
                                        layer.enabled: true
                                        layer.effect: ColorOverlay { color: '#22C55E' }
                                    }

                                    Text {
                                        width: parent.width - idIconStateCOMPLETED.width - parent.spacing
                                        text: qsTr("Завершенный")
                                        color: 'black'
                                        wrapMode: Text.WordWrap
                                        horizontalAlignment: Text.AlignLeft
                                        font.pixelSize: appTheme.fontSizeBody1
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }
                                Row {
                                    width: parent.width
                                    spacing: 15
                                    visible: idAppBlockState.state === "CANCELED"

                                    Image {
                                        id: idIconStateCANCELED
                                        width: 40
                                        height: 40
                                        source: Qt.resolvedUrl("../icons/ic_block.svg")
                                        sourceSize: Qt.size(40, 40)
                                        fillMode: Image.PreserveAspectFit
                                        anchors.top: parent.top
                                        anchors.topMargin: 4
                                        layer.enabled: true
                                        layer.effect: ColorOverlay { color: '#E93B9F' }
                                    }

                                    Text {
                                        width: parent.width - idIconStateCANCELED.width - parent.spacing
                                        text: qsTr("Отменено")
                                        color: 'black'
                                        wrapMode: Text.WordWrap
                                        horizontalAlignment: Text.AlignLeft
                                        font.pixelSize: appTheme.fontSizeBody1
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }
                            }
                        }

                        Components.AppBlock {
                            id: idAppBlockNote
                            width: parent.width
                            backgroundColor: idApp.colors.highlightDarkColor
                            borderColor: idApp.colors.highlightDarkColor
                            backgroundOpacity: 0.1
                            padding: appTheme.paddingMedium
                            spacing: 5
                            visible: idAppBlockNote.note !== ""
                            readonly property string note: state.response !== undefined ? state.response.note : ""

                            Column {
                                width: parent.width
                                spacing: appTheme.paddingSmall

                                Row {
                                    width: parent.width
                                    spacing: 15

                                    Image {
                                        id: idIconNote
                                        width: 40
                                        height: 40
                                        source: Qt.resolvedUrl("../icons/ic_note.svg")
                                        sourceSize: Qt.size(40, 40)
                                        fillMode: Image.PreserveAspectFit
                                        anchors.top: parent.top
                                        anchors.topMargin: 1
                                        layer.enabled: true
                                        layer.effect: ColorOverlay { color: idApp.colors.highlightDarkColor }
                                    }

                                    Text {
                                        width: parent.width - idIconNote.width - parent.spacing
                                        text: idAppBlockNote.note
                                        color: 'black'
                                        wrapMode: Text.WordWrap
                                        horizontalAlignment: Text.AlignLeft
                                        font.pixelSize: appTheme.fontSizeBody1
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }

                            }
                        }
                    }
                }
            }

            Components.AppBlock {
                width: parent.width
                backgroundColor: "white"
                borderColor: idApp.colors.borderColorBlock
                padding: appTheme.paddingLarge
                spacing: 5

                Column {
                    width: parent.width
                    spacing: appTheme.paddingLarge

                    Row {
                        width: parent.width
                        spacing: 15

                        Image {
                            width: 40
                            height: 40
                            source: Qt.resolvedUrl("../icons/ic_person.svg")
                            sourceSize: Qt.size(40, 40)
                            fillMode: Image.PreserveAspectFit
                            anchors.top: parent.top
                            anchors.topMargin: 4
                            layer.enabled: true
                            layer.effect: ColorOverlay { color: 'black' }
                        }

                        Text {
                            width: parent.width
                            text: qsTr("Сведения о клиенте")
                            color: 'black'
                            wrapMode: Text.WordWrap
                            horizontalAlignment: Text.AlignLeft
                            font.pixelSize: appTheme.fontSizeH6
                            anchors.verticalCenter: parent.verticalCenter
                        }
                    }

                    Column {
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Components.AppBlock {
                            id: idAppBlockPhone
                            width: parent.width
                            backgroundColor: idApp.colors.highlightDarkColor
                            borderColor: idApp.colors.highlightDarkColor
                            backgroundOpacity: 0.1
                            padding: appTheme.paddingMedium
                            spacing: 5
                            visible: idAppBlockPhone.phone !== ""
                            readonly property string phone: state.response !== undefined ? state.response.phone : ""

                            Column {
                                width: parent.width
                                spacing: appTheme.paddingSmall


                                Row {
                                    width: parent.width
                                    spacing: 15

                                    Image {
                                        id: idIconPhone
                                        width: 40
                                        height: 40
                                        source: Qt.resolvedUrl("../icons/ic_phone.svg")
                                        sourceSize: Qt.size(40, 40)
                                        fillMode: Image.PreserveAspectFit
                                        anchors.top: parent.top
                                        anchors.topMargin: 2
                                        layer.enabled: true
                                        layer.effect: ColorOverlay { color: idApp.colors.highlightDarkColor }
                                    }

                                    Text {
                                        width: parent.width - idIconPhone.width - parent.spacing
                                        text: idAppBlockPhone.phone
                                        color: 'black'
                                        wrapMode: Text.WordWrap
                                        horizontalAlignment: Text.AlignLeft
                                        font.pixelSize: appTheme.fontSizeBody1
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }

                            }
                        }

                        Components.AppBlock {
                            id: idAppBlockEmail
                            width: parent.width
                            backgroundColor: idApp.colors.highlightDarkColor
                            borderColor: idApp.colors.highlightDarkColor
                            backgroundOpacity: 0.1
                            padding: appTheme.paddingMedium
                            spacing: 5
                            visible: idAppBlockEmail.email !== ""
                            readonly property string email: state.response !== undefined ? state.response.email : ""

                            Column {
                                width: parent.width
                                spacing: appTheme.paddingSmall

                                Row {
                                    width: parent.width
                                    spacing: 15

                                    Image {
                                        id: idIconEmail
                                        width: 40
                                        height: 40
                                        source: Qt.resolvedUrl("../icons/ic_email.svg")
                                        sourceSize: Qt.size(40, 40)
                                        fillMode: Image.PreserveAspectFit
                                        anchors.top: parent.top
                                        anchors.topMargin: 0
                                        layer.enabled: true
                                        layer.effect: ColorOverlay { color: idApp.colors.highlightDarkColor }
                                    }

                                    Text {
                                        width: parent.width - idIconEmail.width - parent.spacing
                                        text: idAppBlockEmail.email
                                        color: 'black'
                                        wrapMode: Text.WordWrap
                                        horizontalAlignment: Text.AlignLeft
                                        font.pixelSize: appTheme.fontSizeBody1
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }

                            }
                        }

                        Components.AppBlock {
                            id: idAppBlockAddress
                            width: parent.width
                            backgroundColor: idApp.colors.highlightDarkColor
                            borderColor: idApp.colors.highlightDarkColor
                            backgroundOpacity: 0.1
                            padding: appTheme.paddingMedium
                            spacing: 5
                            visible: idAppBlockAddress.address !== ""
                            readonly property string address: state.response !== undefined ? state.response.address : ""

                            Column {
                                width: parent.width
                                spacing: appTheme.paddingSmall

                                Row {
                                    width: parent.width
                                    spacing: 15

                                    Image {
                                        id: idIconAddress
                                        width: 40
                                        height: 40
                                        source: Qt.resolvedUrl("../icons/ic_map.svg")
                                        sourceSize: Qt.size(40, 40)
                                        fillMode: Image.PreserveAspectFit
                                        anchors.top: parent.top
                                        anchors.topMargin: 4
                                        layer.enabled: true
                                        layer.effect: ColorOverlay { color: idApp.colors.highlightDarkColor }
                                    }

                                    Text {
                                        width: parent.width - idIconAddress.width - parent.spacing
                                        text: idAppBlockAddress.address
                                        color: 'black'
                                        wrapMode: Text.WordWrap
                                        horizontalAlignment: Text.AlignLeft
                                        font.pixelSize: appTheme.fontSizeBody1
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }
    }
}
