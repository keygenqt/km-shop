import QtQuick 2.0
import Sailfish.Silica 1.0

Page {
    id: cartPage

    onStatusChanged: {
        if (status == PageStatus.Active) {
            pageStack.pushAttached(orderCreatePage)
        }
    }

    SilicaListView {
        id: listView
        anchors.fill: parent

        header: PageHeader {
            title: qsTr("Корзина")
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
                text: qsTr("Каталог")
                visible: !listView.count
                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("CatalogPage.qml"), {}, PageStackAction.Replace)
            }
        }

        InfoLabel {
            text: "CartPage"
            anchors.centerIn: parent
        }
    }

    Page {
        id: orderCreatePage
        Loader {
            anchors.fill: parent
            source: "OrderCreatePage.qml";
        }
    }
}
