import QtQuick 2.0
import Sailfish.Silica 1.0

Item {

    id: idBlockError

    property string error: ""
    property string color: "white"

    height: idTextError.height
    width: parent.width

    Text {
        id: idTextError
        width: parent.width
        text: idBlockError.error
        color: idBlockError.color
        wrapMode: Text.WordWrap
        horizontalAlignment: Text.AlignHCenter
        font.pixelSize: appTheme.fontSizeH6
    }
}
