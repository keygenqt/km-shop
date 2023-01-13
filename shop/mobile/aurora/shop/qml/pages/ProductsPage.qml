import QtQuick 2.0
import Sailfish.Silica 1.0
import "../components" as Components

Page {
    id: productsPage
    backNavigation: !controlPanel.expanded

    property int sort: 1

    Components.AppPage {
        header: qsTr("Продукты")
        anchors.top: controlPanel.bottom
        clip: controlPanel.expanded
        disablePaddingIcons: controlPanel.expanded

        iconSettings: function () {
            controlPanel.open = true
        }
        iconSort1: productsPage.sort !== 1 ? undefined : function () {
            productsPage.sort = 2
        }
        iconSort2: productsPage.sort !== 2 ? undefined : function () {
            productsPage.sort = 3
        }
        iconSort3: productsPage.sort !== 3 ? undefined : function () {
            productsPage.sort = 1
        }

        Components.AppBlock {
            height: parent.height
            width: parent.width
            borderColor: idApp.colors.highlightDarkColor
            backgroundColor: "white"

            Text {
                width: parent.width
                text: qsTr("ProductsPage")
                wrapMode: Text.WordWrap
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: appTheme.fontSizeH6
            }
        }
    }

    DockedPanel {
        id: controlPanel
        dock: Dock.Bottom
        animationDuration: 300
        width: parent.width
        height: 400
        modal: true
        background: Rectangle {
            color: idApp.colors.highlightDarkColor
            radius: appTheme.paddingLarge

            Rectangle {
                color: idApp.colors.highlightDarkColor
                height: appTheme.paddingLarge
                width: parent.width
                anchors.bottom: parent.bottom
                anchors.margins: 0
            }
        }

        Column {
            width: parent.width - appTheme.paddingLarge * 2
            anchors.centerIn: parent

            Components.RangeSlider {

            }
        }
    }
}
