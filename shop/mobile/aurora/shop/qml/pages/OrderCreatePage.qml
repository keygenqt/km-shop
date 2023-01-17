import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Rectangle {
    id: idOrderCreatePage
    color: 'transparent'

    property string orderNumber: ""

    onVisibleChanged: {
        state.clear()
    }

    QtObject {
        id: state
        property bool error: false
        property string orderNumber: ""
        property bool loading: false
        function clear() {
            state.error = false
            state.loading = false
        }
    }

    function send() {

        state.clear()
        state.loading = true

        agent.run(
            'kmm.Service.post.orderCreate('
                    + '"' + idFieldEmail.text + '",'
                    + '"' + idFieldPhone.text + '",'
                    + '"' + idFieldAddress.text + '",'
                    + "'" + idApp.cart.getStringify() + "',"
                    + '500)',
            function(result) {
                var obj = JSON.parse(result)
                var products = obj.products
                // set number to page
                state.orderNumber = obj.number
                // save to cache
                var images = []
                for (var index = 0; index < products.length; index++) {
                    images.push(products[index].product.image1)
                }
                idApp.localStorage.transaction(
                    function(tx) {
                        tx.executeSql('INSERT INTO Orders VALUES(?, ?, ?)', [ obj.number, images.join(','), obj.sum]);
                    }
                )
                // clear fields
                idFieldEmail.text = ''
                idFieldPhone.text = ''
                idFieldAddress.text = ''
                // clear state
                state.clear()
                // clear cart
                idApp.cart.clearAll()
            },
            function(error) {
                if (JSON.stringify(error).indexOf('"validate":[{') !== -1) {
                    idFieldEmail.error = idApp.helper.findError('email', error.validate)
                    idFieldPhone.error = idApp.helper.findError('phone', error.validate)
                    idFieldAddress.error = idApp.helper.findError('address', error.validate)
                } else {
                    state.error = true
                }
                state.loading = false
            }
        )
    }

    Components.AppPage {
        header: qsTr("Оформление заказа")
        fixed: state.orderNumber.length !== 0
        loading: state.loading

        Components.AlertError {
            text: qsTr("Ошибка отправки попробуйте позже")
            visible: state.error
            onClose: state.error = false
        }

        Components.AppBlock {
            height: state.orderNumber.length !== 0 ? parent.height : idContentForm.height + appTheme.paddingLarge * 2
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: "white"

            Column {
                visible: state.orderNumber.length !== 0
                width: parent.width
                spacing: appTheme.paddingLarge

                Rectangle {
                    height: 300
                    width: 300
                    color: 'transparent'
                    anchors.horizontalCenter: parent.horizontalCenter

                    AnimatedImage {
                        id: img
                        anchors.top: parent.top
                        anchors.left: parent.left
                        anchors.right: parent.right
                        anchors.bottom: parent.bottom
                        source: Qt.resolvedUrl("../icons/animation_success_order.gif")
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

                Text {
                    width: parent.width
                    text: qsTr("Заказ оформлен!")
                    wrapMode: Text.WordWrap
                    horizontalAlignment: Text.AlignHCenter
                    font.pixelSize: appTheme.fontSizeH6
                    font.bold: true
                }

                Text {
                    width: parent.width
                    text: qsTr("Спасибо за ваш заказ. С вами свяжутся для уточнения деталей заказа. До скорого!")
                    wrapMode: Text.WordWrap
                    horizontalAlignment: Text.AlignHCenter
                    font.pixelSize: appTheme.fontSizeBody1
                }

                Components.AppButton {
                    text: qsTr("Информация по заказу")
                    onEndAnimationClick: {
                        pageStack.navigateBack(PageStackAction.Immediate)
                        pageStack.push(Qt.resolvedUrl("OrderPage.qml"), {orderId: state.orderNumber}, PageStackAction.Immediate)
                    }
                    padding: appTheme.paddingMedium
                    anchors.horizontalCenter: parent.horizontalCenter
                }

                Rectangle {
                    color: 'transparent'
                    height: 40
                    width: 1
                }
            }

            Column {
                id: idContentForm
                visible: state.orderNumber.length === 0
                width: parent.width
                spacing: appTheme.paddingLarge

                Text {
                    width: parent.width
                    text: qsTr("Контактная информация")
                    wrapMode: Text.WordWrap
                    horizontalAlignment: Text.AlignLeft
                    font.pixelSize: appTheme.fontSizeH6
                    font.bold: true
                }

                Text {
                    width: parent.width
                    text: qsTr("Введите свои контактные данные, чтобы с вами можно было связаться и уточнить все необходимые данные по заказу.")
                    wrapMode: Text.WordWrap
                    horizontalAlignment: Text.AlignLeft
                    font.pixelSize: appTheme.fontSizeBody1
                }

                Components.AppTextField {
                    id: idFieldPhone
                    inputMethodHints: Qt.ImhDialableCharactersOnly
                    placeholderText : qsTr("Телефон")
                    singleLine: true
                    disabled: state.loading
                    onTextChanged: error = ""
                }

                Components.AppTextField {
                    id: idFieldEmail
                    inputMethodHints: Qt.ImhEmailCharactersOnly | Qt.ImhNoPredictiveText
                    placeholderText : qsTr("Email (по желанию)")
                    singleLine: true
                    disabled: state.loading
                    onTextChanged: error = ""
                }

                Components.AppTextField {
                    id: idFieldAddress
                    placeholderText : qsTr("Адрес (по желанию)")
                    singleLine: false
                    disabled: state.loading
                    onTextChanged: error = ""
                }

                Components.AppButton {
                    width: parent.width
                    text: qsTr("Отправить")
                    onEndAnimationClick: idOrderCreatePage.send()
                    padding: appTheme.paddingLarge
                    disabled: state.loading
                    loading: state.loading
                }
            }
        }
    }
}
