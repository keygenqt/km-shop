import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: catalogPage

    property bool menu: true
    property int index: 0

    property int _tabIndex: catalogPage.index

    ListModel {
        id: categoriesModel
    }

    QtObject {
        id: stateCattegories
        property var response
        property string error: ""
        property bool loading: true
        function clear() {
            response = undefined; error = ""; loading = true; categoriesModel.clear()
        }
    }

    ListModel {
        id: collectionsModel
    }

    QtObject {
        id: stateCollections
        property var response
        property string error: ""
        property bool loading: true
        function clear() {
            response = undefined; error = ""; loading = true; collectionsModel.clear()
        }
    }

    function update() {
        // clear state
        stateCattegories.clear()
        stateCollections.clear()
        // get categories
        agent.run(
            "kmm.Service.get.categoriesPublished()",
            function(result) {
                try {
                    var list = JSON.parse(result)
                    stateCattegories.response = list
                    for (var index = 0; index < list.length; index++) {
                        categoriesModel.append(list[index])
                    }
                } catch (e) {
                    stateCattegories.error = error
                }
                stateCattegories.loading = false
            },
            function(error) {
                stateCattegories.error = error
                stateCattegories.loading = false
            }
        )
        // get collections
        agent.run(
            "kmm.Service.get.collectionsPublished()",
            function(result) {
                try {
                    var list = JSON.parse(result)
                    stateCollections.response = list
                    for (var index = 0; index < list.length; index++) {
                        collectionsModel.append(list[index])
                    }
                } catch (e) {
                    stateCollections.error = error
                }
                stateCollections.loading = false
            },
            function(error) {
                stateCollections.error = error
                stateCollections.loading = false
            }
        )
    }

    onStatusChanged: {
        if (status == PageStatus.Active && (stateCattegories.loading || stateCollections.loading)) {
            catalogPage.update()
        }
    }

    Components.AppPage {
        id: idAppPage
        header: qsTr("Каталог")
        menuDisabled: stateCattegories.loading || stateCollections.loading
        selectedPage: "itemMenuCatalog"
        fixed: stateCattegories.loading || stateCollections.loading
        menuIsUpdate: !menu
        menuUpdate: function () {
            catalogPage.update()
        }

        Components.AppTabs {
            id: appTabs
            tab: index
            width: parent.width
            textTab0: qsTr("Категории")
            textTab1: qsTr("Коллекции")
            onChangeTabIndex: _tabIndex = index;
        }

        Column {
            id: contentCat
            visible: _tabIndex == 0
            opacity: _tabIndex == 0 ? 1.0 : 0.9
            width: parent.width
            spacing: appTheme.paddingMedium

            Behavior on opacity {
                NumberAnimation { properties: "opacity"; easing.type: Easing.InOutQuad; duration: 300 }
            }

            Components.AppBlock {
                height: idAppPage.pageH - appTabs.height - appTheme.paddingMedium
                width: parent.width
                borderColor: 'transparent'
                backgroundColor: 'transparent'
                visible: stateCattegories.loading || stateCattegories.error !== ""

                Components.BlockLoading {
                    visible: stateCattegories.loading
                }

                Components.BlockError {
                    visible: stateCattegories.error !== ""
                }
            }

            Repeater {
                  model: categoriesModel
                  delegate: Components.AppBlock {
                      width: parent.width
                      borderColor: idApp.colors.highlightDarkColor
                      disabled: false

                      onEndAnimationClick: pageStack.push(Qt.resolvedUrl("ProductsPage.qml"), {categories: [id]})

                      Row {
                          width: parent.width
                          spacing: appTheme.paddingLarge

                          Image {
                              id: img
                              source: Qt.resolvedUrl(image)
                              fillMode: Image.PreserveAspectCrop
                              width: 90
                              height: 90
                              layer.enabled: true
                              layer.effect: OpacityMask {
                                  maskSource: Item {
                                      width: img.width
                                      height: img.height
                                      Rectangle {
                                          anchors.centerIn: parent
                                          width: img.adapt ? img.width : Math.min(img.width, img.height)
                                          height: img.adapt ? img.height : width
                                          radius: Math.min(width, height)
                                      }
                                  }
                              }
                          }

                          Rectangle {
                              color: 'transparent'
                              height: iconData.height
                              width: parent.width - img.width - appTheme.paddingLarge
                              anchors.verticalCenter: parent.verticalCenter

                              Column {
                                  id: iconData
                                  width: parent.width
                                  spacing: appTheme.paddingSmall
                                  anchors.top: parent.top
                                  anchors.topMargin: -3

                                  Text {
                                      width: parent.width
                                      text: name
                                      wrapMode: Text.WordWrap
                                      font.pixelSize: appTheme.fontSizeH6
                                      color: idApp.colors.highlightDarkColor
                                  }

                                  Text {
                                      width: parent.width
                                      text: desc
                                      wrapMode: Text.WordWrap
                                      font.pixelSize: appTheme.fontSizeCaption
                                  }
                              }
                          }
                      }
                  }
           }
        }

        Column {
            id: contentColl
            visible: _tabIndex == 1
            opacity: _tabIndex == 1 ? 1.0 : 0.9
            width: parent.width
            spacing: appTheme.paddingMedium

            Behavior on opacity {
                NumberAnimation { properties: "opacity"; easing.type: Easing.InOutQuad; duration: 300 }
            }

            Components.AppBlock {
                height: idAppPage.pageH - appTabs.height - appTheme.paddingMedium
                width: parent.width
                borderColor: 'transparent'
                backgroundColor: 'transparent'
                visible: stateCollections.loading || stateCollections.error !== ""

                Components.BlockLoading {
                    visible: stateCollections.loading
                }

                Components.BlockError {
                    visible: stateCollections.error !== ""
                }
            }

            Repeater {
                  model: collectionsModel
                  delegate: Components.AppBlock {
                      width: parent.width
                      borderColor: idApp.colors.highlightDarkColor
                      disabled: false

                      onEndAnimationClick: pageStack.push(Qt.resolvedUrl("ProductsPage.qml"), {collections: [id]})

                      Row {
                          width: parent.width
                          spacing: appTheme.paddingLarge

                          Rectangle {
                              id: iconRect
                              width: 90
                              height: 90
                              color: "transparent"
                              border.color: idApp.colors.highlightDarkColor
                              border.width: 2
                              radius: 20

                              Image {
                                  id: img2
                                  source: Qt.resolvedUrl(idApp.constants.apiUrl + "api/uploads/" + icon)
                                  fillMode: Image.PreserveAspectCrop
                                  anchors.centerIn: parent
                                  width: 50
                                  height: 50
                                  layer.enabled: true
                                  layer.effect: ColorOverlay{
                                      color: idApp.colors.highlightDarkColor
                                  }
                              }
                          }


                          Rectangle {
                              color: 'transparent'
                              height: iconData2.height
                              width: parent.width - iconRect.width - appTheme.paddingLarge
                              anchors.verticalCenter: parent.verticalCenter

                              Column {
                                  id: iconData2
                                  width: parent.width
                                  spacing: appTheme.paddingSmall
                                  anchors.top: parent.top
                                  anchors.topMargin: -3

                                  Text {
                                      width: parent.width
                                      text: name
                                      wrapMode: Text.WordWrap
                                      font.pixelSize: appTheme.fontSizeH6
                                      color: idApp.colors.highlightDarkColor
                                  }

                                  Text {
                                      width: parent.width
                                      text: desc
                                      wrapMode: Text.WordWrap
                                      font.pixelSize: appTheme.fontSizeCaption
                                  }
                              }
                          }
                      }
                  }
           }
        }
    }
}
