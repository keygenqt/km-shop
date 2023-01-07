TARGET = com.keygenqt.shop

CONFIG += \
    auroraapp

QML_IMPORT_NAME = MyApp
QML_IMPORT_MAJOR_VERSION = 1

PKGCONFIG += \

SOURCES += \
    src/apptheme.cpp \
    src/main.cpp

HEADERS += \
    src/apptheme.h

DISTFILES += \
    qml/components/AppBlock.qml \
    qml/components/BlockError.qml \
    qml/components/BlockLoading.qml \
    qml/components/KMMAgent.qml \
    qml/pages/KmmPage.qml \
    qml/pages/SplashPage.qml \
    rpm/com.keygenqt.shop.spec \

AURORAAPP_ICONS = 86x86 108x108 128x128 172x172

CONFIG += auroraapp_i18n

TRANSLATIONS += \
    translations/com.keygenqt.shop.ts \
    translations/com.keygenqt.shop-ru.ts \
