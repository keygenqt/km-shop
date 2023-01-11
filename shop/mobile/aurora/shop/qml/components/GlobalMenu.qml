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

    property bool update: false
    property bool hide: false
    property bool disabled: false
    property string selectedPage: ""
    property var menuUpdate

    function selectPage(key, page) {
        if (idGlobalMenu.selectedPage === key && idGlobalMenu.menuUpdate !== undefined) {
            idGlobalMenu.menuUpdate()
        } else {
            pageStack.animatorReplace(Qt.resolvedUrl("../pages/" + page), {}, PageStackAction.Replace)
        }
    }

    PullDownMenu {
        id: pullDownMenu
        topMargin: appTheme.paddingLarge
        bottomMargin: appTheme.paddingLarge
        visible: !idGlobalMenu.hide && !idGlobalMenu.disabled

        MenuItem {
            text: qsTr("Контакты")
            color: selectedPage === itemMenuContacts ? "white" : "black"
            onClicked: idGlobalMenu.selectPage(itemMenuContacts, "ContactPage.qml")
            visible: !idGlobalMenu.update
        }
        MenuItem {
            text: qsTr("Корзина")
            color: selectedPage === itemMenuCart ? "white" : "black"
            onClicked: idGlobalMenu.selectPage(itemMenuCart, "CartPage.qml")
            visible: !idGlobalMenu.update
        }
        MenuItem {
            text: qsTr("Главная")
            color: selectedPage === itemMenuHome ? "white" : "black"
            onClicked: idGlobalMenu.selectPage(itemMenuHome, "MainPage.qml")
            visible: !idGlobalMenu.update
        }
        MenuItem {
            text: qsTr("Обновить")
            color: "white"
            onClicked: idGlobalMenu.menuUpdate()
            visible: idGlobalMenu.update
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


