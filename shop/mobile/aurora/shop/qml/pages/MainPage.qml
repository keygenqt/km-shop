import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0
import "../components" as Components


Page {
    id: homePage

    AppTheme {
        id: appTheme
    }

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height + appTheme.paddingLarge

        VerticalScrollDecorator {}

        PullDownMenu {
            id: pullDownMenu
            topMargin: appTheme.paddingLarge
            bottomMargin: appTheme.paddingLarge

            MenuItem {
                text: qsTr("Каталог")
                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("CatalogPage.qml"), {}, PageStackAction.Replace)
            }
            MenuItem {
                text: qsTr("Корзина")
                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("CartPage.qml"), {}, PageStackAction.Replace)
            }
        }

         Column {
             id: column
             width: parent.width

             PageHeader {
                 title: qsTr("Майшоп")
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

             Column {
                 width: parent.width - appTheme.paddingLarge * 2
                 spacing: appTheme.paddingMedium
                 anchors.horizontalCenter: parent.horizontalCenter

                 Row {
                     id: iconButtons
                     width: parent.width
                     spacing: appTheme.paddingMedium
                     anchors.horizontalCenter: parent.horizontalCenter

                     Components.AppBlock {
                         width: parent.width / 2 - appTheme.paddingMedium / 2
                         backgroundColor: appTheme.colorVariant2
                         disabled: false

                         onClicked: pageStack.animatorPush(Qt.resolvedUrl("Contact.qml"), {}, PageStackAction.Animated)

                         Row {
                             spacing: appTheme.paddingMedium
                             anchors.horizontalCenter: parent.horizontalCenter

                             Image {
                                 source: "image://theme/icon-m-mail?white"
                                 fillMode: Image.PreserveAspectFit
                                 anchors.verticalCenter: parent.verticalCenter
                                 width: 47
                                 height: 47
                             }
                             Label {
                                 text: qsTr("Контакты")
                                 color: "white"
                                 font.pixelSize: appTheme.fontSizeH6
                             }
                         }
                     }

                     Components.AppBlock {
                         width: parent.width / 2 - appTheme.paddingMedium / 2
                         backgroundColor: appTheme.colorVariant2
                         disabled: false

                         onClicked: pageStack.animatorPush(Qt.resolvedUrl("OrderSearchPage.qml"), {}, PageStackAction.Animated)

                         Row {
                             spacing: appTheme.paddingMedium
                             anchors.horizontalCenter: parent.horizontalCenter

                             Image {
                                 source: "image://theme/icon-m-company?white"
                                 fillMode: Image.PreserveAspectFit
                                 anchors.verticalCenter: parent.verticalCenter
                                 width: 47
                                 height: 47
                             }
                             Label {
                                 text: qsTr("Заказы")
                                 color: "white"
                                 font.pixelSize: appTheme.fontSizeH6
                             }
                         }
                     }
                 }

                 Components.AppBlock {
                     width: parent.width
                     backgroundColor: appTheme.colorVariant1

                     Row {
                         width: parent.width
                         spacing: appTheme.paddingSmall

                         Column {
                             width: parent.width - 180
                             spacing: appTheme.paddingSmall

                             Label {
                                 text: qsTr("В этом сезоне найди лучшее 🔥")
                                 color: "white"
                                 padding: 1
                                 font.pixelSize: appTheme.fontSizeBody2
                             }

                             Column {
                                 width: parent.width
                                 spacing: appTheme.paddingLarge

                                 Text {
                                     width: parent.width
                                     text: qsTr("Коллекции для вашего стиля")
                                     color: "white"
                                     wrapMode: Text.WordWrap
                                     font.pixelSize: appTheme.fontSizeH4
                                 }

                                 Components.AppButton {
                                     text: qsTr("Начните поиск")
                                     onClicked: console.log("Click")
                                     padding: appTheme.paddingMedium
                                     background: 'black'
                                 }
                             }
                         }

                         Image {
                             source: Qt.resolvedUrl("../icons/girl.png")
                             fillMode: Image.PreserveAspectFit
                             anchors.verticalCenter: parent.verticalCenter
                             width: 180
                             height: 180
                             anchors.bottom: parent.bottom
                         }
                     }
                 }

                 Components.AppBlock {
                     width: parent.width
                     backgroundColor: appTheme.colorVariant3

                     Column {
                         width: parent.width
                         spacing: appTheme.paddingLarge

                         Components.AppBlock {
                             width: parent.width
                             backgroundColor: "white"
                             bgSource: "../icons/cat_bg_1.svg"

                             Label {
                                 text: qsTr("Бантики")
                                 font.pixelSize: appTheme.fontSizeBody2
                                 bottomPadding: 5
                             }

                             Column {
                                 width: parent.width
                                 spacing: appTheme.paddingLarge

                                 Text {
                                     width: parent.width
                                     text: qsTr("Стильные бантики ручной работы")
                                     wrapMode: Text.WordWrap
                                     font.pointSize: appTheme.fontSizeBody1
                                 }

                                 Components.AppButton {
                                     text: qsTr("Смотреть")
                                     icon: "image://theme/icon-m-enter-next"
                                     onClicked: console.log("Click")
                                     padding: appTheme.paddingMedium
                                 }
                             }
                         }

                         Components.AppBlock {
                             width: parent.width
                             backgroundColor: "white"
                             bgSource: "../icons/cat_bg_2.svg"

                             Label {
                                 text: qsTr("Наборы")
                                 font.pixelSize: appTheme.fontSizeBody2
                                 bottomPadding: 5
                             }

                             Column {
                                 width: parent.width
                                 spacing: appTheme.paddingLarge

                                 Text {
                                     width: parent.width
                                     text: qsTr("Наборы бантиков на каждый день")
                                     wrapMode: Text.WordWrap
                                     font.pointSize: appTheme.fontSizeBody1
                                 }

                                 Components.AppButton {
                                     text: qsTr("Смотреть")
                                     icon: "image://theme/icon-m-enter-next"
                                     onClicked: console.log("Click")
                                     padding: appTheme.paddingMedium
                                 }
                             }
                         }

                         Components.AppBlock {
                             width: parent.width
                             backgroundColor: "white"
                             bgSource: "../icons/cat_bg_3.svg"

                             Label {
                                 text: qsTr("Ободки")
                                 font.pixelSize: appTheme.fontSizeBody2
                                 bottomPadding: 5
                             }

                             Column {
                                 width: parent.width
                                 spacing: appTheme.paddingLarge

                                 Text {
                                     width: parent.width
                                     text: qsTr("Стильные бантики ручной работы")
                                     wrapMode: Text.WordWrap
                                     font.pointSize: appTheme.fontSizeBody1
                                 }

                                 Components.AppButton {
                                     text: qsTr("Смотреть")
                                     icon: "image://theme/icon-m-enter-next"
                                     onClicked: console.log("Click")
                                     padding: appTheme.paddingMedium
                                 }
                             }
                         }
                     }
                 }
             }
         }
    }
}
