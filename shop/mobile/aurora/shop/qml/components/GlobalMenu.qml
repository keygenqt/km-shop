import QtQuick 2.0
import Sailfish.Silica 1.0

Rectangle {

    id: idGlobalMenu

    height: 10
    width: parent.width
    color: 'transparent'

    readonly property string itemMenuOrderSearch: "itemMenuOrderSearch"
    readonly property string itemMenuContacts: "itemMenuContacts"
    readonly property string itemMenuCart: "itemMenuCart"
    readonly property string itemMenuCatalog: "itemMenuCatalog"
    readonly property string itemMenuHome: "itemMenuHome"

    property bool hide: false
    property bool disabled: false
    property string selectedPage: ""

    PullDownMenu {
        id: pullDownMenu
        topMargin: appTheme.paddingLarge
        bottomMargin: appTheme.paddingLarge
        visible: !idGlobalMenu.hide && !idGlobalMenu.disabled

        MenuItem {
            text: qsTr("Ваши заказы")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/OrderSearchPage.qml"), {}, PageStackAction.Replace)
            color: selectedPage === itemMenuOrderSearch ? "white" : "black"
        }
        MenuItem {
            text: qsTr("Контакты")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/Contact.qml"), {}, PageStackAction.Replace)
            color: selectedPage === itemMenuContacts ? "white" : "black"
        }
        MenuItem {
            text: qsTr("Корзина")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/CartPage.qml"), {}, PageStackAction.Replace)
            color: selectedPage === itemMenuCart ? "white" : "black"
        }
        MenuItem {
            text: qsTr("Каталог")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/CatalogPage.qml"), {}, PageStackAction.Replace)
            color: selectedPage === itemMenuCatalog ? "white" : "black"
        }
        MenuItem {
            text: qsTr("Главная")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/MainPage.qml"), {}, PageStackAction.Replace)
            color: selectedPage === itemMenuHome ? "white" : "black"
        }
    }

    Rectangle {
        width: parent.width - Theme.paddingLarge * 2
        height: parent.height
        color : appTheme.colorVariant2
        radius: appTheme.shapesLarge
        anchors.horizontalCenter: parent.horizontalCenter
        visible: !idGlobalMenu.hide && idGlobalMenu.disabled
    }
}


