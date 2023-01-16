import QtQuick 2.0
import Sailfish.Silica 1.0

SilicaFlickable {

    id: item

    property string header: ""
    property string selectedPage: ""
    property bool menuDisabled: false
    property bool iconsDisabled: false
    property bool menuIsUpdate: false
    property var menuUpdate
    property bool fixed: true
    property bool loading: false
    property var iconSearch
    property var iconSettings
    property var iconSort1
    property var iconSort2
    property var iconSort3
    property bool disablePaddingIcons: false
    property bool hidePaddingIcons: false
    property int endScrollPadding: 0

    default property alias children: idContent.data

    property int pageH: idApp.height - idHeader.height - appTheme.paddingMedium - idMenu.height

    signal endScroll()

    anchors.fill: parent
    contentHeight: column.height + appTheme.paddingLarge

    onContentYChanged: {
        if (column.height + appTheme.paddingLarge <= contentY + idApp.height + item.endScrollPadding) {
            item.endScroll()
        }
    }

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
            iconSettings: item.iconSettings
            iconSort1: item.iconSort1
            iconSort2: item.iconSort2
            iconSort3: item.iconSort3
            loading: item.loading
            disablePaddingIcons: item.disablePaddingIcons
            hidePaddingIcons: item.hidePaddingIcons
            iconsDisabled: item.iconsDisabled
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
