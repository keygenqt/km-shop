import QtQuick 2.0
import Sailfish.Silica 1.0

MouseArea {

    property color borderColor: idApp.colors.highlightDarkColor
    property color backgroundColor: "white"
    property int padding: appTheme.paddingLarge
    property bool centerIn: false
    property bool disabled: true
    property bool isOpacity: false
    property string bgSource: ""
    default property alias children: content.data
    property bool press: false
    property bool _isAnimation: false

    signal endAnimationClick()

    id: idAppBlock
    height: content.height + idAppBlock.padding * 2

    onClicked: if (!idAppBlock.disabled && !idAppBlock._isAnimation) idAppBlock.press = true

    Rectangle {
        width: parent.width
        height: parent.height
        color : idAppBlock.backgroundColor
        radius: appTheme.shapesLarge
        opacity: isOpacity ? 0.5 : 1.0
        border.width: 2
        border.color: idAppBlock.borderColor
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
        opacity: idAppBlock.press ? 0.4 : 0.0
        Behavior on opacity {
            NumberAnimation {
                id: animation
                properties: "opacity";
                easing.type: Easing.InOutQuad;
                duration: 100
                onRunningChanged: {
                    if (!animation.running) {
                        if (idAppBlock.press) {
                            idAppBlock._isAnimation = true
                            idAppBlock.press = false
                        } else if (idAppBlock._isAnimation) {
                            idAppBlock._isAnimation = false
                            endAnimationClick()
                        }
                    }
                }
            }
        }
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
