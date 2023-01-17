import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: idCartPage

    forwardNavigation: !idApp.cart.isEmpty()

    onStatusChanged: {
        // get products
        if (status == PageStatus.Active
                && !idApp.cart.isEmpty()
                && state.response === undefined) {
            pageStack.pushAttached(orderCreatePage)
            idCartPage.update()
        }
        // clear item if remove from cart
        else if (status == PageStatus.Active
                   && state.response !== undefined
                   && state.response.length !== idApp.cart.getIds().length) {
            // clear model list
            productsModel.clear()
            // start update
            var products = state.response
            var updateList = []
            for (var i = 0; i < products.length; i++) {
                if (idApp.cart.has(products[i].id)) {
                    updateList.push(products[i])
                }
            }
            for (var j = 0; j < updateList.length; j++) {
                productsModel.append(updateList[j])
            }
            // save state
            state.response = updateList
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
        function clear() {
            error = false
            loading = false
            response = undefined
            productsModel.clear()
        }
    }

    function update() {
        // clear state
        state.clear()
        state.loading = true
        // get products
        agent.run(
            "kmm.Service.get.productsPublishedByIDs("
                            + '"' + idApp.cart.getIds().join(',') + '",'
                            + ")",
            function(result) {
                try {
                    var obj = JSON.parse(result)
                    state.response = obj
                    for (var index = 0; index < obj.length; index++) {
                        productsModel.append(obj[index])
                    }
                } catch (e) {
                    state.error = true
                }
                state.loading = false
            },
            function(error) {
                state.error = true
                state.loading = false
            }
        )
    }

    Components.AppPage {
        header: idApp.cart.isEmpty() ? qsTr("Корзина") : qsTr("Оформить")
        selectedPage: "itemMenuCart"
        fixed: idApp.cart.isEmpty() || state.loading || state.error
        iconSearch: function () {
            pageStack.push(Qt.resolvedUrl("OrderSearchPage.qml"))
        }

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: idApp.cart.isEmpty() ? idApp.colors.highlightDarkColor : 'transparent'
            backgroundColor: idApp.cart.isEmpty() ? 'white' : 'transparent'
            visible: idApp.cart.isEmpty() || state.loading || state.error

            Components.BlockEmptyCart {
                visible: idApp.cart.isEmpty()
            }

            Components.BlockLoading {
                visible: state.loading
            }

            Components.BlockError {
                visible: state.error
            }
        }

        Column {
            visible: productsModel.count !== 0
            width: parent.width
            spacing: appTheme.paddingMedium

            Repeater {
                model: productsModel
                delegate: Components.AppBlock {
                    width: parent.width
                    borderColor: idApp.colors.highlightDarkColor
                    disabled: false

                    onEndAnimationClick: pageStack.push(Qt.resolvedUrl("ProductPage.qml"), {productID: id})

                    Column {
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Row {
                            width: parent.width
                            spacing: appTheme.paddingLarge

                            Components.AppImage {
                                id: img
                                imageUrl: Qt.resolvedUrl(image1)
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
                                        text: name
                                        wrapMode: Text.WordWrap
                                        font.pixelSize: appTheme.fontSizeH6
                                        color: idApp.colors.highlightDarkColor
                                    }

                                    Text {
                                        width: parent.width
                                        text: description
                                        wrapMode: Text.WordWrap
                                        font.pixelSize: appTheme.fontSizeCaption
                                    }
                                }
                            }
                        }

                        Components.Divider {}

                        Row {
                            width: parent.width
                            spacing: appTheme.paddingSmall

                            Components.AppCounter {
                                id: idAppCounter
                                isSmall: true
                                count: idApp.cart.count(id)
                                onAddCount: {
                                    idApp.cart.add({
                                        'id': id,
                                        'count': idApp.cart.count(id) + 1,
                                        'price': price
                                    })
                                }
                                onDelCount: {
                                    idApp.cart.del(id)
                                }
                            }

                            Rectangle {
                                id: idRectanglePriceBlock
                                height: idLabelPrice.height
                                width: idLabelPrice.width
                                border.width: 2
                                border.color: idApp.colors.highlightDarkColor
                                radius: appTheme.shapesMedium

                                Label {
                                    id: idLabelPrice
                                    text: idApp.helper.formatPrice(price)
                                    color: idApp.colors.highlightDarkColor
                                    font.pixelSize: appTheme.fontSizeBody2
                                    topPadding: 10
                                    leftPadding: 16
                                    rightPadding: 16
                                    bottomPadding: 10
                                }
                            }

                            Rectangle {
                                width: parent.width - idRectanglePriceBlock.width - idAppIconButtonCart.width - idAppCounter.width - appTheme.paddingSmall * 2
                                height: 1
                                color: 'transparent'
                            }

                            Components.AppIconButton {
                                id: idAppIconButtonCart
                                icon {
                                    layer.enabled: true
                                    layer.effect: ColorOverlay{
                                        color: idApp.cart.has(id) ? idApp.colors.highlightDarkColor : 'black'
                                    }
                                }
                                size: idRectanglePriceBlock.height
                                icon.source: Qt.resolvedUrl("../icons/ic_add_shopping.svg")
                                onEndAnimationClick: {
                                    if (idApp.cart.has(id)) {
                                        idApp.cart.clear(id)
                                        productsModel.remove(index)
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
    }

    Page {
        id: orderCreatePage
        Loader {
            anchors.fill: parent
            source: "OrderCreatePage.qml";
        }
    }
}
