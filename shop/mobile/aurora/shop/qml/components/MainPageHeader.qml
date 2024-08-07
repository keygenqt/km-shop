import QtQuick 2.0
import Sailfish.Silica 1.0

PageHeader {
    id: idHeader

    property bool loading: false
    property bool iconMain: true
    property var iconSearch
    property var iconSettings
    property var iconSort1
    property var iconSort2
    property var iconSort3
    property bool disablePaddingIcons: false
    property bool hidePaddingIcons: false
    property bool iconsDisabled: false

    extraContent.children: [
        Row {
            height: parent.height
            spacing: 0

            BlockLoading {
                size: 60
                width: 60
                visible: idHeader.loading
                anchors.verticalCenter: parent.verticalCenter
            }

            Image {
                source: Qt.resolvedUrl("../icons/toolbar_icon.png")
                fillMode: Image.PreserveAspectFit
                anchors.verticalCenter: parent.verticalCenter
                width: 60
                height: 60
                visible: iconMain && !idHeader.loading
            }

            Rectangle {
                height: 1
                width: iconMain ? appTheme.paddingLarge : (idHeader.disablePaddingIcons ? 0 : 50)
                color: 'transparent'
                Behavior on width {
                    NumberAnimation { properties: "width"; easing.type: Easing.InOutQuad; duration: 20 }
                }
                visible: !hidePaddingIcons && !idHeader.loading
            }

            Row {
                height: parent.height
                spacing: appTheme.paddingLarge
                visible: !idHeader.loading

                AppIconButton {
                    icon.source: Qt.resolvedUrl("../icons/ic_manage_search.svg")
                    icon.anchors.topMargin: -3
                    anchors.verticalCenter: parent.verticalCenter
                    onEndAnimationClick: idHeader.iconSearch()
                    visible: idHeader.iconSearch !== undefined
                    disabled: idHeader.iconsDisabled
                }

                AppIconButton {
                    icon.source: Qt.resolvedUrl("../icons/ic_filter_list.svg")
                    anchors.verticalCenter: parent.verticalCenter
                    onEndAnimationClick: idHeader.iconSettings()
                    visible: idHeader.iconSettings !== undefined
                    disabled: idHeader.iconsDisabled
                }

                AppIconButton {
                    icon.source: Qt.resolvedUrl("../icons/ic_sort.svg")
                    anchors.verticalCenter: parent.verticalCenter
                    onEndAnimationClick: idHeader.iconSort1()
                    visible: idHeader.iconSort1 !== undefined
                    disabled: idHeader.iconsDisabled
                }

                AppIconButton {
                    icon.source: Qt.resolvedUrl("../icons/ic_trending_down.svg")
                    anchors.verticalCenter: parent.verticalCenter
                    onEndAnimationClick: idHeader.iconSort2()
                    visible: idHeader.iconSort2 !== undefined
                    disabled: idHeader.iconsDisabled
                }

                AppIconButton {
                    icon.source: Qt.resolvedUrl("../icons/ic_trending_up.svg")
                    anchors.verticalCenter: parent.verticalCenter
                    onEndAnimationClick: idHeader.iconSort3()
                    visible: idHeader.iconSort3 !== undefined
                    disabled: idHeader.iconsDisabled
                }
            }
        }
    ]
}
