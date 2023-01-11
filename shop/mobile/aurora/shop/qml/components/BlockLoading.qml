import QtQuick 2.0
import Sailfish.Silica 1.0

Item {

    height: idRec.height
    width: parent.width

    property int size: 200
    property color borderColor: "transparent"

    Rectangle {
        id: idRec
        height: size
        width: size
        radius: size
        anchors.horizontalCenter: parent.horizontalCenter
        color: 'white'
        border.width: 2
        border.color: borderColor

        AnimatedImage {
            source: Qt.resolvedUrl("../icons/animation_loader.gif")
            fillMode: Image.PreserveAspectFit
            anchors.margins: -(size * 0.1)
            anchors.top: parent.top
            anchors.bottom: parent.bottom
            anchors.left: parent.left
            anchors.right: parent.right
        }
    }
}
