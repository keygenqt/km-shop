#include "appdbus.h"
#include "common.h"
#include <QtDBus/QtDBus>

AppDbus::AppDbus(QObject *parent) : QObject{parent} {
    // connect session dbus
    if (!QDBusConnection::sessionBus().isConnected()) {
        fprintf(stderr, "Cannot connect to the D-Bus session bus.");
        QMetaObject::invokeMethod(QCoreApplication::instance(), "quit");
    }

    // register app in dbus
    if (!QDBusConnection::sessionBus().registerService(SERVICE_DBUS_APP)) {
        fprintf(stderr, "%s\n", qPrintable(QDBusConnection::sessionBus().lastError().message()));
        QMetaObject::invokeMethod(QCoreApplication::instance(), "quit");
    }

    // init object in dbus
    QDBusConnection::sessionBus().registerObject("/", this, QDBusConnection::ExportAllSlots);
}

/**
 * Just methods
 */
void AppDbus::setSecret(QString secret) {
    _secret = secret;
}

/**
 * Incoming methods
 */
void AppDbus::inUpdateOrder(const QString &secret, const quint32 &arg)
{
    if (_secret == secret) {
        qDebug() << QString("updateOrder - " + QLocale().toString(arg) + " - " + secret);
    }
}

void AppDbus::inUpdateHelp(const QString &secret, const quint32 &arg)
{
    if (_secret == secret) {
        qDebug() << QString("updateHelp - " + QLocale().toString(arg) + " - " + secret);
    }
}

/**
 * Outgoing methods
 */
void AppDbus::outLogin(QString login, QString passwd)
{
    QDBusInterface iface(SERVICE_DBUS_CLIENT, "/", "", QDBusConnection::sessionBus());

    if (iface.isValid()) {
        QDBusReply<bool> reply = iface.call("login", login, passwd);
        if (reply.isValid()) {
            if (reply.value()) {
                qDebug() << "Login success";
            } else {
                qDebug() << "Login error";
            }
        } else {
            fprintf(stderr, "Call failed: %s\n", qPrintable(reply.error().message()));
        }
    }
}

void AppDbus::outCloseClient() {
    QDBusInterface iface(SERVICE_DBUS_CLIENT, "/", "", QDBusConnection::sessionBus());
    if (iface.isValid()) {
        iface.call("closeApp");
    }
}
