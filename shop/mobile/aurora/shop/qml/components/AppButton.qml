import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0

MouseArea {

    AppTheme {
        id: appTheme
    }

    property string text: ""
    property string icon: ""
    property bool disabled: false
    property string contentColor: "white"
    property string background: appTheme.colorVariant1
    property int padding: appTheme.paddingLarge

    property bool _press: true

    id: idAppButton
    height: content.height + idAppButton.padding - (icon.length == 0 ? 0 : 10)
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
        radius: appTheme.shapesMedium
    }

    Row {
        id: content
        anchors.top: parent.top
        anchors.topMargin: (idAppButton.padding - (icon.length == 0 ? 0 : 10)) / 2
        spacing: padding
        anchors.horizontalCenter: parent.horizontalCenter

        Label {
            leftPadding: idAppButton.padding
            rightPadding: icon.length == 0 ? idAppButton.padding : 0
            bottomPadding: 3
            anchors.verticalCenter: parent.verticalCenter
            text: idAppButton.text
            font.pixelSize: idAppButton.padding > appTheme.paddingMedium ? appTheme.fontSizeH6
                                                                      : (idAppButton.padding > appTheme.paddingSmall ? appTheme.fontSizeBody1 : appTheme.fontSizeBody2)
            color: idAppButton.contentColor
        }

        Image {
            anchors.verticalCenter: parent.verticalCenter
            source: icon.length == 0 ? "" : Qt.resolvedUrl(idAppButton.icon + "?" + idAppButton.contentColor)
            fillMode: Image.PreserveAspectFit
            width: icon.length == 0 ? 0 : (idAppButton.padding > appTheme.paddingMedium ? 70
                                                                                      : (idAppButton.padding > appTheme.paddingSmall ? 60 : 32))
            height: icon.length == 0 ? 0 : (idAppButton.padding > appTheme.paddingMedium ? 70
                                                                                      : (idAppButton.padding > appTheme.paddingSmall ? 60 : 32))
        }
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : idAppButton.background == "black" ? "white" : "black"
        radius: appTheme.shapesMedium
        opacity: 0.4
        visible: !idAppButton._press
    }
}
