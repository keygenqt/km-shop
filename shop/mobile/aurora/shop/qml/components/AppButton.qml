import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

MouseArea {

    id: idMain
    height: content.height + idMain.padding
    width: content.width + idMain.padding * 2
    onClicked: if (!idMain.disabled && !idMain._isAnimation) idMain._press = true

    property url iconStart
    property url iconEnd

    property string background: idApp.colors.highlightDarkColor
    property int padding: appTheme.paddingLarge
    property bool disabled: false
    property bool loading: false
    property string text: ""

    property string _contentColor: idApp.helper.getPerceptualBrightness(idMain.background) < 765 ? "white" : "black"
    property bool _press: false
    property bool _isAnimation: false

    signal endAnimationClick()

    Rectangle {
        anchors.fill: parent
        color : idMain.disabled ? 'gray' : idMain.background
        radius: appTheme.shapesMedium
    }

    Row {
        id: content
        spacing: idMain.padding
        anchors.horizontalCenter: parent.horizontalCenter

        Image {
            anchors.top: parent.top
            anchors.topMargin: idMain.padding / 2
            width: idLabel.height
            height: idLabel.height
            source: idMain.iconStart
            sourceSize: Qt.size(idLabel.height, idLabel.height)
            fillMode: Image.PreserveAspectFit
            layer.enabled: true
            layer.effect: ColorOverlay {
                color: idMain._contentColor
            }
            visible: idMain.iconStart.toString() !== ""
        }

        Rectangle {
            anchors.top: parent.top
            anchors.topMargin: idMain.padding / 2
            visible: idMain.loading
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
            anchors.top: parent.top
            anchors.topMargin: idMain.padding / 2
            text: idMain.text
            color: idMain._contentColor
            visible: !idMain.loading
            font.pixelSize: idMain.padding > appTheme.paddingMedium
                            ? appTheme.fontSizeH6 : (idMain.padding > appTheme.paddingSmall
                                                     ? appTheme.fontSizeBody1 : appTheme.fontSizeBody2)
        }

        Image {
            anchors.top: parent.top
            anchors.topMargin: idMain.padding / 2
            width: idLabel.height
            height: idLabel.height
            source: idMain.iconEnd
            sourceSize: Qt.size(idLabel.height, idLabel.height)
            fillMode: Image.PreserveAspectFit
            layer.enabled: true
            layer.effect: ColorOverlay {
                color: idMain._contentColor
            }
            visible: idMain.iconEnd.toString() !== ""
        }
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : idApp.helper.getPerceptualBrightness(idMain.background) < 765 ? "white" : "black"
        radius: appTheme.shapesMedium
        opacity: idMain._press ? 0.4 : 0.0
        Behavior on opacity {
            NumberAnimation {
                id: animation
                properties: "opacity";
                easing.type: Easing.InOutQuad;
                duration: 150
                onRunningChanged: {
                    if (!animation.running) {
                        if (idMain._press) {
                            idMain._isAnimation = true
                            idMain._press = false
                        } else if (idMain._isAnimation) {
                            idMain._isAnimation = false
                            endAnimationClick()
                        }
                    }
                }
            }
        }
    }
}
