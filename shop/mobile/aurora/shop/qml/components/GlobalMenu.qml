import QtQuick 2.0
import Sailfish.Silica 1.0

Rectangle {

    height: 10
    width: parent.width
    color: 'transparent'

    property bool disabled: false

    PullDownMenu {
        id: pullDownMenu
        topMargin: appTheme.paddingLarge
        bottomMargin: appTheme.paddingLarge
        visible: !disabled

        MenuItem {
            text: qsTr("Ваши заказы")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/OrderSearchPage.qml"), {}, PageStackAction.Replace)
        }
        MenuItem {
            text: qsTr("Контакты")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/Contact.qml"), {}, PageStackAction.Replace)
        }
        MenuItem {
            text: qsTr("Корзина")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/CartPage.qml"), {}, PageStackAction.Replace)
        }
        MenuItem {
            text: qsTr("Каталог")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/CatalogPage.qml"), {}, PageStackAction.Replace)
        }
        MenuItem {
            text: qsTr("Главная")
            onClicked: pageStack.animatorReplace(Qt.resolvedUrl("../pages/MainPage.qml"), {}, PageStackAction.Replace)
        }
    }

    Rectangle {
        width: parent.width - Theme.paddingLarge * 2
        height: parent.height
        color : appTheme.colorVariant2
        radius: appTheme.shapesLarge
        anchors.horizontalCenter: parent.horizontalCenter
        visible: disabled
    }
}


