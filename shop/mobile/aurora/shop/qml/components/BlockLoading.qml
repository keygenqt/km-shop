import QtQuick 2.0
import Sailfish.Silica 1.0

Item {

    id: idBlockLoading

    property string error: ""
    property string color: "white"

    height: idTextLoading.height
    width: parent.width

    Text {
        id: idTextLoading
        width: parent.width
        text: qsTr("Загрузка...")
        color: idBlockLoading.color
        wrapMode: Text.WordWrap
        horizontalAlignment: Text.AlignHCenter
        font.pixelSize: appTheme.fontSizeH6
    }
}
