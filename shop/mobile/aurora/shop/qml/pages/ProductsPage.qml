import QtQuick 2.0
import Sailfish.Silica 1.0
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
        property real min: 0.0
        property real max: 0.0
        property var response
        property bool error: false
        property bool loading: false
        property bool notFound: false
        function clear() {
            min = 0.0
            max = 0.0
            error = false
            loading = false
            notFound = false
            response = undefined
            productsModel.clear()
        }
    }

    function update() {
        // clear state
        state.clear()
        state.loading = true
        // get prices
        agent.run(
            "kmm.Service.get.prices("
                            + '"' + idProductsPage.categories.join(',') + '",'
                            + '"' + idProductsPage.collections.join(',') + '",'
                            + ")",
            function(result) {
                try {
                    var obj = JSON.parse(result)
                    state.min = obj.min
                    state.max = obj.max
                } catch (e) {}
            },
            function(error) {}
        )
        // get products
        agent.run(
            "kmm.Service.get.productsPublished("
                            + '"' + idProductsPage.page + '",'
                            + '"' + idProductsPage.order + '",'
                            + '"' + idProductsPage.range.join(',') + '",'
                            + '"' + idProductsPage.categories.join(',') + '",'
                            + '"' + idProductsPage.collections.join(',') + '",'
                            + "5000)",
            function(result) {
                try {
                    var obj = JSON.parse(result)
                    var pages = obj.pages
                    var products = obj.products
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
            idProductsPage.update()
        }
    }

    Components.AppPage {
        header: qsTr("Продукты")
        anchors.top: controlPanel.bottom
        clip: controlPanel.expanded
        disablePaddingIcons: controlPanel.expanded
        fixed: state.response === undefined
        menuDisabled: state.loading
        menuIsUpdate: true
        menuUpdate: function () {
            idProductsPage.update()
        }

        iconSettings: state.min === 0.0 || state.response === undefined || state.notFound ? undefined : function () {
            controlPanel.open = true
        }
        iconSort1: idProductsPage.order !== "NEWEST" || state.response === undefined || state.notFound ? undefined : function () {
            idProductsPage.order = "LOW"
        }
        iconSort2: idProductsPage.order !== "LOW" || state.response === undefined || state.notFound ? undefined : function () {
            idProductsPage.order = "HEIGHT"
        }
        iconSort3: idProductsPage.order !== "HEIGHT" || state.response === undefined || state.notFound ? undefined : function () {
            idProductsPage.order = "NEWEST"
        }

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: state.notFound ? idApp.colors.highlightDarkColor : 'transparent'
            backgroundColor: state.notFound ? "white" : 'transparent'

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
    }

    DockedPanel {
        id: controlPanel
        dock: Dock.Bottom
        animationDuration: 300
        width: parent.width
        height: 450
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

        Column {
            width: parent.width - appTheme.paddingLarge * 2
            anchors.centerIn: parent

            spacing: appTheme.paddingMedium

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

            QtObject {
                id: idRange
                property real min: state.min
                property real max: state.max
                property real value1: min
                property real value2: max
            }

            Components.RangeSlider {
                from: idRange.min
                to: idRange.max
                firstValue: idRange.value1
                secondValue: idRange.value2
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
