import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: contactFormPage

    QtObject {
        id: state
        property bool error: false
        property bool success: false
        property bool loading: false
    }

    function send() {

        state.error = false
        state.success = false
        state.loading = true

        agent.run(
            "kmm.Requests.get.categoriesPublished(5000)",
            function(result) {
                state.success = true
                state.loading = false
            },
            function(error) {
                state.error = true
                state.loading = false
            }
        )
    }

    Components.AppPage {
        header: qsTr("Сообщение")
        fixed: false

        Components.AlertSuccess {
            text: qsTr("Ваше сообщение отправлено. Спасибо!")
            visible: state.success
            onClose: state.success = false
        }

        Components.AlertError {
            text: qsTr("Ошибка отправки попробуйте позже")
            visible: state.error
            onClose: state.error = false
        }

        Components.AppBlock {
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: "white"

            Column {
                width: parent.width
                spacing: appTheme.paddingLarge

                Text {
                    width: parent.width
                    text: qsTr("Напишите нам сообщение")
                    wrapMode: Text.WordWrap
                    horizontalAlignment: Text.AlignLeft
                    font.pixelSize: appTheme.fontSizeH6
                    font.bold: true
                }

                Text {
                    width: parent.width
                    text: qsTr("Мы обязательно прочтем и ответим, если в ответе будет необходимость")
                    wrapMode: Text.WordWrap
                    horizontalAlignment: Text.AlignLeft
                    font.pixelSize: appTheme.fontSizeBody1
                }

                Components.AppTextField {
                    placeholderText : qsTr("Email")
                    singleLine: true
                    disabled: state.loading
                }

                Components.AppTextField {
                    placeholderText : qsTr("Имя")
                    singleLine: true
                    disabled: state.loading
                }

                Components.AppTextField {
                    placeholderText : qsTr("Фамилия (по желанию)")
                    singleLine: true
                    disabled: state.loading
                }

                Components.AppTextField {
                    placeholderText : qsTr("Телефон (по желанию)")
                    singleLine: true
                    disabled: state.loading
                }

                Components.AppTextField {
                    placeholderText : qsTr("Сообщение")
                    singleLine: false
                    disabled: state.loading
                }

                Components.AppButton {
                    width: parent.width
                    text: qsTr("Отправить")
                    onEndAnimationClick: contactFormPage.send()
                    padding: appTheme.paddingLarge
                    disabled: state.loading
                }
            }
        }
    }
}
