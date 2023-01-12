import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Rectangle {
    color: 'transparent'

    Components.AppPage {
        header: qsTr("Оформить Заказ")

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: "white"

            Text {
                width: parent.width
                text: qsTr("OrderCreatePage")
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeH6
            }
        }
    }
}
