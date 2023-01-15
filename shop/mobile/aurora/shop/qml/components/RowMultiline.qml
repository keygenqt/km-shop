import QtQuick 2.0
import Sailfish.Silica 1.0
import QtGraphicalEffects 1.0

Column {
    id: idMain
    width: parent.width
    spacing: idMain.itemsSpacing

    property int itemsSpacing: appTheme.paddingSmall
    property var items
    property alias model: idRepeater.model
    property Component delegate
    property var _items: []
    property var _cbFunc: null
    property var _rows: [
        columModels1,
        columModels2,
        columModels3,
        columModels4,
        columModels5,
        columModels6,
        columModels7,
        columModels8,
        columModels9,
        columModels10,
    ]

    function setTimeout(callback, milliseconds) {
        clearTimeout()
        _cbFunc = callback
        timer.interval = milliseconds;
        timer.repeat = false;
        timer.triggered.connect(_cbFunc);
        timer.start();
    }

    function clearTimeout() {
        if (_cbFunc !== null) {
            timer.stop()
            timer.triggered.disconnect(_cbFunc)
            _cbFunc = null
        }
    }

    Timer {
        id: timer
    }

    ListModel {
        id: columModels0
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            id: idRepeater
            delegate: idMain.delegate
            model: columModels0
            onItemAdded: {
                idMain._items.push(item.width)
                setTimeout(function() {
                    var w = 0
                    var row = 0
                    for (var i = 0; i < idMain._items.length; i++) {
                        if (row >= idMain._rows.length) {
                            break
                        }
                        w = idMain._items[i] + w
                        if (w + idMain.itemsSpacing * i - idMain.itemsSpacing < idMain.width) {
                            idMain._rows[row].append(idMain.items[i])
                        } else {
                            w = 0
                            row += 1
                            idMain._rows[row].append(idMain.items[i])
                        }
                    }
                }, 10)
            }
        }
        visible: false
    }

    onItemsChanged: {
        for (var i = 0; i < idMain._rows.length; i++) {
            idMain._rows[i].clear()
        }
        for (var j = 0; j < idMain.items.length; j++) {
            columModels0.append(idMain.items[j])
        }
    }

    ListModel {
        id: columModels1
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels1
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels2
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels2
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels3
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels3
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels4
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels4
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels5
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels5
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels6
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels6
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels7
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels7
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels8
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels8
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels9
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels9
            delegate: idMain.delegate
        }
    }

    ListModel {
        id: columModels10
    }

    Row {
        width: parent.width
        spacing: idMain.itemsSpacing
        Repeater {
            model: columModels10
            delegate: idMain.delegate
        }
    }
}
