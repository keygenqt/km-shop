#include <stdio.h>
#include <stdlib.h>

#include <QtCore/QCoreApplication>
#include <QtCore/QTimer>
#include <QtDBus/QtDBus>

#include "ping-common.h"
#include "pong.h"

void Pong::updateOrder(const QString &secret, const quint32 &arg)
{
    qDebug() << QString("updateOrder - " + QLocale().toString(arg) + " - " + secret);
}

void Pong::updateHelp(const QString &secret, const quint32 &arg)
{
    qDebug() << QString("updateHelp - " + QLocale().toString(arg) + " - " + secret);
}

// generate random key for for extra protection
QString randomString(int size) {
    const QString possibleCharacters("abcdefghijklmnopqrstuvwxyz0123456789");

    QString result;

    for (int i=0; i < size; i++) {
        result.append(
            possibleCharacters.at(
                QRandomGenerator::global()->bounded(0, possibleCharacters.length())
            )
        );
    }

    return result;
}

int main(int argc, char **argv)
{
    QCoreApplication app(argc, argv);

    // connect session dbus
    if (!QDBusConnection::sessionBus().isConnected()) {
        fprintf(stderr, "Cannot connect to the D-Bus session bus.\n"
                "To start it, run:\n"
                "\teval `dbus-launch --auto-syntax`\n");
        return 1;
    }

    // register app in dbus
    if (!QDBusConnection::sessionBus().registerService(SERVICE_DBUS_APP)) {
        fprintf(stderr, "%s\n",
                qPrintable(QDBusConnection::sessionBus().lastError().message()));
        exit(1);
    }

    // get unique secret key
    QString secret = QUuid::createUuid().toString(QUuid::WithoutBraces) + "-" + randomString(12);

    // connect client dbus
    QDBusInterface iface(SERVICE_DBUS_CLIENT, "/", "", QDBusConnection::sessionBus());
    // close app client if runing
    if (iface.isValid()) {
        iface.call("closeApp");
    }

    // run client
    QString program = "java";
    QStringList arguments;
    arguments << "-jar" << "/home/keygenqt/Documents/Home/km-shop/shop/pc/client/build/libs/shop-pc-client.jar";
    QProcess *myProcess = new QProcess();
    QProcessEnvironment env = QProcessEnvironment::systemEnvironment();
    env.insert("SECRET_KEY", secret);
    myProcess->setProcessEnvironment(env);
    myProcess->start(program, arguments);

    // init object in dbus
    Pong pong;
    QDBusConnection::sessionBus().registerObject("/", &pong, QDBusConnection::ExportAllSlots);

    // run app
    app.exec();

    // close app client
    myProcess->kill();

    return 0;
}
