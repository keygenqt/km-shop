#include "logindialog.h"
#include "ui_logindialog.h"
#include <QDebug>

LoginDialog::LoginDialog(QWidget *parent) :
    QWidget(parent, Qt::Dialog),
    ui(new Ui::LoginDialog)
{
    ui->setupUi(this);

    this->setWindowTitle("Авторизация");
    this->setWindowModality(Qt::ApplicationModal);
    this->setFixedSize(367, 260);
}

LoginDialog::~LoginDialog()
{
    delete ui;
}

void LoginDialog::on_pushButton_clicked()
{
    bool validate = true;

    if (ui->fieldLogin->text().length() == 0) {
        ui->labelLogin->setStyleSheet("color: red;");
        validate = false;
    } else {
        ui->labelLogin->setStyleSheet("color: black;");
    }

    if (ui->fieldPassword->text().length() == 0) {
        ui->labelPassword->setStyleSheet("color: red;");
        validate = false;
    } else {
        ui->labelPassword->setStyleSheet("color: black;");
    }

    if (validate) {
        ui->pushButton->setText("Ждем-с...");
        ui->pushButton->setDisabled(true);
        ui->fieldLogin->setDisabled(true);
        ui->fieldPassword->setDisabled(true);
    }
}

