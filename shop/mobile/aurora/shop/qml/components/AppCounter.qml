import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

Rectangle {
    id: idMain
    width: idRow.width + appTheme.shapesMedium * 2
    height: idRow.height + 24
    radius: appTheme.shapesMedium

    property int count: 0

    signal addCount(int count)
    signal delCount(int count)

    Rectangle {
        anchors.fill: parent
        color: idApp.colors.highlightDarkColor
        border.width: 2
        border.color: idApp.colors.borderColorBlock
        radius: appTheme.shapesMedium
    }

    Row {
        id: idRow
        anchors.centerIn: parent
        spacing: appTheme.shapesLarge

        AppIconButton {
            icon {
                layer.enabled: true
                layer.effect: ColorOverlay{
                    color: 'white'
                }
            }
            size: 50
            duration: 50
            icon.source: Qt.resolvedUrl("../icons/ic_add.svg")
            anchors.verticalCenter: parent.verticalCenter
            onEndAnimationClick: {
                idMain.count = idMain.count - 1
                idMain.delCount(idMain.count)
            }
        }

        Label {
            id: idLabel
            text: count
            font.pixelSize: appTheme.fontSizeH6
            anchors.verticalCenter: parent.verticalCenter
            color: 'white'
        }

        AppIconButton {
            icon {
                layer.enabled: true
                layer.effect: ColorOverlay{
                    color: 'white'
                }
            }
            size: 50
            duration: 50
            icon.source: Qt.resolvedUrl("../icons/ic_remove.svg")
            anchors.verticalCenter: parent.verticalCenter
            onEndAnimationClick: {
                idMain.count = idMain.count + 1
                idMain.addCount(idMain.count)
            }
        }
    }
}
