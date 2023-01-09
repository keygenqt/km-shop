import QtQuick 2.0
import Sailfish.Silica 1.0
import AppTheme 1.0
import QtGraphicalEffects 1.0
import "../components" as Components

Page {
    id: catalogPage

    property int tabIndex: 0

    AppTheme {
        id: appTheme
    }

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height + appTheme.paddingLarge

        VerticalScrollDecorator {}

        Components.GlobalMenu {
            disabled: contentCat.loadingCat || contentColl.loadingColl
        }

        Column {
            id: column
            width: parent.width

            Components.MainPageHeader {
                title: qsTr("Каталог")
            }

            Rectangle {
                height: contentPage.height
                width: parent.width - appTheme.paddingLarge * 2
                anchors.horizontalCenter: parent.horizontalCenter
                color: "transparent"

                Column {
                    id: contentPage
                    width: parent.width
                    spacing: appTheme.paddingMedium

                    Components.AppTabs {
                        id: appTabs
                        width: parent.width
                        textTab0: qsTr("Категории")
                        textTab1: qsTr("Коллекции")
                        onTabChanged: tabIndex = appTabs.tab;
                    }

                    Column {
                        id: contentCat
                        visible: tabIndex == 0
                        opacity: tabIndex == 0 ? 1.0 : 0.9
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Behavior on opacity {
                            NumberAnimation { properties: "opacity"; easing.type: Easing.InOutQuad; duration: 300 }
                        }

                        property var responseCat
                        property string errorCat: ""
                        property bool loadingCat: true

                        Component.onCompleted: {
                            agent.run(
                                "kmm.Requests.get.categoriesPublished()",
                                function(result) {
                                    try {
                                        var list = JSON.parse(result)
                                        contentCat.responseCat = list
                                        for (var index = 0; index < list.length; index++) {
                                            categoriesModel.append(list[index])
                                        }
                                    } catch (e) {
                                        contentCat.errorCat = error
                                    }
                                    contentCat.loadingCat = false
                                },
                                function(error) {
                                    contentCat.errorCat = error
                                    contentCat.loadingCat = false
                                }
                            )
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant1
                            backgroundColor: 'transparent'
                            visible: contentCat.loadingCat || contentCat.errorCat !== ""

                            Components.BlockLoading {
                                color: appTheme.colorVariant1
                                visible: contentCat.loadingCat
                            }

                            Components.BlockError {
                                color: appTheme.colorVariant1
                                error: contentCat.errorCat
                                visible: contentCat.errorCat !== ""
                            }
                        }

                        ListModel {
                            id: categoriesModel
                        }

                        Repeater {
                              model: categoriesModel
                              delegate: Components.AppBlock {
                                  width: parent.width
                                  borderColor: appTheme.colorVariant2
                                  disabled: false

                                  Row {
                                      width: parent.width
                                      spacing: appTheme.paddingLarge

                                      Image {
                                          id: img
                                          source: Qt.resolvedUrl(f4o_1)
                                          fillMode: Image.PreserveAspectCrop
                                          anchors.verticalCenter: parent.verticalCenter
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
                                                  text: d4o_1
                                                  wrapMode: Text.WordWrap
                                                  font.pixelSize: appTheme.fontSizeH6
                                              }

                                              Text {
                                                  width: parent.width
                                                  text: e4o_1
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
                        visible: tabIndex == 1
                        opacity: tabIndex == 1 ? 1.0 : 0.9
                        width: parent.width
                        spacing: appTheme.paddingMedium

                        Behavior on opacity {
                            NumberAnimation { properties: "opacity"; easing.type: Easing.InOutQuad; duration: 300 }
                        }

                        property var responseColl
                        property string errorColl: ""
                        property bool loadingColl: true

                        Component.onCompleted: {
                            agent.run(
                                "kmm.Requests.get.collectionsPublished()",
                                function(result) {
                                    try {
                                        var list = JSON.parse(result)
                                        contentColl.responseColl = list
                                        for (var index = 0; index < list.length; index++) {
                                            collectionsModel.append(list[index])
                                        }
                                    } catch (e) {
                                        contentColl.errorColl = error
                                    }
                                    contentColl.loadingColl = false
                                },
                                function(error) {
                                    contentColl.errorColl = error
                                    contentColl.loadingColl = false
                                }
                            )
                        }

                        Components.AppBlock {
                            width: parent.width
                            borderColor: appTheme.colorVariant1
                            backgroundColor: 'transparent'
                            visible: contentColl.loadingColl || contentColl.errorColl !== ""

                            Components.BlockLoading {
                                color: appTheme.colorVariant1
                                visible: contentColl.loadingColl
                            }

                            Components.BlockError {
                                color: appTheme.colorVariant1
                                error: contentColl.errorColl
                                visible: contentColl.errorColl !== ""
                            }
                        }

                        ListModel {
                            id: collectionsModel
                        }

                        Repeater {
                              model: collectionsModel
                              delegate: Components.AppBlock {
                                  width: parent.width
                                  borderColor: appTheme.colorVariant2
                                  disabled: false

                                  Row {
                                      width: parent.width
                                      spacing: appTheme.paddingLarge


                                      Rectangle {
                                          id: iconRect
                                          width: 90
                                          height: 90
                                          color: "transparent"
                                          border.color: appTheme.colorVariant2
                                          border.width: 2
                                          radius: 200

                                          Image {
                                              id: img2
                                              source: Qt.resolvedUrl("https://shop-api.keygenqt.com/api/uploads/" + v4o_1)
                                              fillMode: Image.PreserveAspectCrop
                                              anchors.centerIn: parent
                                              width: 50
                                              height: 50
                                              layer.enabled: true
                                              layer.effect: ColorOverlay{
                                                  color: appTheme.colorVariant1
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
                                                  text: t4o_1
                                                  wrapMode: Text.WordWrap
                                                  font.pixelSize: appTheme.fontSizeH6
                                              }

                                              Text {
                                                  width: parent.width
                                                  text: u4o_1
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
        }
    }
}
