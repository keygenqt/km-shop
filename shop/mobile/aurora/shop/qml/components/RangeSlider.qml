import QtQuick 2.0

Rectangle {
    id: idMain
    height: idMain._size
    width: parent.width
    color: 'transparent'

    property int _size: 50
    property var _minX: idMain._size / 2
    property var _maxX: idMain.width - idMain._minX
    property var _rec1X: 0.0
    property bool _isRrec1: true
    property bool _press: false

    Rectangle {
        width: parent.width - 4
        anchors.centerIn: parent
        height: 10
        radius: 10
    }

    Rectangle {
        id: rect1
        x: 0.0
        width: idMain._size
        height: idMain._size
        radius: idMain._size
        color: "red"
        MouseArea {
            hoverEnabled: true
            propagateComposedEvents: true
            anchors.fill: parent
            clip: true
            onPressed: {
                idMain._press = true
                idMain._isRrec1 = true
            }
            onReleased: {
                idMain._press = false
            }
        }
    }

    Rectangle {
        id: rect2
        x: idMain.width - idMain._size
        width: idMain._size
        height: idMain._size
        radius: idMain._size
        color: "green"
        MouseArea {
            hoverEnabled: true
            propagateComposedEvents: true
            anchors.fill: parent
            clip: true
            onPressed: {
                idMain._press = true
                idMain._isRrec1 = false
            }
            onReleased: {
                idMain._press = false
            }
        }
    }

    MouseArea {
        hoverEnabled: true
        propagateComposedEvents: true
        anchors.fill: parent
        clip: true
        onPositionChanged: {
            if (idMain._press && mouse.x > idMain._minX && mouse.x < idMain._maxX) {
                if (idMain._isRrec1) {
                    if (mouse.x + idMain._minX < rect2.x) {
                        var xrec1 = mouse.x - idMain._minX
                        rect1.x = xrec1 < 15 ? 0 : xrec1
                    }
                } else {
                    if (mouse.x > rect1.x + idMain._minX + idMain._size) {
                        var xrec2 = mouse.x - idMain._minX
                        rect2.x = xrec2 + 15 > idMain.width - idMain._size ? idMain.width - idMain._size : xrec2
                    }
                }
            }
        }
        onPressed: {
            if (rect1.x < mouse.x && rect1.x + idMain._size > mouse.x && rect1.y < mouse.y && rect1.y + idMain._size > mouse.y) {
                idMain._press = true
                idMain._isRrec1 = true
            } else if (rect2.x < mouse.x && rect2.x + idMain._size > mouse.x && rect2.y < mouse.y && rect2.y + idMain._size > mouse.y) {
                idMain._press = true
                idMain._isRrec1 = false
            }
        }
        onReleased: {
            idMain._press = false
        }
    }
}
