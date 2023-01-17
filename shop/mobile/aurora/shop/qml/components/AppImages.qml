import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

Rectangle {

    id: idMain

    property var imageUrls: []
    property int iconSize: 50
    property int radiusMask: appTheme.paddingMedium
    property bool active: false
    property bool isClickable: false

    signal endAnimationClick()

    function _getUrl1() {
        return idMain.imageUrls.length > 0 ? Qt.resolvedUrl(idMain.imageUrls[0]) : ""
    }

    function _getUrl2() {
        return idMain.imageUrls.length > 1 ? Qt.resolvedUrl(idMain.imageUrls[1]) : ""
    }

    function _getUrl3() {
        return idMain.imageUrls.length > 2 ? Qt.resolvedUrl(idMain.imageUrls[2]) : ""
    }

    function _getUrl4() {
        return idMain.imageUrls.length > 3 ? Qt.resolvedUrl(idMain.imageUrls[3]) : ""
    }

    function _getImage1W() {
        switch(idMain.imageUrls.length) {
        case 1:
            return idMain.width
        case 2:
            return idMain.width / 2 - 1
        case 3:
            return idMain.width / 2 - 1
        case 4:
            return idMain.width / 2 - 1
        default:
            return 0
        }
    }

    function _getImage1H() {
        switch(idMain.imageUrls.length) {
        case 1:
            return idMain.height
        case 2:
            return idMain.height
        case 3:
            return idMain.height / 2 - 1
        case 4:
            return idMain.height / 2 - 1
        default:
            return 0
        }
    }

    function _getImage2W() {
        switch(idMain.imageUrls.length) {
        case 1:
            return 0
        case 2:
            return idMain.width / 2 - 1
        case 3:
            return idMain.width / 2 - 1
        case 4:
            return idMain.width / 2 - 1
        default:
            return 0
        }
    }

    function _getImage2H() {
        switch(idMain.imageUrls.length) {
        case 1:
            return 0
        case 2:
            return idMain.height
        case 3:
            return idMain.height / 2 - 1
        case 4:
            return idMain.height / 2 - 1
        default:
            return 0
        }
    }

    function _getImage3W() {
        switch(idMain.imageUrls.length) {
        case 1:
            return 0
        case 2:
            return 0
        case 3:
            return idMain.width
        case 4:
            return idMain.width / 2 - 1
        default:
            return 0
        }
    }

    function _getImage3H() {
        switch(idMain.imageUrls.length) {
        case 1:
            return 0
        case 2:
            return 0
        case 3:
            return idMain.height / 2 - 1
        case 4:
            return idMain.height / 2 - 1
        default:
            return 0
        }
    }

    function _getImage4W() {
        switch(idMain.imageUrls.length) {
        case 1:
            return 0
        case 2:
            return 0
        case 3:
            return 0
        case 4:
            return idMain.width / 2 - 1
        default:
            return 0
        }
    }

    function _getImage4H() {
        switch(idMain.imageUrls.length) {
        case 1:
            return 0
        case 2:
            return 0
        case 3:
            return 0
        case 4:
            return idMain.height / 2 - 1
        default:
            return 0
        }
    }

    function _isLoading() {
        switch(idMain.imageUrls.length) {
        case 1:
            return img1.status == Image.Loading
        case 2:
            return img1.status == Image.Loading
                    || img2.status == Image.Loading
        case 3:
            return img1.status == Image.Loading
                    || img2.status == Image.Loading
                    || img3.status == Image.Loading
        case 4:
            return img1.status == Image.Loading
                    || img2.status == Image.Loading
                    || img3.status == Image.Loading
                    || img4.status == Image.Loading
        default:
            return false
        }
    }

    function _isError() {
        switch(idMain.imageUrls.length) {
        case 1:
            return img1.status == Image.Error
        case 2:
            return img1.status == Image.Error
                    || img2.status == Image.Error
        case 3:
            return img1.status == Image.Error
                    || img2.status == Image.Error
                    || img3.status == Image.Error
        case 4:
            return img1.status == Image.Error
                    || img2.status == Image.Error
                    || img3.status == Image.Error
                    || img4.status == Image.Error
        default:
            return true
        }
    }

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
        id: img1
        width: idMain._getImage1W()
        height: idMain._getImage1H()
        source: idMain._getUrl1()
        fillMode: Image.PreserveAspectCrop
        visible: img1.status == Image.Ready
        anchors.left: parent.left
        anchors.top: parent.top
    }

    Image {
        id: img2
        width: idMain._getImage2W()
        height: idMain._getImage2H()
        source: idMain._getUrl2()
        fillMode: Image.PreserveAspectCrop
        visible: img2.status == Image.Ready
        anchors.right: parent.right
        anchors.top: parent.top
    }

    Image {
        id: img3
        width: idMain._getImage3W()
        height: idMain._getImage3H()
        source: idMain._getUrl3()
        fillMode: Image.PreserveAspectCrop
        visible: img3.status == Image.Ready
        anchors.left: parent.left
        anchors.bottom: parent.bottom
    }

    Image {
        id: img4
        width: idMain._getImage4W()
        height: idMain._getImage4H()
        source: idMain._getUrl4()
        fillMode: Image.PreserveAspectCrop
        visible: img4.status == Image.Ready
        anchors.right: parent.right
        anchors.bottom: parent.bottom
    }

    Rectangle {
        id: idRec
        width: idMain.width
        height: idMain.height
        anchors.centerIn: parent
        color: 'transparent'
        visible: idMain._isLoading()

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
        visible: idMain._isError()

        Rectangle {
            anchors.fill: parent
            anchors.centerIn: parent
            color: appTheme.colorError
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
