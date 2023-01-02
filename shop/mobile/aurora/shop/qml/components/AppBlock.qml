import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0

MouseArea {

    AppTheme {
        id: appTheme
    }

    property string backgroundColor: "#cf525297"
    property int padding: appTheme.paddingLarge
    property bool centerIn: false
    property bool disabled: true
    property bool press: true
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
    }

    Column {
        id: content
        anchors.centerIn: parent
        width: parent.width - idAppBlock.padding * 2
        anchors.top: parent.top
        anchors.topMargin: idAppBlock.padding
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : "black"
        radius: appTheme.shapesLarge
        opacity: 0.3
        visible: !idAppBlock.press
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
