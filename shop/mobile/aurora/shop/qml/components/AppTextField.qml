import QtQuick 2.0
import Sailfish.Silica 1.0

Column {
    id: idMainBlock
    width: parent.width
    spacing: 10

    property bool singleLine: true
    property bool disabled: false
    property string error: ""
    property alias placeholderText: idTextField.placeholderText
    property alias text: idTextField.text
    property alias inputMethodHints: idTextField.inputMethodHints

    property color color: "#74828e"
    property string focusColor: idApp.colors.highlightDarkColor
    property color errorColor: appTheme.colorError

    readonly property color nowColor: error.length !== 0 ? errorColor : (idTextField.focus ? focusColor : color)

    signal clickedEnter()

    Rectangle {
        id: idRec

        width: parent.width
        height: idTextField.height + 24
        color: 'transparent'
        opacity: idMainBlock.disabled ? 0.5 : 1.0

        TextArea {
            id: idTextField
            color: idMainBlock.error.length === 0 ? 'black' : errorColor
            placeholderColor: nowColor
            cursorColor: idMainBlock.error.length === 0 ? 'black' : errorColor

            labelVisible: false
            anchors.bottom: parent.bottom
            anchors.bottomMargin: 6

            property int radius: appTheme.shapesMedium

            EnterKey.onClicked: {
                if (idMainBlock.singleLine) {
                    idTextField.text = idTextField.text.replace("\n", "")
                    idTextField.cursorPosition = idTextField.text.length
                }
                clickedEnter()
            }

            background: Component {
                Rectangle {
                    width: parent.width
                    height: parent.height + 6
                    color: 'transparent'

                    Item {
                        anchors.topMargin: -18
                        anchors.top: parent.top
                        anchors.left: parent.left
                        anchors.right: parent.right
                        anchors.bottom: parent.bottom

                        Rectangle {
                           color: idMainBlock.nowColor
                           radius: idTextField.radius
                           anchors.fill: parent
                           opacity: 0.2
                        }

                        Rectangle {
                           color: idMainBlock.nowColor
                           height: 2
                           anchors.bottom: parent.bottom
                           anchors.right: parent.right
                           anchors.left: parent.left
                           anchors.leftMargin: idTextField.radius + 10
                           anchors.rightMargin: idTextField.radius + 10
                           radius: idTextField.radius
                        }

                        Rectangle {
                           color: idMainBlock.error.length === 0 ? idMainBlock.focusColor : idMainBlock.errorColor
                           height: 4
                           width: idTextField.focus ? (parent.width - idTextField.radius * 2 - 10) : 0
                           anchors.bottom: parent.bottom
                           anchors.horizontalCenter: parent.horizontalCenter
                           radius: idTextField.radius

                           Behavior on width {
                               NumberAnimation {
                                   id: animation
                                   properties: "width";
                                   easing.type: Easing.InOutQuad;
                                   duration: 150
                                   onRunningChanged: {
                                       if (!animation.running) {

                                       }
                                   }
                               }
                           }
                        }
                    }
                }
            }
        }

        MouseArea {
            height: parent.height
            width: parent.width
            visible: idMainBlock.disabled
        }
    }

    Text {
        text: error
        color: idMainBlock.errorColor
        wrapMode: Text.WordWrap
        horizontalAlignment: Text.AlignLeft
        font.pixelSize: appTheme.fontSizeCaption
        visible: error.length !== 0
        anchors.right: parent.right
        anchors.left: parent.left
        anchors.leftMargin: idTextField.radius + 10
        anchors.rightMargin: idTextField.radius + 10
    }
}



