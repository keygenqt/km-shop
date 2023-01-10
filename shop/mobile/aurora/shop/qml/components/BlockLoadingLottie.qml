import QtQuick 2.0
import Sailfish.Silica 1.0
import "../lottie-qml/src/qml" as LottieQml

Item {

    id: idBlockLoading
    height: 150
    width: parent.width

    property color borderColor: "transparent"
    property bool _ready: false

    Rectangle {
        id: idRec
        height: 150
        width: 150
        anchors.horizontalCenter: parent.horizontalCenter
        radius: 150
        color: 'white'
        border.width: 2
        border.color: idBlockLoading.borderColor

        Image {
            source: Qt.resolvedUrl("../lottie-res/block_loader.png")
            fillMode: Image.PreserveAspectFit
            visible: !idBlockLoading._ready
            anchors.margins: -30
            anchors.top: parent.top
            anchors.bottom: parent.bottom
            anchors.left: parent.left
            anchors.right: parent.right
            width: 200
            height: 200
        }

        LottieQml.LottieAnimation {
            id: fancyAnimation
            source: Qt.resolvedUrl("../lottie-res/block_loader.json")
            loops: Animation.Infinite
            fillMode: Image.PreserveAspectFit
            running: true
            onInitialize: idBlockLoading._ready = true
            anchors.margins: -30
            anchors.top: parent.top
            anchors.bottom: parent.bottom
            anchors.left: parent.left
            anchors.right: parent.right
            width: 200
            height: 200
            visible: idBlockLoading._ready
        }
    }
}
