import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: idProductsPage
    backNavigation: !controlPanel.expanded

    property int page: 1
    property string order: "NEWEST" // 1 - NEWEST, 2 - LOW, 3 - HEIGHT
    property var range: [0.0, 999999999.0]
    property var categories: []
    property var collections: []

    ListModel {
        id: productsModel
    }

    QtObject {
        id: state
        property int pages: 0
        property real min: 0.0
        property real max: 0.0
        property var response
        property bool error: false
        property bool loading: false
        property bool notFound: false
        function clearPrice() {
            min = 0.0
            max = 0.0
        }
        function clear() {
            error = false
            loading = false
            notFound = false
            productsModel.clear()
        }
    }

    QtObject {
        id: idRange
        property real value1: state.min
        property real value2: state.max
    }

    function isHideSort(key) {
        return idProductsPage.order !== key
                || state.min === 0.0
                || productsModel.count === 1
                || (productsModel.count === 0 && state.response === undefined)
                || (state.response === undefined && !state.loading)
                || state.notFound
                || state.error
    }

    function updatePrice() {
        // clear state
        state.clearPrice()
        // get prices
        agent.run(
            "kmm.Service.get.prices("
                            + '"' + idProductsPage.categories.join(',') + '",'
                            + '"' + idProductsPage.collections.join(',') + '",'
                            + ")",
            function(result) {
                try {
                    var obj = JSON.parse(result)
                    // set state
                    state.min = obj.min
                    state.max = obj.max
                    // set value
                    idRange.value1 = state.min
                    idRange.value2 = state.max
                    // set range
                    idProductsPage.range = [state.min, state.max]
                } catch (e) {}
            },
            function(error) {}
        )
    }

    function update(page) {
        // clear state
        if (page === 1) {
            state.clear()
        }
        state.loading = true
        idProductsPage.page = page
        // get products
        agent.run(
            "kmm.Service.get.productsPublished("
                            + '"' + idProductsPage.page + '",'
                            + '"' + idProductsPage.order + '",'
                            + '"' + idProductsPage.range.join(',') + '",'
                            + '"' + idProductsPage.categories.join(',') + '",'
                            + '"' + idProductsPage.collections.join(',') + '",'
                            + ")",
            function(result) {
                try {
                    var obj = JSON.parse(result)
                    var pages = obj.pages
                    var products = obj.products
                    state.pages = pages
                    state.response = obj
                    for (var index = 0; index < products.length; index++) {
                        productsModel.append(products[index])
                    }
                    state.notFound = products.length === 0
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

    onStatusChanged: {
        if (status == PageStatus.Active && state.response === undefined) {
            idProductsPage.updatePrice()
            idProductsPage.update(1)
        }
    }

    Components.AppNotice {
        id: alarmAddToCart
        text: qsTr("Продукт добавлен в корзину")
    }

    Components.AppNotice {
        id: alarmDelToCart
        text: qsTr("Продукт удален из корзины")
    }

    Components.AppPage {
        id: idAppPage
        header: qsTr("Продукты")
        anchors.top: controlPanel.bottom
        clip: controlPanel.expanded
        disablePaddingIcons: controlPanel.expanded
        fixed: productsModel.count === 0
        menuDisabled: state.loading
        iconsDisabled: state.loading
        menuIsUpdate: true
        menuUpdate: function () {
            state.response = undefined
            idProductsPage.update(1)
        }
        iconSettings: state.min === state.max
                      || (productsModel.count === 0 && state.response === undefined)
                      || state.min === 0.0
                      || (state.response === undefined && !state.loading)
                      || state.notFound
                      || state.error ? undefined : function () {
            controlPanel.open = true
        }
        iconSort1: isHideSort("NEWEST") ? undefined : function () {
            idProductsPage.order = "LOW"
            idProductsPage.update(1)
        }
        iconSort2: isHideSort("LOW") ? undefined : function () {
            idProductsPage.order = "HEIGHT"
            idProductsPage.update(1)
        }
        iconSort3: isHideSort("HEIGHT") ? undefined : function () {
            idProductsPage.order = "NEWEST"
            idProductsPage.update(1)
        }

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: state.notFound ? idApp.colors.highlightDarkColor : 'transparent'
            backgroundColor: state.notFound ? "white" : 'transparent'
            visible: (productsModel.count === 0 || state.notFound || state.error) && idProductsPage.page === 1

            Components.BlockEmpty {
                visible: state.notFound
                title: qsTr("Товары не найдены")
                text: idProductsPage.categories.length === 0
                      ? qsTr("В этой коллекции товаров пока нет. Попробуйте зайти позже")
                      : qsTr("В этой категории товаров пока нет. Попробуйте зайти позже")
            }

            Components.BlockLoading {
                visible: state.loading
            }

            Components.BlockError {
                visible: state.error
            }
        }

        Column {
            width: parent.width
            spacing: appTheme.paddingMedium
            visible: !(productsModel.count === 0 || state.notFound || state.error) || idProductsPage.page !== 1

            Repeater {
                model: productsModel
                delegate: Components.AppBlock {
                    width: parent.width
                    borderColor: idApp.colors.highlightDarkColor
                    disabled: controlPanel.expanded

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
                            spacing: 0

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
                                width: parent.width - idRectanglePriceBlock.width - idAppIconButtonCart.width
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
                                        alarmDelToCart.show()
                                    } else {
                                        alarmAddToCart.show()
                                        idApp.cart.add({
                                            'id': id,
                                            'count': idApp.cart.count(id) + 1,
                                            'price': price
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }

            Rectangle {
                id: idLoaderRectangle
                height: 120
                width: parent.width
                color: 'transparent'
                visible: idProductsPage.page < state.pages && productsModel.count > 0 || state.loading && idProductsPage.page > 1

                Components.BlockLoading {
                    size: 60
                    width: 60
                    anchors.centerIn: parent
                }
            }
        }

        endScrollPadding: idLoaderRectangle.height
        onEndScroll: {
            if (!state.loading && idProductsPage.page < state.pages) {
                idProductsPage.update(idProductsPage.page + 1)
            }
        }
    }

    DockedPanel {
        id: controlPanel
        dock: Dock.Bottom
        animationDuration: 300
        width: parent.width
        height: 430
        modal: true
        background: Rectangle {
            color: idApp.colors.highlightDarkColor
            radius: appTheme.paddingLarge

            Rectangle {
                color: idApp.colors.highlightDarkColor
                height: appTheme.paddingLarge
                width: parent.width
                anchors.bottom: parent.bottom
                anchors.margins: 0
            }
        }

        onExpandedChanged: {
            if (!controlPanel.expanded) {
                if (idProductsPage.range[0] !== idRange.value1 || idProductsPage.range[1] !== idRange.value2) {
                    idProductsPage.range = [idRange.value1, idRange.value2]
                    idProductsPage.update(1)
                }
            }
        }

        Rectangle {
            color: 'transparent'
            anchors.fill: parent

            Rectangle {
                width: parent.width

                Components.AppIconButton {
                    icon {
                        layer.enabled: true
                        layer.effect: ColorOverlay{
                            color: idApp.colors.highlightDarkColor
                        }
                    }
                    bg {
                        color: "white"
                        opacity: 1.0
                    }
                    size: 50
                    icon.source: Qt.resolvedUrl("../icons/ic_close.svg")
                    anchors.top: parent.top
                    anchors.topMargin: appTheme.paddingLarge
                    anchors.right: parent.right
                    anchors.rightMargin: appTheme.paddingLarge
                    onEndAnimationClick: {
                        controlPanel.hide()
                        if (idProductsPage.range[0] !== idRange.value1 || idProductsPage.range[1] !== idRange.value2) {
                            idProductsPage.range = [idRange.value1, idRange.value2]
                            idProductsPage.update(1)
                        }
                    }
                }
            }

            Column {
                width: parent.width - appTheme.paddingLarge * 2
                anchors.centerIn: parent
                spacing: 0

                Column {
                    width: parent.width
                    spacing: appTheme.paddingMedium

                    Text {
                        color: "white"
                        width: parent.width
                        text: qsTr("Диапазон цен")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignHCenter
                        font.pixelSize: appTheme.fontSizeH6
                        font.bold: true
                    }

                    Text {
                        color: "white"
                        width: parent.width
                        text: qsTr("Фильтр товаров по ценовому диапозону")
                        wrapMode: Text.WordWrap
                        horizontalAlignment: Text.AlignHCenter
                        font.pixelSize: appTheme.fontSizeBody1
                    }
                }

                Components.RangeSlider {
                    disabled: state.loading
                    from: state.min
                    to: state.max
                    onMoveFirst: {
                        idRange.value1 = value
                    }
                    onMoveSecond: {
                        idRange.value2 = value
                    }
                }

                Row {
                    width: parent.width

                    Label {
                        id: idPrice1
                        text: idApp.helper.formatPrice(idRange.value1)
                        color: "white"
                        font.pixelSize: appTheme.fontSizeH6
                        font.bold: true
                    }

                    Rectangle {
                        height: 1
                        width: parent.width - idPrice1.width - idPrice2.width
                        color: 'transparent'
                    }

                    Label {
                        id: idPrice2
                        text: idApp.helper.formatPrice(idRange.value2)
                        color: "white"
                        font.pixelSize: appTheme.fontSizeH6
                        font.bold: true
                    }
                }
            }
        }
    }
}
