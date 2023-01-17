import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

MouseArea {

    id: idAppButton

    property alias icon: image
    property alias bg: idBg
    property bool disabled: false
    property bool isClickable: true
    property bool press: false
    property bool _isAnimation: false
    property int size: 60
    property int duration: 150

    height: idAppButton.size
    width: idAppButton.size
    onClicked: if (idAppButton.isClickable && !idAppButton.disabled && !idAppButton._isAnimation) idAppButton.press = true

    signal endAnimationClick()

    Rectangle {
        id: idBg
        anchors.fill: parent
        color : idAppButton.disabled ? 'gray' : (helper.getPerceptualBrightness(idApp.colors.highlightDarkColor) < 500 ? "white" : "black")
        radius: idAppButton.size
        opacity: helper.getPerceptualBrightness(idApp.colors.highlightDarkColor) < 500 ? 0.3 : 0.1
    }

    Rectangle {
        id: rec
        anchors.fill: parent
        radius: idAppButton.size
        color: 'transparent'
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.verticalCenter: parent.verticalCenter
        layer.enabled: true
        layer.effect: OpacityMask {
            maskSource: Item {
                width: size
                height: size
                Rectangle {
                    anchors.centerIn: parent
                    width: size
                    height: size
                    radius: size
                }
            }
        }

        Rectangle {
            id: idRec
            height: size * 0.6
            width: size * 0.6
            anchors.centerIn: parent
            color: 'transparent'
            opacity: idAppButton.disabled ? 0.4 : 1.0

            Image {
                id: image
                sourceSize: Qt.size(idRec.width, idRec.width)
                fillMode: Image.PreserveAspectFit
                anchors.top: parent.top
                anchors.left: parent.left
                anchors.right: parent.right
                anchors.bottom: parent.bottom
                anchors.leftMargin: 1
                layer.enabled: true
                layer.effect: ColorOverlay{
                    color: helper.getPerceptualBrightness(idApp.colors.highlightDarkColor) < 500 ? "white" : "black"
                }
            }
        }
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : helper.getPerceptualBrightness(idApp.colors.highlightDarkColor) < 500 ? "white" : "black"
        radius: parent.width
        opacity: idAppButton.press ? 0.4 : 0.0
        Behavior on opacity {
            NumberAnimation {
                id: animation
                properties: "opacity";
                easing.type: Easing.InOutQuad;
                duration: idAppButton.duration
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
