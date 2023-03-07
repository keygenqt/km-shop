TARGET = ru.auroraos.shop

CONFIG += \
    auroraapp

PKGCONFIG += \

SOURCES += \
    src/apptheme.cpp \
    src/main.cpp

HEADERS += \
    src/apptheme.h

DISTFILES += \
    rpm/ru.auroraos.shop.spec \

AURORAAPP_ICONS = 86x86 108x108 128x128 172x172

CONFIG += auroraapp_i18n

TRANSLATIONS += \
    translations/ru.auroraos.shop.ts \
    translations/ru.auroraos.shop-ru.ts \
