#ifndef APPDBUS_H
#define APPDBUS_H

#include <QtCore/QObject>
#include <QtDBus/QtDBus>

class AppDbus : public QObject
{
    Q_OBJECT

public:
    explicit AppDbus(QObject *parent = nullptr);
    /**
     * Just methods
     */
    void setSecret(QString secret);
    /**
     * Outgoing methods
     */
    void outLogin(QString login, QString passwd);
    void outCloseClient();

public slots:
    /**
     * Incoming methods
     */
    Q_SCRIPTABLE void inUpdateOrder(const QString &secret, const quint32 &arg);
    Q_SCRIPTABLE void inUpdateHelp(const QString &secret, const quint32 &arg);

private:
    QString _secret;
};

#endif // APPDBUS_H
