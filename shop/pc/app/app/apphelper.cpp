#include "apphelper.h"
#include <QRandomGenerator>
#include <QProcess>
#include <QUuid>

AppHelper::AppHelper(QObject *parent) : QObject {parent} {

}

/**
 * Get unique secret key for app client
 */
QString AppHelper::getUniqueSecret() {
    return QUuid::createUuid().toString(QUuid::WithoutBraces) + "-" + randomString(12);
}

/**
 * Generate random key for for extra protection
 */
QString AppHelper::randomString(int size) {
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

/**
 * Run client with SECRET_KEY
 */
void AppHelper::runClient(QString secret) {
    QProcessEnvironment env = QProcessEnvironment::systemEnvironment();
    QString program = "java";
    QStringList arguments;

    arguments << "-jar" << "/home/keygenqt/Documents/Home/km-shop/shop/pc/client/build/libs/shop-pc-client.jar";
    env.insert("SECRET_KEY", secret);

    myProcess->setProcessEnvironment(env);
    myProcess->start(program, arguments);
}
