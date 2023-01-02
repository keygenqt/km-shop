import QtQuick 2.0
import Sailfish.Silica 1.0

Page {
    id: contactPage

    SilicaListView {
        id: listView
        anchors.fill: parent

        header: PageHeader {
            title: qsTr("Контакты")
        }

        InfoLabel {
            text: "ConactsPage"
            anchors.centerIn: parent
        }
    }
}
