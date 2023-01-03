import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0
import QtQuick.Window 2.2

Column {

    AppTheme {
        id: appTheme
    }

    property int _tab: 0

    id: idAppTabs
    width: parent.width

    Rectangle {
        width: parent.width
        height: idRowButtons.height
        color: "transparent"

        Row {
            id: idRowButtons
            width: parent.width
            spacing: appTheme.paddingMedium
            anchors.horizontalCenter: parent.horizontalCenter

            MouseArea {
                height: label.height
                width: parent.width / 2 - appTheme.paddingMedium / 2
                onClicked: idAppTabs._tab = 0

                Rectangle {
                    width: parent.width
                    height: parent.height
                    color : "blue"
                    radius: appTheme.shapesLarge
                }

                Label {
                    id: label
                    width: parent.width
                    anchors.verticalCenter: parent.verticalCenter
                    text: "First"
                    color: "white"
                    padding: appTheme.paddingMedium
                }
            }

            MouseArea {
                height: label2.height
                width: parent.width / 2 - appTheme.paddingMedium / 2
                onClicked: idAppTabs._tab = 1

                Rectangle {
                    width: parent.width
                    height: parent.height
                    color : "blue"
                    radius: appTheme.shapesLarge
                }

                Label {
                    id: label2
                    width: parent.width
                    anchors.verticalCenter: parent.verticalCenter
                    text: "Second"
                    color: "white"
                    padding: appTheme.paddingMedium
                }
            }
        }


        Rectangle {
            id: toggleswitch
            width: (parent.width - appTheme.paddingMedium) / 2
            height: parent.height
            color : "black"
            opacity: 0.7
            radius: appTheme.shapesLarge
            x: (parent.width + appTheme.paddingMedium) / 2 * idAppTabs._tab
            Behavior on x {
                 NumberAnimation { properties: "x"; easing.type: Easing.InOutQuad; duration: 300 }
             }
        }

    }
}
