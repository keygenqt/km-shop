import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: idOrderPage

    property string orderId: ""

    Components.AppPage {
        header: qsTr("Заказ")

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: "white"

            Text {
                width: parent.width
                text: idOrderPage.orderId
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeBody1
            }
        }
    }
}
