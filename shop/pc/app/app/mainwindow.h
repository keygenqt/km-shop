#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QSystemTrayIcon>
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

    // dbus
    void errorRunClient(QString error);
    void errorAuth();
    void successInit(quint32 countNewOrder, quint32 countHelpNotChecked);
    void updateOrder(quint32 count);
    void updateMessageHelp(quint32 count);
    // login dialog
    void loginSuccess();
    // menu
    void toggleWindow();
    void openOrders();
    void openHelpMessage();

private:
    Ui::AppMainWindow *ui;
    LoginDialog *dialog;
    AppHelper *helper;
    AppDbus *dbus;
    QSystemTrayIcon *trayIcon;
    QMenu * menu;
    QAction * actionWindow;
    QAction * actionOrders;
    QAction * actionHelpMessage;
    QAction * quitAction;

protected:
    void closeEvent(QCloseEvent * event);
};
#endif // MAINWINDOW_H
