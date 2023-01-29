#ifndef APPHELPER_H
#define APPHELPER_H

#include <QObject>
#include <QProcess>

class AppHelper : public QObject
{
    Q_OBJECT
public:
    explicit AppHelper(QObject *parent = nullptr);

    QString getUniqueSecret();
    QString randomString(int size);
    void runClient(QString secret);

    QProcess *myProcess = new QProcess();

signals:

};

#endif // APPHELPER_H
