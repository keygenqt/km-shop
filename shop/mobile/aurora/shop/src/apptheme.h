#ifndef APPTHEME_H
#define APPTHEME_H

#include <QObject>
#include <QtQml>

class AppTheme : public QObject
{
    Q_OBJECT

    public:
    explicit AppTheme(QObject *parent = nullptr);

    // Paddings
    int getPaddingLarge();
    int getPaddingMedium();
    int getPaddingSmall();

    Q_PROPERTY(int paddingLarge READ getPaddingLarge CONSTANT)
    Q_PROPERTY(int paddingMedium READ getPaddingMedium CONSTANT)
    Q_PROPERTY(int paddingSmall READ getPaddingSmall CONSTANT)

    // Shapes
    float getShapesExtraLarge();
    float getShapesLarge();
    float getShapesMedium();
    float getShapesSmall();

    Q_PROPERTY(float shapesExtraLarge READ getShapesExtraLarge CONSTANT)
    Q_PROPERTY(float shapesLarge READ getShapesLarge CONSTANT)
    Q_PROPERTY(float shapesMedium READ getShapesMedium CONSTANT)
    Q_PROPERTY(float shapesSmall READ getShapesSmall CONSTANT)

    // Fonts
    int getFontSizeH4();
    int getFontSizeH5();
    int getFontSizeH6();
    int getFontSizeBody1();
    int getFontSizeBody2();
    int getFontSizeCaption();

    Q_PROPERTY(int fontSizeH4 READ getFontSizeH4 CONSTANT)
    Q_PROPERTY(int fontSizeH5 READ getFontSizeH5 CONSTANT)
    Q_PROPERTY(int fontSizeH6 READ getFontSizeH6 CONSTANT)
    Q_PROPERTY(int fontSizeBody1 READ getFontSizeBody1 CONSTANT)
    Q_PROPERTY(int fontSizeBody2 READ getFontSizeBody2 CONSTANT)
    Q_PROPERTY(int fontSizeCaption READ getFontSizeCaption CONSTANT)

};

#endif // APPTHEME_H
