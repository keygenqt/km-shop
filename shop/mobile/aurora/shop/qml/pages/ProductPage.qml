import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: idProductPage

    property int productID: 0

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
        header: qsTr("Продукт")
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
            spacing: appTheme.paddingMedium

            Image {
                id: img
                source: Qt.resolvedUrl(state.response !== undefined ? state.response.image1 : "")
                fillMode: Image.PreserveAspectCrop
                width: parent.width
                height: 400
                layer.enabled: true
                layer.effect: OpacityMask {
                    maskSource: Item {
                        width: img.width
                        height: img.height
                        Rectangle {
                            anchors.centerIn: parent
                            width: img.width
                            height: img.height
                            radius: appTheme.paddingMedium
                        }
                    }
                }
            }

            Text {
                width: parent.width
                text: state.response !== undefined ? state.response.name : ""
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeBody1
            }
        }
    }
}
