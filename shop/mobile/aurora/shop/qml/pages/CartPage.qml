import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: cartPage

    onStatusChanged: {
        if (status == PageStatus.Active) {
            pageStack.pushAttached(orderCreatePage)
        }
    }

    Components.AppPage {
        header: qsTr("Корзина")
        selectedPage: "itemMenuCart"
        height: parent.height

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: appTheme.colorVariant1
            backgroundColor: "white"

            Text {
                width: parent.width
                text: qsTr("CartPage")
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeH6
            }
        }
    }

    Page {
        id: orderCreatePage
        Loader {
            anchors.fill: parent
            source: "OrderCreatePage.qml";
        }
    }
}
