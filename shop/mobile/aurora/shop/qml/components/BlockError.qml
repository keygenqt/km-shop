import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

Item {

    id: idBlock
    height: rec.height
    width: parent.width

    property int size: 300
    property color borderColor: idApp.colors.highlightDarkColor

    Rectangle {
        id: rec
        height: size
        width: size
        radius: appTheme.paddingLarge
        color: 'white'
        anchors.horizontalCenter: parent.horizontalCenter
        border.width: 2
        border.color: idBlock.borderColor
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
            height: size * 0.852352941
            width: size * 0.852352941
            anchors.top: parent.top
            anchors.topMargin: size * 0.031764706
            anchors.left: parent.left
            anchors.leftMargin: size * 0.12
            color: 'transparent'

            AnimatedImage {
                id: img
                source: Qt.resolvedUrl("../icons/animation_error.gif")
                fillMode: Image.PreserveAspectFit
                anchors.top: parent.top
                anchors.left: parent.left
                anchors.right: parent.right
                anchors.bottom: parent.bottom
            }
        }
    }
}

