import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: productsPage

    Components.AppPage {
        header: qsTr("Продукты")

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: "white"

            Text {
                width: parent.width
                text: qsTr("ProductsPage")
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeH6
            }
        }
    }
}
