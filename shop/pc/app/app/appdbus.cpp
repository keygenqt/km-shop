#include "appdbus.h"
#include "common.h"
#include <QtDBus/QtDBus>

AppDbus::AppDbus(QObject *parent) : QObject{parent} {

}

/**
 * Just methods
 */
bool AppDbus::regDbus(QString secret) {
    _secret = secret;

    // connect session dbus
    if (!QDBusConnection::sessionBus().isConnected()) {
        return false;
    }

    // register app in dbus
    if (!QDBusConnection::sessionBus().registerService(SERVICE_DBUS_APP)) {
        return false;
    }

    // init object in dbus
    QDBusConnection::sessionBus().registerObject("/", this, QDBusConnection::ExportAllSlots);

    return true;
}

/**
 * Incoming methods
 */
void AppDbus::inInitSuccess(const QString &secret, const quint32 &countNewOrder, const quint32 &countHelpNotChecked) {
    if (_secret == secret) {
        emit successInit(countNewOrder, countHelpNotChecked);
    }
}

void AppDbus::inInitError(const QString &secret, const quint32 &code, const QString &error) {
    if (_secret == secret) {
        if (code == 403) {
            emit errorAuth();
        } else {
            emit errorRunClient(error);
        }
    }
}

void AppDbus::inUpdateOrder(const QString &secret, const quint32 &arg) {
    if (_secret == secret) {
        emit updateOrder(arg);
    }
}

void AppDbus::inUpdateHelp(const QString &secret, const quint32 &arg) {
    if (_secret == secret) {
        emit updateMessageHelp(arg);
    }
}

/**
 * Outgoing methods
 */
bool AppDbus::outLogin(QString login, QString passwd)
{
    QDBusInterface iface(SERVICE_DBUS_CLIENT, "/", "", QDBusConnection::sessionBus());

    if (iface.isValid()) {
        QDBusReply<int> reply = iface.call("login", login, passwd);
        if (reply.isValid()) {
            if (reply.value() == 200) {
                iface.call("listenWebSocket", _secret);
                return true;
            } else {
                qDebug() << "Login error";
            }
        } else {
            fprintf(stderr, "Call failed: %s\n", qPrintable(reply.error().message()));
        }
    }

    return false;
}

void AppDbus::outCloseClient() {
    QDBusInterface iface(SERVICE_DBUS_CLIENT, "/", "", QDBusConnection::sessionBus());
    if (iface.isValid()) {
        iface.call("closeApp");
    }
}
