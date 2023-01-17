import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

Rectangle {
    id: idMain
    width: idRow.width + appTheme.shapesMedium * 2
    height: idRow.height + 24
    radius: appTheme.shapesMedium

    property bool isSmall: false
    property bool disabled: false
    property int count

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
                    color: idApp.colors.highlightDarkColor
                }
            }
            bg {
                color: "white"
                opacity: count <= 1 ? 0.3 : 1.0
            }
            disabled: count <= 1 || idMain.disabled
            size: idMain.isSmall ? 30 : 50
            duration: 50
            icon.source: Qt.resolvedUrl("../icons/ic_remove.svg")
            anchors.verticalCenter: parent.verticalCenter
            onEndAnimationClick: {
                idMain.delCount(idMain.count)
            }
        }

        Rectangle {
            height: parent.height
            width: appTheme.fontSizeH6 * 0.8 * count.toString().length
            color: 'transparent'

            Label {
                text: count
                font.pixelSize: idMain.isSmall ? appTheme.fontSizeBody1 : appTheme.fontSizeH6
                anchors.centerIn: parent
                color: 'white'
            }
        }

        AppIconButton {
            icon {
                layer.enabled: true
                layer.effect: ColorOverlay{
                    color: idApp.colors.highlightDarkColor
                }
            }
            bg {
                color: "white"
                opacity: count >= 99 ? 0.3 : 1.0
            }
            disabled: count >= 99 || idMain.disabled
            size: idMain.isSmall ? 30 : 50
            duration: 50
            icon.source: Qt.resolvedUrl("../icons/ic_add.svg")
            anchors.verticalCenter: parent.verticalCenter
            onEndAnimationClick: {
                idMain.addCount(idMain.count)
            }
        }
    }
}
