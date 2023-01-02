import QtQuick 2.0
import Sailfish.Silica 1.0
import Colors 1.0

MouseArea {

    ColorsConsts {
        id: colors
    }

    property string text: ""
    property string icon: ""
    property bool disabled: false
    property string contentColor: "white"
    property string background: colors.bgVariant1
    property int padding: Theme.paddingLarge

    property bool _press: true

    id: idAppButton
    height: content.height + idAppButton.padding
    width: content.width + idAppButton.padding * 2

    onPressedChanged: {
        if (!idAppButton.disabled) {
            idAppButton._press = !idAppButton._press
        }
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : idAppButton.background
        radius: 10
    }

    Row {
        id: content
        anchors.top: parent.top
        anchors.topMargin: idAppButton.padding / 2
        spacing: padding
        anchors.horizontalCenter: parent.horizontalCenter

        Label {
            leftPadding: idAppButton.padding
            rightPadding: icon.length == 0 ? idAppButton.padding : 0
            bottomPadding: 3
            anchors.verticalCenter: parent.verticalCenter
            text: idAppButton.text
            font.pixelSize: idAppButton.padding > Theme.paddingMedium ? Theme.fontSizeExtraLarge
                                                                      : (idAppButton.padding > Theme.paddingSmall ? Theme.fontSizeSmall : Theme.fontSizeTiny)
            color: idAppButton.contentColor
        }

        Image {
            anchors.verticalCenter: parent.verticalCenter
            source: icon.length == 0 ? "" : Qt.resolvedUrl(idAppButton.icon + "?" + idAppButton.contentColor)
            fillMode: Image.PreserveAspectFit
            width: icon.length == 0 ? 0 : (idAppButton.padding > Theme.paddingMedium ? 70
                                                                                      : (idAppButton.padding > Theme.paddingSmall ? 60 : 32))
            height: icon.length == 0 ? 0 : (idAppButton.padding > Theme.paddingMedium ? 70
                                                                                      : (idAppButton.padding > Theme.paddingSmall ? 60 : 32))
        }
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : idAppButton.background == "black" ? "white" : "black"
        radius: 10
        opacity: 0.3
        visible: !idAppButton._press
    }
}
