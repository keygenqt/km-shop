import QtQuick 2.0
import Sailfish.Silica 1.0

Rectangle {

    id: idGlobalMenu

    height: 10
    width: parent.width
    color: 'transparent'

    readonly property string itemMenuContacts: "itemMenuContacts"
    readonly property string itemMenuCart: "itemMenuCart"
    readonly property string itemMenuHome: "itemMenuHome"
    readonly property string noActiveColor: idApp.getPerceptualBrightness(Theme.highlightDimmerColor) < 765 ? "gray" : "black"

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
            color: selectedPage === itemMenuContacts ? "white" : idGlobalMenu.noActiveColor
            onClicked: idGlobalMenu.selectPage(itemMenuContacts, "ContactPage.qml")
            visible: !idGlobalMenu.update
        }
        MenuItem {
            text: qsTr("Корзина")
            color: selectedPage === itemMenuCart ? "white" : idGlobalMenu.noActiveColor
            onClicked: idGlobalMenu.selectPage(itemMenuCart, "CartPage.qml")
            visible: !idGlobalMenu.update
        }
        MenuItem {
            text: qsTr("Главная")
            color: selectedPage === itemMenuHome ? "white" : idGlobalMenu.noActiveColor
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


