import QtQuick 2.0
import Sailfish.Silica 1.0

Rectangle {

    id: idAlert
    color: 'transparent'

    height: idAppBlock.height
    width: parent.width

    property string text: ""
    signal close()

    AppBlock {
        id: idAppBlock
        width: parent.width
        borderColor: idApp.colors.errorBorder
        backgroundColor: idApp.colors.error

        Text {
            width: parent.width
            text: idAlert.text
            wrapMode: Text.WordWrap
            horizontalAlignment: Text.AlignLeft
            font.pixelSize: appTheme.fontSizeBody1
            color: "white"
        }
    }

    MouseArea {
        anchors.fill: idAlert
        onClicked: {
            idAlert.close()
        }
    }
}
