#include "mainwindow.h"
#include "./ui_mainwindow.h"
#include <QStyle>
#include <QScreen>
#include <QDebug>
#include <QDialog>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::AppMainWindow)
{
    QString secret = helper->getUniqueSecret();

    ui->setupUi(this);
    dialog = new LoginDialog(this);
    helper = new AppHelper(this);
    dbus = new AppDbus(this);
    dbus->setSecret(secret);

    this->setFixedSize(680, 340);
    this->setStyleSheet("background-color: white;");

    this->setGeometry(
        QStyle::alignedRect(
            Qt::LeftToRight,
            Qt::AlignCenter,
            this->size(),
            QGuiApplication::primaryScreen()->geometry()
        )
    );

    dbus->outCloseClient();
    helper->runClient(secret);
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_pushButton_clicked()
{
    dialog->show();
}

