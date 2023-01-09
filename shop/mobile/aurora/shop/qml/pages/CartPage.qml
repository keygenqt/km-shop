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

    SilicaFlickable {
        anchors.fill: parent

        Components.MainPageHeader {
            title: qsTr("Корзина")
        }

        Components.GlobalMenu {}

        InfoLabel {
            text: "CartPage"
            anchors.centerIn: parent
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
