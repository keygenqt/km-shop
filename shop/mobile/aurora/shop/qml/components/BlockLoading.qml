import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

Rectangle {
    id: idBlock

    property int size: 150
    property color borderColor: idApp.colors.highlightDarkColor

    color: 'transparent'
    height: rec.height
    width: parent.width

    Rectangle {
        id: rec
        height: size
        width: size
        radius: appTheme.paddingLarge

        anchors.horizontalCenter: parent.horizontalCenter
        layer.enabled: true
        layer.effect: OpacityMask {
            maskSource: Item {
                width: size
                height: size
                Rectangle {
                    anchors.centerIn: parent
                    width: size
                    height: size
                    radius: appTheme.paddingLarge
                }
            }
        }

        Rectangle {
            id: idRec
            height: size * 1.3
            width: size * 1.3
            anchors.verticalCenter: parent.verticalCenter
            anchors.horizontalCenter: parent.horizontalCenter

            AnimatedImage {
                id: img
                source: Qt.resolvedUrl("../icons/animation_loader.gif")
                fillMode: Image.PreserveAspectFit
                anchors.top: parent.top
                anchors.left: parent.left
                anchors.right: parent.right
                anchors.bottom: parent.bottom
            }
        }
    }

    Rectangle {
        width: size
        height: size
        border.width: 2
        border.color: idBlock.borderColor
        color: 'transparent'
        radius: appTheme.paddingLarge
        anchors.horizontalCenter: parent.horizontalCenter
    }
}
