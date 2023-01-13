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
            'kmm.Service.post.message('
                    + 'new kmm.AppRequests.MessageRequest('
                            + '"' + idFieldFname.text + '",'
                            + '"' + idFieldLName.text + '",'
                            + '"' + idFieldEmail.text + '",'
                            + '"' + idFieldPhone.text + '",'
                            + '"' + idFieldMessage.text + '",'
                            + ')'
                    + ', 500)',
            function(result) {
                idFieldFname.text = ""
                idFieldLName.text = ""
                idFieldEmail.text = ""
                idFieldPhone.text = ""
                idFieldMessage.text = ""
                state.success = true
                state.loading = false
            },
            function(error) {
                if (JSON.stringify(error).indexOf('"validate":[{') !== -1) {
                    idFieldFname.error = idApp.helper.findError('fname', error.validate)
                    idFieldLName.error = idApp.helper.findError('lname', error.validate)
                    idFieldEmail.error = idApp.helper.findError('email', error.validate)
                    idFieldPhone.error = idApp.helper.findError('phone', error.validate)
                    idFieldMessage.error = idApp.helper.findError('message', error.validate)
                } else {
                    state.error = true
                }
                state.loading = false
            }
        )
    }

    Components.AppPage {
        header: qsTr("Сообщение")
        fixed: false
        loading: state.loading

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
                    id: idFieldEmail
                    inputMethodHints: Qt.ImhEmailCharactersOnly | Qt.ImhNoPredictiveText
                    placeholderText : qsTr("Email")
                    singleLine: true
                    disabled: state.loading
                    onTextChanged: error = ""
                }

                Components.AppTextField {
                    id: idFieldFname
                    placeholderText : qsTr("Имя")
                    singleLine: true
                    disabled: state.loading
                    onTextChanged: error = ""
                }

                Components.AppTextField {
                    id: idFieldLName
                    placeholderText : qsTr("Фамилия (по желанию)")
                    singleLine: true
                    disabled: state.loading
                    onTextChanged: error = ""
                }

                Components.AppTextField {
                    id: idFieldPhone
                    inputMethodHints: Qt.ImhDialableCharactersOnly
                    placeholderText : qsTr("Телефон (по желанию)")
                    singleLine: true
                    disabled: state.loading
                    onTextChanged: error = ""
                }

                Components.AppTextField {
                    id: idFieldMessage
                    placeholderText : qsTr("Сообщение")
                    singleLine: false
                    disabled: state.loading
                    onTextChanged: error = ""
                }

                Components.AppButton {
                    width: parent.width
                    text: qsTr("Отправить")
                    onEndAnimationClick: contactFormPage.send()
                    padding: appTheme.paddingLarge
                    disabled: state.loading
                    loading: state.loading
                }
            }
        }
    }
}
