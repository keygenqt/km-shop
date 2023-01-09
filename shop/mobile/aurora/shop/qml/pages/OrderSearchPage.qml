import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: orderSearchPage

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height + appTheme.paddingLarge

        VerticalScrollDecorator {}

        Components.GlobalMenu {}

        Column {
            id: column
            width: parent.width

            Components.MainPageHeader {
                title: qsTr("Ваши заказы")
            }

            Column {
                width: parent.width - appTheme.paddingLarge * 2
                spacing: appTheme.paddingLarge
                anchors.horizontalCenter: parent.horizontalCenter

                Components.AppBlock {
                    width: parent.width
                    backgroundColor: appTheme.colorVariant2

                    Label {
                        text: qsTr("OrderSearchPage")
                        color: "white"
                        font.pixelSize: appTheme.fontSizeBody2
                    }

                }
            }
        }
    }
}
