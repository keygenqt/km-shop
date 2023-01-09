import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0

MouseArea {

    AppTheme {
        id: appTheme
    }

    property string borderColor: ""
    property string backgroundColor: "white"
    property int padding: appTheme.paddingLarge
    property bool centerIn: false
    property bool disabled: true
    property bool press: true
    property bool isOpacity: false
    property string bgSource: ""
    default property alias children: content.data

    id: idAppBlock
    height: content.height + idAppBlock.padding * 2

    onPressedChanged: {
        if (!idAppBlock.disabled) {
            idAppBlock.press = !idAppBlock.press
        }
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : idAppBlock.backgroundColor
        radius: appTheme.shapesLarge
        opacity: isOpacity ? 0.5 : 1.0
        border.width: 2
        border.color: idAppBlock.borderColor.length == 0 ? idAppBlock.backgroundColor : idAppBlock.borderColor
    }

    Column {
        id: content
        anchors.centerIn: parent
        width: parent.width - idAppBlock.padding * 2
        anchors.top: parent.top
        anchors.topMargin: idAppBlock.padding
        opacity: isOpacity ? 0.5 : 1.0
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : "black"
        radius: appTheme.shapesLarge
        opacity: 0.4
        visible: !idAppBlock.press && !isOpacity
    }

    Image {
        source: Qt.resolvedUrl(idAppBlock.bgSource)
        fillMode: Image.PreserveAspectFit
        width: 270
        height: 280
        anchors.bottom: parent.bottom
        anchors.right: parent.right
    }
}
