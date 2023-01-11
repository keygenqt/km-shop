import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: contactFormPage

    Components.AppPage {
        header: qsTr("Сообщение")

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: appTheme.colorVariant1
            backgroundColor: "white"

            Text {
                width: parent.width
                text: qsTr("ContactFormPage")
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeH6
            }
        }
    }
}
