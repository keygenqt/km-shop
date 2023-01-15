import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

MouseArea {

    id: idAppButton

    property alias icon: image
    property bool disabled: false
    property bool press: false
    property bool _isAnimation: false
    property int size: 60
    property int duration: 150

    height: idAppButton.size
    width: idAppButton.size
    onClicked: if (!idAppButton.disabled && !idAppButton._isAnimation) idAppButton.press = true

    signal endAnimationClick()

    Rectangle {
        anchors.fill: parent
        color : idAppButton.disabled ? 'gray' : (idApp.helper.getPerceptualBrightness(idAppButton.background) < 765 ? "white" : "black")
        radius: idAppButton.size
        opacity: 0.1
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
            height: size * 0.74
            width: size * 0.74
            anchors.centerIn: parent
            color: 'transparent'

            Image {
                id: image
                fillMode: Image.PreserveAspectFit
                anchors.top: parent.top
                anchors.left: parent.left
                anchors.right: parent.right
                anchors.bottom: parent.bottom
                anchors.leftMargin: 1
            }
        }
    }

    Rectangle {
        width: parent.width
        height: parent.height
        color : idApp.helper.getPerceptualBrightness(idAppButton.background) < 765 ? "white" : "black"
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
