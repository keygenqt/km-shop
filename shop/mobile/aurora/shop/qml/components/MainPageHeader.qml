import QtQuick 2.0
import Sailfish.Silica 1.0

PageHeader {
    id: idHeader

    property bool loading: false
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

            Rectangle {
                id: idRec
                height: 60
                width: 60
                radius: 60
                anchors.verticalCenter: parent.verticalCenter
                color: 'white'
                border.width: 2
                border.color: idApp.colors.borderColorBlock
                visible: idHeader.loading

                AnimatedImage {
                    source: Qt.resolvedUrl("../icons/animation_loader.gif")
                    fillMode: Image.PreserveAspectFit
                    anchors.margins: -(idRec.width * 0.2)
                    anchors.top: parent.top
                    anchors.bottom: parent.bottom
                    anchors.left: parent.left
                    anchors.right: parent.right
                }
            }
        }
    ]
}
