import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0

MouseArea {

    AppTheme {
        id: appTheme
    }

    id: idAppButton
    height: content.height + idAppButton.padding - (iconStart.length == 0 || iconEnd.length == 0 ? 0 : 10)
    width: content.width + idAppButton.padding * 2
    onClicked: if (!idAppButton.disabled && !idAppButton._isAnimation) idAppButton.press = true

    property string text: ""
    property string iconStart: ""
    property string iconEnd: ""
    property bool disabled: false
    property string contentColor: idApp.getPerceptualBrightness(idAppButton.background) < 765 ? "white" : "black"
    property string background: idApp.colors.highlightDarkColor
    property int padding: appTheme.paddingLarge
    property bool loading: false
    property bool press: false
    property bool _isAnimation: false

    signal endAnimationClick()

    Rectangle {
        anchors.fill: parent
        color : idAppButton.disabled ? 'gray' : idAppButton.background
        radius: appTheme.shapesMedium
    }

    Row {
        id: content
        anchors.top: parent.top
        anchors.topMargin: (idAppButton.padding - (iconStart.length == 0 || iconEnd.length == 0 ? 0 : 10)) / 2
        spacing: padding
        anchors.horizontalCenter: parent.horizontalCenter

        Image {
            visible: !idAppButton.loading
            anchors.verticalCenter: parent.verticalCenter
            source: iconStart.length == 0 ? "" : Qt.resolvedUrl(idAppButton.iconStart + "?" + idAppButton.contentColor)
            fillMode: Image.PreserveAspectFit
            width: iconStart.length == 0 ? 0 : (idAppButton.padding > appTheme.paddingMedium ? 70
                                                                                      : (idAppButton.padding > appTheme.paddingSmall ? 60 : 32))
            height: iconStart.length == 0 ? 0 : (idAppButton.padding > appTheme.paddingMedium ? 70
                                                                                      : (idAppButton.padding > appTheme.paddingSmall ? 60 : 32))
        }

        Rectangle {
            visible: idAppButton.loading
            width: idLabel.height
            height: idLabel.height
            radius: idLabel.height
            color : "white"

            BusyIndicator {
                id: idBusyIndicator
                running: true
                size: BusyIndicatorSize.ExtraSmall
                anchors.verticalCenter: parent.verticalCenter
                anchors.horizontalCenter: parent.horizontalCenter
            }
        }

        Label {
            id: idLabel
            rightPadding: iconEnd.length == 0 ? idAppButton.padding : 0
            leftPadding: iconStart.length == 0 ? idAppButton.padding : 0
            bottomPadding: 3
            anchors.verticalCenter: parent.verticalCenter
            text: idAppButton.text
            font.pixelSize: idAppButton.padding > appTheme.paddingMedium ? appTheme.fontSizeH6
                                                                      : (idAppButton.padding > appTheme.paddingSmall ? appTheme.fontSizeBody1 : appTheme.fontSizeBody2)
            color: idAppButton.contentColor
            visible: !idAppButton.loading
        }

        Image {
            visible: !idAppButton.loading
            anchors.verticalCenter: parent.verticalCenter
            source: iconEnd.length == 0 ? "" : Qt.resolvedUrl(idAppButton.iconEnd + "?" + idAppButton.contentColor)
            fillMode: Image.PreserveAspectFit
            width: iconEnd.length == 0 ? 0 : (idAppButton.padding > appTheme.paddingMedium ? 70
                                                                                      : (idAppButton.padding > appTheme.paddingSmall ? 60 : 32))
            height: iconEnd.length == 0 ? 0 : (idAppButton.padding > appTheme.paddingMedium ? 70
                                                                                      : (idAppButton.padding > appTheme.paddingSmall ? 60 : 32))
        }
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : idApp.getPerceptualBrightness(idAppButton.background) < 765 ? "white" : "black"
        radius: appTheme.shapesMedium
        opacity: idAppButton.press ? 0.4 : 0.0
        Behavior on opacity {
            NumberAnimation {
                id: animation
                properties: "opacity";
                easing.type: Easing.InOutQuad;
                duration: 150
                onRunningChanged: {
                    if (!animation.running) {
                        if (idAppButton.press) {
                            idAppButton._isAnimation = true
                            idAppButton.press = false
                        } else if (idAppButton._isAnimation) {
                            idAppButton._isAnimation = false
                            endAnimationClick()
                        }
                    }
                }
            }
        }
    }
}
