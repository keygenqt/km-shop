#ifndef COLORSCONSTS_H
#define COLORSCONSTS_H

#include <QObject>
#include <QtQml>

class ColorsConsts : public QObject
{
    Q_OBJECT

    public:
        explicit ColorsConsts(QObject *parent = nullptr);

        Q_PROPERTY(QString bgVariant1 READ getBgVariant1 CONSTANT)
        Q_PROPERTY(QString bgVariant2 READ getBgVariant2 CONSTANT)
        Q_PROPERTY(QString bgVariant3 READ getBgVariant3 CONSTANT)
        Q_PROPERTY(QString bgVariant4 READ getBgVariant4 CONSTANT)
        Q_PROPERTY(QString bgVariant5 READ getBgVariant5 CONSTANT)
        Q_PROPERTY(QString bgVariant6 READ getBgVariant6 CONSTANT)

        QString getBgVariant1() { return bg_variant_1; }
        QString getBgVariant2() { return bg_variant_2; }
        QString getBgVariant3() { return bg_variant_3; }
        QString getBgVariant4() { return bg_variant_4; }
        QString getBgVariant5() { return bg_variant_5; }
        QString getBgVariant6() { return bg_variant_6; }

    private:
        const QString bg_variant_1 = "#329cd5";
        const QString bg_variant_2 = "#955BA5";
        const QString bg_variant_3 = "#3E6C91";
        const QString bg_variant_4 = "#C6FFF1";
        const QString bg_variant_5 = "#1D81D6";
        const QString bg_variant_6 = "#4CAF50";

};

#endif // COLORSCONSTS_H
