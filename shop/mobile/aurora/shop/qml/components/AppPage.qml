import QtQuick 2.0
import Sailfish.Silica 1.0

SilicaFlickable {

    id: item

    property string header: ""
    property string selectedPage: ""
    property bool menuDisabled: false
    property bool menuIsUpdate: false
    property var menuUpdate
    property bool fixed: true
    property bool loading: false
    property var iconSearch

    default property alias children: idContent.data

    property int pageH: idApp.height - idHeader.height - appTheme.paddingMedium - idMenu.height

    anchors.fill: parent
    contentHeight: column.height + appTheme.paddingLarge

    VerticalScrollDecorator {}

    GlobalMenu {
        id: idMenu
        selectedPage: item.selectedPage
        disabled: item.menuDisabled
        hide: item.selectedPage.length === 0 && !item.menuUpdate
        update: item.menuIsUpdate
        menuUpdate: item.menuUpdate
    }

    Column {
        id: column
        width: parent.width
        spacing: 0

        MainPageHeader {
            id: idHeader
            title: item.header
            visible: item.header.length !== 0
            iconMain: item.selectedPage.length !== 0
            iconSearch: item.iconSearch
            loading: item.loading
        }

        Column {
            id: idContent
            height: item.fixed ? pageH : undefined
            width: parent.width - appTheme.paddingLarge * 2
            spacing: appTheme.paddingMedium
            anchors.horizontalCenter: parent.horizontalCenter
        }
    }
}
