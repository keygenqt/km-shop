import QtQuick 2.0
import Sailfish.Silica 1.0

PageHeader {

    property bool icon: true

    extraContent.children: [
        Image {
            source: Qt.resolvedUrl("../icons/toolbar_icon.png")
            fillMode: Image.PreserveAspectFit
            anchors.verticalCenter: parent.verticalCenter
            width: 60
            height: 60
            visible: icon
        }
    ]
}
