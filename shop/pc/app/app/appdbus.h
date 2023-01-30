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
    bool regDbus(QString secret);
    /**
     * Outgoing methods
     */
    bool outLogin(QString login, QString passwd);
    void outCloseClient();

public slots:
    /**
     * Incoming methods
     */
    Q_SCRIPTABLE void inInitSuccess(const QString &secret, const quint32 &countNewOrder, const quint32 &countHelpNotChecked);
    Q_SCRIPTABLE void inInitError(const QString &secret, const quint32 &code, const QString &error);
    Q_SCRIPTABLE void inUpdateOrder(const QString &secret, const quint32 &arg);
    Q_SCRIPTABLE void inUpdateHelp(const QString &secret, const quint32 &arg);

signals:
    void errorRunClient(QString error);
    void errorAuth();
    void successInit(quint32 countNewOrder, quint32 countHelpNotChecked);
    void updateOrder(quint32 count);
    void updateMessageHelp(quint32 count);

private:
    QString _secret;
};

#endif // APPDBUS_H
