QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets dbus

CONFIG += c++17

# You can make your code fail to compile if it uses deprecated APIs.
# In order to do so, uncomment the following line.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

SOURCES += \
    apphelper.cpp \
    appdbus.cpp \
    main.cpp \
    mainwindow.cpp \
    logindialog.cpp

HEADERS += \
    common.h \
    apphelper.h \
    appdbus.h \
    mainwindow.h \
    logindialog.h

FORMS += \
    logindialog.ui \
    mainwindow.ui

RESOURCES += \
    resources/data.qrc

# Default rules for deployment.
qnx: target.path = /tmp/$${TARGET}/bin
else: unix:!android: target.path = /opt/$${TARGET}/bin
!isEmpty(target.path): INSTALLS += target


