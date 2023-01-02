import QtQuick 2.0
import Sailfish.Silica 1.0

Page {
    id: catalogPage

    SilicaListView {
        id: listView
        anchors.fill: parent

        header: PageHeader {
            title: qsTr("Каталог")
            extraContent.children: [
                Image {
                    source: Qt.resolvedUrl("../icons/toolbar_icon.png")
                    fillMode: Image.PreserveAspectFit
                    anchors.verticalCenter: parent.verticalCenter
                    width: 60
                    height: 60
                }
            ]
        }

        PullDownMenu {
            id: pullDownMenu
            topMargin: Theme.paddingLarge
            bottomMargin: Theme.paddingLarge

            MenuItem {
                text: qsTr("Главная")
                visible: !listView.count
                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("MainPage.qml"), {}, PageStackAction.Replace)
            }
            MenuItem {
                text: qsTr("Корзина")
                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("CartPage.qml"), {}, PageStackAction.Replace)
            }
        }

        InfoLabel {
            text: "CatalogPage"
            anchors.centerIn: parent
        }
    }
}
