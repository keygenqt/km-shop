import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

Rectangle {

    id: idMain

    property url imageUrl: ""
    property int iconSize: 50
    property int radiusMask: appTheme.paddingMedium
    property bool active: false
    property bool isClickable: false

    signal endAnimationClick()

    width: 90
    height: 90
    color: 'transparent'
    layer.enabled: true
    layer.effect: OpacityMask {
        maskSource: Item {
            width: idMain.width
            height: idMain.height
            Rectangle {
                anchors.centerIn: parent
                width: idMain.width
                height: idMain.height
                radius: idMain.radiusMask
            }
        }
    }

    Image {
        id: img
        width: idMain.width
        height: idMain.height
        source: idMain.imageUrl
        fillMode: Image.PreserveAspectCrop
        visible: img.status == Image.Ready
    }

    Rectangle {
        id: idRec
        width: idMain.width
        height: idMain.height
        anchors.centerIn: parent
        color: 'transparent'
        visible: img.status == Image.Loading

        Rectangle {
            anchors.fill: parent
            anchors.centerIn: parent
            color: idApp.colors.highlightDarkColor
            opacity: 0.7
        }

        Rectangle {
            id: idRecImage
            anchors.fill: parent
            anchors.centerIn: parent
            color: 'transparent'

            states: [
                State {
                    name: "rotated"
                    PropertyChanges { target: idRecImage; rotation: 180 }
                }
            ]

            transitions: Transition {
                RotationAnimation {
                    id: animation
                    loops: Number.POSITIVE_INFINITY
                    duration: 1000
                    direction: RotationAnimation.Counterclockwise
                }
            }

            Component.onCompleted: {
                idRecImage.state = "rotated"
            }

            Image {
                width: idMain.iconSize
                height: idMain.iconSize
                source: Qt.resolvedUrl("../icons/ic_refresh.svg")
                sourceSize: Qt.size(idMain.iconSize, idMain.iconSize)
                fillMode: Image.PreserveAspectFit
                anchors.centerIn: parent
                layer.enabled: true
                layer.effect: ColorOverlay {
                    color: "white"
                }
            }
        }
    }

    Rectangle {
        width: idMain.width
        height: idMain.height
        anchors.centerIn: parent
        color: 'transparent'
        visible: img.status == Image.Error

        Rectangle {
            anchors.fill: parent
            anchors.centerIn: parent
            color: idApp.colors.error
            opacity: 0.7
        }

        Image {
            width: idMain.iconSize
            height: idMain.iconSize
            source: Qt.resolvedUrl("../icons/ic_error.svg")
            sourceSize: Qt.size(idMain.iconSize, idMain.iconSize)
            fillMode: Image.PreserveAspectFit
            anchors.centerIn: parent
            layer.enabled: true
            layer.effect: ColorOverlay {
                color: "white"
            }
        }
    }

    MouseArea {
        id: idMouseArea
        anchors.fill: parent
        onClicked: if (!idMouseArea._isAnimation) idMouseArea._press = true
        visible: idMain.isClickable

        property bool _press: false
        property bool _isAnimation: false

        Rectangle {
            anchors.fill: parent
            anchors.centerIn: parent
            color: idApp.colors.highlightDarkColor
            opacity: idMain.active ? 0.4 : 0.0
            radius: appTheme.shapesMedium
        }

        Rectangle {
            anchors.fill: parent
            anchors.centerIn: parent
            color: 'transparent'
            border.width: 5
            border.color: idMain.active ? idApp.colors.highlightDarkColor : 'transparent'
            radius: appTheme.shapesMedium
        }

        Rectangle {
            width: parent.width
            height: parent.height
            color : idApp.helper.getPerceptualBrightness(idApp.colors.highlightDarkColor) < 765 ? "white" : "black"
            radius: appTheme.shapesMedium
            opacity: idMouseArea._press ? 0.4 : 0.0
            Behavior on opacity {
                NumberAnimation {
                    id: animation2
                    properties: "opacity";
                    easing.type: Easing.InOutQuad;
                    duration: 150
                    onRunningChanged: {
                        if (!animation2.running) {
                            if (idMouseArea._press) {
                                idMouseArea._isAnimation = true
                                idMouseArea._press = false
                            } else if (idMouseArea._isAnimation) {
                                idMouseArea._isAnimation = false
                                endAnimationClick()
                            }
                        }
                    }
                }
            }
        }
    }
}
