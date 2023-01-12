import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0

SilicaItem {

    property alias icon: image

    id: placeholder
    anchors.fill: parent

    Rectangle {
        width: parent.width
        height: parent.height
        color : idApp.colors.highlightDarkColor

        Rectangle {
            height: parent.width / 2 + appTheme.paddingSmall
            width: parent.width / 2 + appTheme.paddingSmall
            color: "white"
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.verticalCenter: parent.verticalCenter
            radius: appTheme.shapesExtraLarge
        }

        Image {
            id: image
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.verticalCenter: parent.verticalCenter
            height: parent.width / 2
            width: parent.width / 2
        }
    }
}

