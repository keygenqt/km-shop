import QtQuick 2.0
import Sailfish.Silica 1.0

Page {
    id: homePage

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height + Theme.paddingLarge

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

                     MouseArea {
                         id: customButton
                         width: parent.width / 2 - Theme.paddingMedium / 2
                         height: contentButton.height

                         property bool press: true

                         onClicked: console.log("clicked!")
                         onPressedChanged: {
                             customButton.press = !customButton.press
                         }

                         Rectangle {
                             width: parent.width
                             height: parent.height
                             color : "#cf525297"
                             radius: 20
                             visible: customButton.press
                         }

                         Rectangle {
                             width: parent.width
                             height: parent.height
                             color : "#17827b"
                             radius: 20
                             visible: !customButton.press
                         }

                         Column {
                             id: contentButton
                             anchors.centerIn: parent

                             Label {
                                 text: "Click me"
                                 color: "white"
                                 padding: Theme.paddingLarge
                             }
                         }
                     }

                     MouseArea {
                         id: customButton2
                         width: parent.width / 2 - Theme.paddingMedium / 2
                         height: contentButton.height

                         property bool press: true

                         onClicked: console.log("clicked!")
                         onPressedChanged: {
                             customButton2.press = !customButton2.press
                         }

                         Rectangle {
                             width: parent.width
                             height: parent.height
                             color : "#cf525297"
                             radius: 20
                             visible: customButton2.press
                         }

                         Rectangle {
                             width: parent.width
                             height: parent.height
                             color : "#17827b"
                             radius: 20
                             visible: !customButton2.press
                         }

                         Column {
                             id: contentButton2
                             anchors.centerIn: parent

                             Label {
                                 text: "Click me"
                                 color: "white"
                                 padding: Theme.paddingLarge
                             }
                         }
                     }
                 }

                 Rectangle {
                     width: parent.width
                     height: 250
                     color : "black"
                     radius: 20
                 }

                 Rectangle {
                     width: parent.width
                     height: 900
                     color : "black"
                     radius: 20
                 }
             }
         }
    }

//    SilicaListView {
//        id: listView
//        anchors.fill: parent

//        header: PageHeader {
//            title: qsTr("Майшоп")
//            extraContent.children: [
//                Image {
//                    source: Qt.resolvedUrl("../icons/toolbar_icon.png")
//                    fillMode: Image.PreserveAspectFit
//                    anchors.verticalCenter: parent.verticalCenter
//                    width: 60
//                    height: 60
//                }
//            ]
//        }

//        PullDownMenu {
//            id: pullDownMenu

//            MenuItem {
//                text: qsTr("Каталог")
//                visible: !listView.count
//                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("CatalogPage.qml"), {}, PageStackAction.Replace)
//            }
//            MenuItem {
//                text: qsTr("Корзина")
//                onClicked: pageStack.animatorReplace(Qt.resolvedUrl("CartPage.qml"), {}, PageStackAction.Replace)
//            }
//        }

//        delegate: ListItem {
//            Rectangle {
//                width: parent.width
//                height: 200
//                color : "black"
//            }
//        }


//    }
}
