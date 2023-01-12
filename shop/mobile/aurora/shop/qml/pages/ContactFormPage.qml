import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: contactFormPage

    Components.AppPage {
        header: qsTr("Сообщение")
        fixed: false

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
                }

                Components.AppTextField {
                    placeholderText : qsTr("Имя")
                    singleLine: true
                }

                Components.AppTextField {
                    placeholderText : qsTr("Фамилия (по желанию)")
                    singleLine: true
                }

                Components.AppTextField {
                    placeholderText : qsTr("Телефон (по желанию)")
                    singleLine: true
                }

                Components.AppTextField {
                    placeholderText : qsTr("Сообщение")
                    singleLine: false

                }

                Components.AppButton {
                    width: parent.width
                    text: qsTr("Отправить")
                    onClicked: console.log("yes")
                    padding: appTheme.paddingLarge
                }
            }
        }
    }
}
