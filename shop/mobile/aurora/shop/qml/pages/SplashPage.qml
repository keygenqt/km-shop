import QtQuick 2.0
import Sailfish.Silica 1.0

Page {

    id: idSplashPage
    anchors.fill: parent

    Rectangle {
        width: parent.width
        height: parent.height
        color : idApp.colors.highlightDarkColor

        Column {
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.verticalCenter: parent.verticalCenter
            spacing: 20

            Rectangle {
                height: 250
                width: 250
                color: "transparent"

                Rectangle {
                    height: 230
                    width: 230
                    color: "white"
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.verticalCenter: parent.verticalCenter
                    radius: appTheme.shapesExtraLarge
                }

                Image {
                    id: image
                    source: Qt.resolvedUrl("../icons/shop.svg")
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.verticalCenter: parent.verticalCenter
                    height: parent.height
                    width: parent.width
                }
            }

            Rectangle {
                anchors.horizontalCenter: parent.horizontalCenter
                width: idBusyIndicator.width + appTheme.paddingMedium
                height: idBusyIndicator.height + appTheme.paddingMedium
                radius: idBusyIndicator.height
                color : "white"

                BusyIndicator {
                    id: idBusyIndicator
                    running: true
                    size: BusyIndicatorSize.Small
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.horizontalCenter: parent.horizontalCenter
                }
            }
        }
    }
}
