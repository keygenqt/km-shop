import QtQuick 2.0
import Sailfish.Silica 1.0

PageHeader {
    id: idHeader

    property bool iconMain: true
    property var iconSearch

    extraContent.children: [
        Row {
            height: parent.height
            spacing: 10

            Image {
                source: Qt.resolvedUrl("../icons/toolbar_icon.png")
                fillMode: Image.PreserveAspectFit
                anchors.verticalCenter: parent.verticalCenter
                width: 60
                height: 60
                visible: iconMain
            }

            IconButton {
                icon.source: "image://theme/icon-m-search"
                anchors.verticalCenter: parent.verticalCenter
                onClicked: idHeader.iconSearch()
                visible: idHeader.iconSearch !== undefined
            }
        }
    ]
}
