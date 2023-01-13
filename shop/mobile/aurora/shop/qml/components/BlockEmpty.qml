import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

Column {
    id: idBlock
    width: parent.width
    spacing: appTheme.paddingLarge

    property int size: 300
    property color borderColor: 'transparent'
    property string title: ""
    property string text: ""

    Rectangle {
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
                height: size * 1.266666667
                width: size * 1.266666667
                anchors.verticalCenter: parent.verticalCenter
                anchors.horizontalCenter: parent.horizontalCenter

                AnimatedImage {
                    id: img
                    source: Qt.resolvedUrl("../icons/animation_empty_box.gif")
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

    Column {
        width: parent.width
        spacing: appTheme.paddingMedium

        Text {
            width: parent.width
            text: idBlock.title
            wrapMode: Text.WordWrap
            horizontalAlignment: Text.AlignHCenter
            font.pixelSize: appTheme.fontSizeH6
            visible: idBlock.title.length !== 0
            font.bold: true
        }

        Text {
            width: parent.width
            text: idBlock.text
            wrapMode: Text.WordWrap
            horizontalAlignment: Text.AlignHCenter
            font.pixelSize: appTheme.fontSizeBody1
            visible: idBlock.text.length !== 0
        }
    }

    Rectangle {
        color: 'transparent'
        height: 80
        width: 1
    }
}


