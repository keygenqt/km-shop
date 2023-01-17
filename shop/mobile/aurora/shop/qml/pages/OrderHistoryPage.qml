import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Rectangle {
    id: idOrderHistoryPage
    color: 'transparent'

    onVisibleChanged: {
        if (idOrderHistoryPage.visible) {
            idOrderHistoryPage.loadHistory()
        }
    }

    QtObject {
        id: state
        property var orders: []
    }

    function loadHistory() {
        ordersModel.clear()
        idApp.localStorage.transaction(
            function(tx) {
                var rs = tx.executeSql('SELECT * FROM Orders');
                var result = []
                for (var i = 0; i < rs.rows.length; i++) {
                    result.push(rs.rows.item(i).number)
                    ordersModel.append({
                        number: rs.rows.item(i).number,
                       images: rs.rows.item(i).images,
                       sum: rs.rows.item(i).sum
                    })
                }
                state.orders = result
            }
        )
    }

    ListModel {
        id: ordersModel
    }

    Components.AppPage {
        header: qsTr("История заказов")
        fixed: state.orders.length === 0

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: 'white'
            visible: state.orders.length === 0

            Components.BlockEmpty {
                title: qsTr("Пока нет истории заказов")
                text: qsTr("Здесь будет отображаться история открытых заказов в приложении")
            }
        }

        Column {
            visible: state.orders.length !== 0
            width: parent.width
            spacing: appTheme.paddingMedium

            Repeater {
                model: ordersModel
                delegate: Components.AppBlock {
                    width: parent.width
                    borderColor: idApp.colors.highlightDarkColor
                    disabled: false

                    onEndAnimationClick: pageStack.push(Qt.resolvedUrl("OrderPage.qml"), {orderId: number})

                    Column {
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Row {
                            width: parent.width
                            spacing: appTheme.paddingLarge

                            Components.AppImages {
                                id: img
                                imageUrls: images.split(',')
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
                                        clip: true
                                        width: parent.width
                                        text: "# " + number
                                        wrapMode: Text.NoWrap
                                        elide: Text.ElideRight
                                        font.pixelSize: appTheme.fontSizeH6
                                        color: idApp.colors.highlightDarkColor
                                    }

                                    Text {
                                        width: parent.width
                                        text: idApp.helper.formatPrice(sum)
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
    }
}
