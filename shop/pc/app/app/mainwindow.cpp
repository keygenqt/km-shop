#include "mainwindow.h"
#include "./ui_mainwindow.h"
#include <QStyle>
#include <QScreen>
#include <QDebug>
#include <QDialog>
#include <QMessageBox>
#include <QMovie>
#include <QMenu>
#include <QAction>
#include <QCloseEvent>
#include <QDesktopServices>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::AppMainWindow)
{
    QString secret = helper->getUniqueSecret();

    // set ui
    ui->setupUi(this);

    // change ui
    this->setFixedSize(680, 340);
    this->setStyleSheet("background-color: white;");
    ui->pushButton->hide();
    ui->labelSuccess->hide();

    // to center
    this->setGeometry(
        QStyle::alignedRect(
            Qt::LeftToRight,
            Qt::AlignCenter,
            this->size(),
            QGuiApplication::primaryScreen()->geometry()
        )
    );

    // create dbus
    dbus = new AppDbus(this);

    // reg debus
    if (!dbus->regDbus(secret)) {
        errorRunClient("Копию приложения запускать нельзя!");
        return;
    } else {
        this->show();
    }

    // init actions
    actionWindow = new QAction(tr("Свернуть"), this);
    actionOrders = new QAction(tr("Новые заказы"), this);
    actionHelpMessage = new QAction(tr("Сообщения"), this);
    quitAction = new QAction(tr("Закрыть"), this);

    // init menu
    menu = new QMenu(this);
    menu->addAction(actionWindow);
    menu->addAction(actionOrders);
    menu->addAction(actionHelpMessage);
    menu->addSeparator();
    menu->addAction(quitAction);

    // init tray
    trayIcon = new QSystemTrayIcon(this);
    trayIcon->setIcon(QIcon(":/images/logo.png"));
    trayIcon->setContextMenu(menu);
    trayIcon->show();

    // init dialog login
    dialog = new LoginDialog(this);
    dialog->setDbus(dbus);

    // init helper
    helper = new AppHelper(this);

    // run app client
    helper->runClient(secret);

    // set gif loader
    QMovie *mv = new QMovie(":/images/loader.gif");
    mv->start();
    ui->loader->setAttribute(Qt::WA_NoSystemBackground);
    ui->loader->setMovie(mv);

    // connect with dbus
    connect(dbus, &AppDbus::errorRunClient, this, &MainWindow::errorRunClient);
    connect(dbus, &AppDbus::errorAuth, this, &MainWindow::errorAuth);
    connect(dbus, &AppDbus::successInit, this, &MainWindow::successInit);
    connect(dbus, &AppDbus::updateOrder, this, &MainWindow::updateOrder);
    connect(dbus, &AppDbus::updateMessageHelp, this, &MainWindow::updateMessageHelp);

    // connect with dialog
    connect(dialog, &LoginDialog::success, this, &MainWindow::loginSuccess);

    // connect tray menu
    connect(actionWindow, SIGNAL(triggered()), this, SLOT(toggleWindow()));
    connect(actionOrders, SIGNAL(triggered()), this, SLOT(openOrders()));
    connect(actionHelpMessage, SIGNAL(triggered()), this, SLOT(openHelpMessage()));
    connect(quitAction, SIGNAL(triggered()), QApplication::instance(), SLOT(quit()));

    // @todo
    qDebug() << secret;
}

MainWindow::~MainWindow() {
    // stop run client
    helper->myProcess->kill();
    // other destructor clear
    delete ui;
}

void MainWindow::on_pushButton_clicked() {
    dialog->show();
}

void MainWindow::loginSuccess() {
    dialog->hide();
    ui->pushButton->hide();
    ui->labelSuccess->show();
}

void MainWindow::errorRunClient(QString error) {
    // hide loader
    ui->loader->hide();
    // show modal dialog with exit app
    QMessageBox *msgBox = new QMessageBox(this);
    msgBox->setWindowTitle("Ошибка!");
    msgBox->setIcon( QMessageBox::Warning );
    msgBox->setText(error);
    QPushButton *quitButton = msgBox->addButton("Закрыть", QMessageBox::RejectRole );
    QObject::connect(quitButton, SIGNAL(clicked()), QApplication::instance(), SLOT(quit()));
    msgBox->setAttribute(Qt::WA_DeleteOnClose);
    msgBox->show();
}

void MainWindow::errorAuth() {
    ui->pushButton->show();
    ui->loader->hide();
}

void MainWindow::successInit(quint32 countNewOrder, quint32 countHelpNotChecked) {
    // update state ui
    ui->pushButton->hide();
    ui->loader->hide();
    ui->labelSuccess->show();
    // show tray
    actionOrders->setText("Новые заказы (" + QVariant(countNewOrder).toString() + ")");
    actionHelpMessage->setText("Сообщения (" + QVariant(countHelpNotChecked).toString() + ")");
    // log
    qDebug() << "Init client success";
}

void MainWindow::updateOrder(quint32 count) {
    actionOrders->setText("Новые заказы (" + QVariant(count).toString() + ")");
    QSystemTrayIcon::MessageIcon icon = QSystemTrayIcon::MessageIcon(QSystemTrayIcon::Information);
    trayIcon->showMessage(tr("Майшоп"), QString("Заказы были обновлены!").toUtf8(), icon, 2000);
}

void MainWindow::updateMessageHelp(quint32 count) {
    actionHelpMessage->setText("Сообщения (" + QVariant(count).toString() + ")");
    QSystemTrayIcon::MessageIcon icon = QSystemTrayIcon::MessageIcon(QSystemTrayIcon::Information);
    trayIcon->showMessage(tr("Майшоп"), QString("Сообщения были обновлены!").toUtf8(), icon, 2000);
}

void MainWindow::toggleWindow() {
    if (this->isVisible()) {
        this->hide();
        actionWindow->setText("Открыть");
    } else {
        this->show();
        actionWindow->setText("Свернуть");
    }
}

void MainWindow::openOrders() {
    QDesktopServices::openUrl(QUrl("https://shop-admin.keygenqt.com/orders/new"));
}

void MainWindow::openHelpMessage() {
    QDesktopServices::openUrl(QUrl("https://shop-admin.keygenqt.com/help-desk"));
}

void MainWindow::closeEvent(QCloseEvent * event) {
    if (this->isVisible()) {
        event->ignore();
        this->hide();
        actionWindow->setText("Открыть");
    }
}
