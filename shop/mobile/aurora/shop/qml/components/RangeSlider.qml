import QtQuick 2.0

Rectangle {
    id: idMain
    height: idMain._size * 2
    width: parent.width
    color: 'transparent'

    property color colorSlider: 'white'
    property real from: 0
    property real to: 0
    property real firstValue: 0
    property real secondValue: 0

    signal moveFirst(real value)
    signal moveSecond(real value)

    property int _size: 50
    property real _minX: idMain._size / 2
    property real _maxX: idMain.width - idMain._minX
    property real _rec1X: 0.0
    property bool _isRrec1: true
    property bool _press: false
    property real _stick: 10


    Rectangle {
        width: parent.width - 4
        anchors.centerIn: parent
        height: 10
        radius: 10
        color: idMain.colorSlider
    }

    Rectangle {
        id: rect1
        x: 0.0
        width: idMain._size
        height: idMain._size
        radius: idMain._size
        anchors.verticalCenter: parent.verticalCenter
        color: idMain.colorSlider
        border.width: 1
        border.color: idApp.colors.borderColorBlock
    }

    Rectangle {
        id: rect2
        x: idMain.width - idMain._size
        width: idMain._size
        height: idMain._size
        radius: idMain._size
        anchors.verticalCenter: parent.verticalCenter
        color: idMain.colorSlider
        border.width: 1
        border.color: idApp.colors.borderColorBlock
    }

    MouseArea {
        hoverEnabled: true
        propagateComposedEvents: true
        anchors.fill: parent
        clip: true
        onPositionChanged: {
            // Block Boundary Constraints
            if (idMain._press && mouse.x > idMain._minX && mouse.x < idMain._maxX) {
                // Move one of the sliders
                if (idMain._isRrec1) {
                    // Rec2 limits
                    if (mouse.x + idMain._minX < rect2.x) {
                        var xrec1 = mouse.x - idMain._minX
                        // Position setting with edge check
                        rect1.x = xrec1 < idMain._stick ? 0 : xrec1
                        // Stick to Rec 2 if very close
                        if (rect1.x + idMain._size + idMain._stick > rect2.x) {
                            rect1.x = rect2.x - idMain._size
                        }
                        // send signal
                        var factor1 = rect1.x * 100 / (idMain.width - (idMain._size * 2))
                        idMain.moveFirst((idMain.to * (factor1 / 100)) + (idMain.from - (idMain.from * (factor1 / 100))))
                    }
                } else {
                    // Rec1 limits
                    if (mouse.x > rect1.x + idMain._minX + idMain._size) {
                        var xrec2 = mouse.x - idMain._minX
                        // Position setting with edge check
                        rect2.x = xrec2 + idMain._stick > idMain.width - idMain._size ? idMain.width - idMain._size : xrec2
                        // Stick to Rec 1 if very close
                        if (rect2.x - idMain._stick < rect1.x + idMain._size) {
                            rect2.x = rect1.x + idMain._size
                        }

                        // send signal
                        var factor2 = (rect2.x - idMain._size) * 100 / (idMain.width - (idMain._size * 2))
                        idMain.moveSecond((idMain.to * (factor2 / 100)) + (idMain.from - (idMain.from * (factor2 / 100))))
                    }
                }
            }
        }
        onPressed: {
            // Rec click check
            if (rect1.x < mouse.x && rect1.x + idMain._size > mouse.x && rect1.y < mouse.y && rect1.y + idMain._size > mouse.y) {
                idMain._press = true
                idMain._isRrec1 = true
            } else if (rect2.x < mouse.x && rect2.x + idMain._size > mouse.x && rect2.y < mouse.y && rect2.y + idMain._size > mouse.y) {
                idMain._press = true
                idMain._isRrec1 = false
            }
        }
        onReleased: {
            // Disable move
            idMain._press = false
        }
    }
}
