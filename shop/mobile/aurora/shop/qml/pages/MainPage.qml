import QtQuick 2.0
import Sailfish.Silica 1.0
import Colors 1.0
import "../components" as Components


Page {
    id: homePage

    ColorsConsts {
        id: colors
    }

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height + Theme.paddingLarge

        VerticalScrollDecorator {}

        PullDownMenu {
            id: pullDownMenu
            topMargin: Theme.paddingLarge
            bottomMargin: Theme.paddingLarge

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
                 width: parent.width - Theme.paddingLarge * 2
                 spacing: Theme.paddingMedium
                 anchors.horizontalCenter: parent.horizontalCenter

                 Row {
                     id: iconButtons
                     width: parent.width
                     spacing: Theme.paddingMedium
                     anchors.horizontalCenter: parent.horizontalCenter

                     Components.AppBlock {
                         width: parent.width / 2 - Theme.paddingMedium / 2
                         backgroundColor: colors.bgVariant2
                         disabled: false

                         onClicked: pageStack.animatorPush(Qt.resolvedUrl("Contact.qml"), {}, PageStackAction.Animated)

                         Row {
                             spacing: Theme.paddingMedium
                             anchors.horizontalCenter: parent.horizontalCenter

                             Image {
                                 source: "image://theme/icon-m-mail?white"
                                 fillMode: Image.PreserveAspectFit
                                 anchors.verticalCenter: parent.verticalCenter
                                 width: 45
                                 height: 45
                             }
                             Label {
                                 text: qsTr("Контакты")
                                 color: "white"
                             }
                         }
                     }

                     Components.AppBlock {
                         width: parent.width / 2 - Theme.paddingMedium / 2
                         backgroundColor: colors.bgVariant2
                         disabled: false

                         onClicked: pageStack.animatorPush(Qt.resolvedUrl("OrderSearchPage.qml"), {}, PageStackAction.Animated)

                         Row {
                             spacing: Theme.paddingMedium
                             anchors.horizontalCenter: parent.horizontalCenter

                             Image {
                                 source: "image://theme/icon-m-company?white"
                                 fillMode: Image.PreserveAspectFit
                                 anchors.verticalCenter: parent.verticalCenter
                                 width: 45
                                 height: 45
                             }
                             Label {
                                 text: qsTr("Заказы")
                                 color: "white"
                             }
                         }
                     }
                 }

                 Components.AppBlock {
                     width: parent.width
                     backgroundColor: colors.bgVariant1

                     Row {
                         width: parent.width
                         spacing: Theme.paddingSmall

                         Column {
                             width: parent.width - 180
                             spacing: Theme.paddingSmall

                             Label {
                                 text: qsTr("В этом сезоне найди лучшее 🔥")
                                 color: "white"
                                 padding: 1
                                 font.pixelSize: Theme.fontSizeTiny
                             }

                             Column {
                                 width: parent.width
                                 spacing: Theme.paddingLarge

                                 Text {
                                     width: parent.width
                                     text: qsTr("Коллекции для вашего стиля")
                                     color: "white"
                                     wrapMode: Text.WordWrap
                                     font.pointSize: Theme.fontSizeLarge
                                 }

                                 Components.AppButton {
                                     text: qsTr("Начните поиск")
                                     onClicked: console.log("Click")
                                     padding: Theme.paddingMedium
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
                     backgroundColor: colors.bgVariant3

                     Column {
                         width: parent.width
                         spacing: Theme.paddingLarge

                         Components.AppBlock {
                             width: parent.width
                             backgroundColor: "white"
                             bgSource: "../icons/cat_bg_1.svg"

                             Label {
                                 text: qsTr("Бантики")
                                 font.pixelSize: Theme.fontSizeTiny
                                 bottomPadding: 5
                             }

                             Column {
                                 width: parent.width
                                 spacing: Theme.paddingLarge

                                 Text {
                                     width: parent.width
                                     text: qsTr("Стильные бантики ручной работы")
                                     wrapMode: Text.WordWrap
                                     font.pointSize: Theme.fontSizeMedium
                                 }

                                 Components.AppButton {
                                     text: qsTr("Смотреть")
                                     icon: "image://theme/icon-m-enter-next"
                                     onClicked: console.log("Click")
                                     padding: Theme.paddingMedium
                                 }
                             }
                         }

                         Components.AppBlock {
                             width: parent.width
                             backgroundColor: "white"
                             bgSource: "../icons/cat_bg_2.svg"

                             Label {
                                 text: qsTr("Наборы")
                                 font.pixelSize: Theme.fontSizeTiny
                                 bottomPadding: 5
                             }

                             Column {
                                 width: parent.width
                                 spacing: Theme.paddingLarge

                                 Text {
                                     width: parent.width
                                     text: qsTr("Наборы бантиков на каждый день")
                                     wrapMode: Text.WordWrap
                                     font.pointSize: Theme.fontSizeMedium
                                 }

                                 Components.AppButton {
                                     text: qsTr("Смотреть")
                                     icon: "image://theme/icon-m-enter-next"
                                     onClicked: console.log("Click")
                                     padding: Theme.paddingMedium
                                 }
                             }
                         }

                         Components.AppBlock {
                             width: parent.width
                             backgroundColor: "white"
                             bgSource: "../icons/cat_bg_3.svg"

                             Label {
                                 text: qsTr("Ободки")
                                 font.pixelSize: Theme.fontSizeTiny
                                 bottomPadding: 5
                             }

                             Column {
                                 width: parent.width
                                 spacing: Theme.paddingLarge

                                 Text {
                                     width: parent.width
                                     text: qsTr("Стильные бантики ручной работы")
                                     wrapMode: Text.WordWrap
                                     font.pointSize: Theme.fontSizeMedium
                                 }

                                 Components.AppButton {
                                     text: qsTr("Смотреть")
                                     icon: "image://theme/icon-m-enter-next"
                                     onClicked: console.log("Click")
                                     padding: Theme.paddingMedium
                                 }
                             }
                         }
                     }
                 }
             }
         }
    }
}
