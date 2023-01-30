#ifndef LOGINDIALOG_H
#define LOGINDIALOG_H

#include <QWidget>
#include "appdbus.h"

namespace Ui {
class LoginDialog;
}

class LoginDialog : public QWidget
{
    Q_OBJECT

public:
    explicit LoginDialog(QWidget *parent = nullptr);
    ~LoginDialog();
    void setDbus(AppDbus *dbus);

private slots:
    void on_pushButton_clicked();

signals:
    void success();

private:
    Ui::LoginDialog *ui;
    AppDbus *_dbus;
    // methods
    void loading();
    void error();
};

#endif // LOGINDIALOG_H
