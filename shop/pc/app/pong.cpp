#include <stdio.h>
#include <stdlib.h>

#include <QtCore/QCoreApplication>
#include <QtCore/QTimer>
#include <QtDBus/QtDBus>

#include "ping-common.h"
#include "pong.h"

void Pong::updateOrder(const quint32 &arg)
{
    qDebug() << QString("updateOrder - " + QLocale().toString(arg));
}

void Pong::updateHelp(const quint32 &arg)
{
    qDebug() << QString("updateHelp - " + QLocale().toString(arg));
}

int main(int argc, char **argv)
{
    QCoreApplication app(argc, argv);

    if (!QDBusConnection::sessionBus().isConnected()) {
        fprintf(stderr, "Cannot connect to the D-Bus session bus.\n"
                "To start it, run:\n"
                "\teval `dbus-launch --auto-syntax`\n");
        return 1;
    }

    if (!QDBusConnection::sessionBus().registerService(SERVICE_NAME)) {
        fprintf(stderr, "%s\n",
                qPrintable(QDBusConnection::sessionBus().lastError().message()));
        exit(1);
    }

    Pong pong;
    QDBusConnection::sessionBus().registerObject("/", &pong, QDBusConnection::ExportAllSlots);

    app.exec();
    return 0;
}
