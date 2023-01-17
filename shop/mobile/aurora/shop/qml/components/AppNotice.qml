import QtQuick 2.0
import Sailfish.Silica 1.0

Item {

    property alias text: alarm.text

    function show() {
        alarm.show()
    }

    Notice {
        id: alarm
        duration: 1000
    }
}
