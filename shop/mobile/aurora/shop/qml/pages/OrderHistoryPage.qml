import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Rectangle {
    id: orderHistoryPage
    color: 'transparent'

    Components.AppPage {
        header: qsTr("История заказов")

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: "white"

            Text {
                width: parent.width
                text: qsTr("OrderHistoryPage")
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeH6
            }
        }
    }
}
