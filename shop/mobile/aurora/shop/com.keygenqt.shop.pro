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
    qml/components/AlertError.qml \
    qml/components/AlertSuccess.qml \
    qml/components/AppBlock.qml \
    qml/components/AppIconButton.qml \
    qml/components/AppImage.qml \
    qml/components/AppPage.qml \
    qml/components/AppTextField.qml \
    qml/components/BlockError.qml \
    qml/components/BlockLoadingLottie.qml \
    qml/components/GlobalMenu.qml \
    qml/components/KMMAgent.qml \
    qml/components/LottieAnimation.qml \
    qml/components/MainPageHeader.qml \
    qml/components/RangeSlider.qml \
    qml/pages/SplashPage.qml \
    rpm/com.keygenqt.shop.spec \

AURORAAPP_ICONS = 86x86 108x108 128x128 172x172

CONFIG += auroraapp_i18n

TRANSLATIONS += \
    translations/com.keygenqt.shop.ts \
    translations/com.keygenqt.shop-ru.ts \
