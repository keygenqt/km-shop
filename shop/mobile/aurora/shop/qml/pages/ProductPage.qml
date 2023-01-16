import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: idProductPage

    property int productID: 0
    property string activeImage: ""
    property bool isCart: false

    onStatusChanged: {
        if (status == PageStatus.Active && !Boolean(state.response)) {
            idProductPage.update()
        }
    }

    QtObject {
        id: state
        property var response
        property bool error: false
        property bool loading: false
        property bool notFound: false
        function clear() {
            response = undefined
            notFound = false
            loading = false
            error = false
        }
        function loadingDisable() {
            idApp.helper.setTimeout(function() { loading = false }, 10)
        }
    }

    function update() {
        // clear state
        state.clear()
        state.loading = true
        // run query
        agent.run(
            "kmm.Service.get.product('"+idProductPage.productID+"', 500)",
            function(result) {
                try {
                    state.response = JSON.parse(result)
                    idProductPage.activeImage = state.response.image1
                } catch (e) {
                    state.error = true
                }
                state.loadingDisable()
            },
            function(error) {
                if (error.code === 404) {
                    state.notFound = true
                } else {
                    state.error = true
                }
                state.loadingDisable()
            }
        )
    }

    ListModel {
        id: collectionModel
    }

    Components.AppPage {
        header: state.loading ? qsTr("Загрузка...") : state.response !== undefined ? state.response.name : ""
        fixed: state.response === undefined
        menuDisabled: state.loading
        menuIsUpdate: true
        menuUpdate: function () {
            idProductPage.update()
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
                title: qsTr("Продукт не найден")
                text: qsTr("Что-то пошло не так. Попробуйте перезайти позже")
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
            spacing: appTheme.paddingLarge

            Column {
                width: parent.width
                spacing: appTheme.paddingMedium

                Components.AppImage {
                    width: parent.width
                    iconSize: 100
                    height: 400
                    imageUrl: Qt.resolvedUrl(idProductPage.activeImage)
                }

                Row {
                    width: parent.width
                    spacing: appTheme.paddingMedium
                    visible: state.response !== undefined ? (state.response.image2 !== null || state.response.image3 !== null) : false

                    Components.AppImage {
                        isClickable: true
                        active: idProductPage.activeImage === (state.response !== undefined ? state.response.image1 : "false")
                        iconSize: 40
                        height: 80
                        width: 130
                        radiusMask: appTheme.paddingSmall
                        imageUrl: Qt.resolvedUrl(state.response !== undefined ? state.response.image1 : "")
                        visible: state.response !== undefined ? state.response.image1 !== null : false
                        onEndAnimationClick: {
                            idProductPage.activeImage = state.response.image1
                        }
                    }

                    Components.AppImage {
                        isClickable: true
                        active: idProductPage.activeImage === (state.response !== undefined ? state.response.image2 : "false")
                        iconSize: 40
                        height: 80
                        width: 130
                        radiusMask: appTheme.paddingSmall
                        imageUrl: Qt.resolvedUrl(state.response !== undefined ? state.response.image2 : "")
                        visible: state.response !== undefined ? state.response.image2 !== null : false
                        onEndAnimationClick: {
                            idProductPage.activeImage = state.response.image2
                        }
                    }

                    Components.AppImage {
                        isClickable: true
                        active: idProductPage.activeImage === (state.response !== undefined ? state.response.image3 : "false")
                        iconSize: 40
                        height: 80
                        width: 130
                        radiusMask: appTheme.paddingSmall
                        imageUrl: Qt.resolvedUrl(state.response !== undefined ? state.response.image3 : "")
                        visible: state.response !== undefined ? state.response.image3 !== null : false
                        onEndAnimationClick: {
                            idProductPage.activeImage = state.response.image3
                        }
                    }
                }
            }

            Rectangle {
                id: idRectanglePriceBlock
                height: idLabelPrice.height
                width: idLabelPrice.width
                border.width: 2
                border.color: idApp.colors.highlightDarkColor
                radius: appTheme.shapesLarge

                Label {
                    id: idLabelPrice
                    text: idApp.helper.formatPrice(state.response !== undefined ? state.response.price : 0)
                    font.pixelSize: appTheme.fontSizeBody1
                    topPadding: appTheme.paddingSmall
                    leftPadding: appTheme.paddingMedium
                    rightPadding: appTheme.paddingMedium
                    bottomPadding: appTheme.paddingSmall
                }
            }

            Components.AppBlock {
                width: parent.width
                backgroundColor: "white"
                borderColor: idApp.colors.borderColorBlock
                padding: appTheme.paddingMedium
                spacing: 5

                Column {
                    width: parent.width
                    spacing: appTheme.paddingSmall

                    Text {
                        width: parent.width
                        text: qsTr("Описание")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeH6
                        font.bold: true
                    }

                    Text {
                        width: parent.width
                        text: state.response !== undefined ? state.response.description : ""
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeBody1
                    }
                }

                Rectangle { height: 1; width: 1; color: 'transparent'}
            }

            Row {
                width: parent.width
                spacing: appTheme.paddingMedium

                Components.AppCounter {
                    id: idAppCounter
                }

                Components.AppButton {
                    width: parent.width - idAppCounter.width - appTheme.paddingMedium
                    background: 'black'
                    padding: appTheme.paddingLarge
                    iconStart: idProductPage.isCart ? Qt.resolvedUrl("../icons/ic_rm_shopping.svg") : Qt.resolvedUrl("../icons/ic_add_shopping.svg")
                    text: idProductPage.isCart ? qsTr("Удалить с корзины") : qsTr("Добавить в корзину")
                    onEndAnimationClick: {
                        idProductPage.isCart = !idProductPage.isCart
                    }
                }
            }

            Components.Divider {
                visible: (state.response === undefined ? [] : state.response.collections).length > 0
            }

            Components.RowMultiline {
                visible: (state.response === undefined ? [] : state.response.collections).length > 0
                items: state.response === undefined ? [] : state.response.collections
                delegate: Components.AppBlock {
                    width: idRow.width + appTheme.paddingSmall * 2
                    backgroundColor: "white"
                    padding: appTheme.paddingSmall
                    radius: appTheme.shapesMedium

                    Row {
                        id: idRow
                        spacing: appTheme.paddingSmall

                        Rectangle {
                            id: iconRect
                            width: itLabelName.height - 4
                            height: itLabelName.height - 4
                            anchors.top: parent.top
                            anchors.topMargin: 2
                            color: "transparent"
                            border.color: idApp.colors.highlightDarkColor
                            border.width: 2
                            radius: appTheme.shapesMedium

                            Image {
                                source: Qt.resolvedUrl(idApp.constants.apiUrl + "api/uploads/" + icon)
                                fillMode: Image.PreserveAspectCrop
                                anchors.centerIn: parent
                                sourceSize: Qt.size(parent.height - 15, parent.height - 15)
                                width: parent.height - 15
                                height: parent.height - 15
                                layer.enabled: true
                                layer.effect: ColorOverlay{
                                    color: idApp.colors.highlightDarkColor
                                }
                            }
                        }

                        Label {
                            id: itLabelName
                            text: name
                            font.pixelSize: appTheme.fontSizeBody2
                            bottomPadding: 5
                            color: idApp.colors.highlightDarkColor
                        }
                    }
               }
            }


            Components.Divider {}

            Row {
                width: parent.width
                spacing: appTheme.paddingMedium

                Components.AppBlock {
                    width: (parent.width - appTheme.paddingMedium) / 2
                    backgroundColor: '#E2EDF6'
                    borderColor: '#3E6C91'
                    spacing: appTheme.paddingMedium

                    Image {
                        width: 50
                        height: 50
                        source: Qt.resolvedUrl("../icons/ic_local_shipping.svg")
                        sourceSize: Qt.size(50, 50)
                        fillMode: Image.PreserveAspectFit
                        layer.enabled: true
                        layer.effect: ColorOverlay { color: 'black' }
                    }

                    Text {
                        width: parent.width
                        text: qsTr("Бесплатная доставка")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeH6
                        font.bold: true
                    }

                    Text {
                        width: parent.width
                        text: qsTr("При заказе свыше ₽5000.00")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeBody1
                    }
                }

                Components.AppBlock {
                    width: (parent.width - appTheme.paddingMedium) / 2
                    backgroundColor: '#FBE1EC'
                    borderColor: '#BD7D98'
                    spacing: appTheme.paddingMedium

                    Image {
                        width: 50
                        height: 50
                        source: Qt.resolvedUrl("../icons/ic_wifi_protected_setup.svg")
                        sourceSize: Qt.size(50, 50)
                        fillMode: Image.PreserveAspectFit
                        layer.enabled: true
                        layer.effect: ColorOverlay { color: 'black' }
                    }

                    Text {
                        width: parent.width
                        text: qsTr("Очень легко вернуть")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeH6
                        font.bold: true
                    }

                    Text {
                        width: parent.width
                        text: qsTr("Просто свяжитесь с нам")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeBody1
                    }
                }

            }

            Row {
                width: parent.width
                spacing: appTheme.paddingMedium

                Components.AppBlock {
                    width: (parent.width - appTheme.paddingMedium) / 2
                    backgroundColor: '#EBEBFF'
                    borderColor: '#7B7BBA'
                    spacing: appTheme.paddingMedium

                    Image {
                        width: 50
                        height: 50
                        source: Qt.resolvedUrl("../icons/ic_language.svg")
                        sourceSize: Qt.size(50, 50)
                        fillMode: Image.PreserveAspectFit
                        layer.enabled: true
                        layer.effect: ColorOverlay { color: 'black' }
                    }

                    Text {
                        width: parent.width
                        text: qsTr("Доставка")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeH6
                        font.bold: true
                    }

                    Text {
                        width: parent.width
                        text: qsTr("Быстрая доставка по всей стране")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeBody1
                    }
                }

                Components.AppBlock {
                    width: (parent.width - appTheme.paddingMedium) / 2
                    backgroundColor: '#C6FFF1'
                    borderColor: '#339E7E'
                    spacing: appTheme.paddingMedium

                    Image {
                        width: 50
                        height: 50
                        source: Qt.resolvedUrl("../icons/ic_currency_exchange.svg")
                        sourceSize: Qt.size(50, 50)
                        fillMode: Image.PreserveAspectFit
                        layer.enabled: true
                        layer.effect: ColorOverlay { color: 'black' }
                    }

                    Text {
                        width: parent.width
                        text: qsTr("Возврат")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeH6
                        font.bold: true
                    }

                    Text {
                        width: parent.width
                        text: qsTr("60 дней возврата по любой причине")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignLeft
                        font.pixelSize: appTheme.fontSizeBody1
                    }
                }

            }

        }
    }
}
