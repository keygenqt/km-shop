#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include "logindialog.h"
#include "apphelper.h"
#include "appdbus.h"

QT_BEGIN_NAMESPACE
namespace Ui { class AppMainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void on_pushButton_clicked();

private:
    Ui::AppMainWindow *ui;
    LoginDialog *dialog;
    AppHelper *helper;
    AppDbus *dbus;
};
#endif // MAINWINDOW_H
