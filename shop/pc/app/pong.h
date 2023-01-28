#ifndef PONG_H
#define PONG_H

#include <QtCore/QObject>

class Pong: public QObject
{
    Q_OBJECT

public slots:
    Q_SCRIPTABLE void updateOrder(const QString &secret, const quint32 &arg);
    Q_SCRIPTABLE void updateHelp(const QString &secret, const quint32 &arg);
};

#endif
