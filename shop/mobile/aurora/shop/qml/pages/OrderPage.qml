import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: idOrderPage

    property string orderId: ""

    onStatusChanged: {
        if (status == PageStatus.Active && !Boolean(state.response)) {
            idOrderPage.update()
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
                    state.response = JSON.parse(result)
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

            Text {
                width: parent.width
                text: state.response !== undefined ? state.response.phone : ""
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeBody1
            }
        }
    }
}
