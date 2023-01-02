import QtQuick 2.0
import Sailfish.Silica 1.0

Page {
    id: orderSearchPage

    SilicaListView {
        id: listView
        anchors.fill: parent

        header: PageHeader {
            title: qsTr("Поиск Заказа")
        }

        InfoLabel {
            text: "OrderSearchPage"
            anchors.centerIn: parent
        }
    }
}
