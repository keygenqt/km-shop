#include "apptheme.h"


AppTheme::AppTheme(QObject *parent) : QObject(parent) {}


QString getColorSuccess();
QString getColorSuccessBorder();
QString getColorError();
QString getColorErrorBorder();

// Paddings
int AppTheme::getPaddingLarge() { return 30; }
int AppTheme::getPaddingMedium() { return 20; }
int AppTheme::getPaddingSmall() { return 10; }

// Shapes
float AppTheme::getShapesExtraLarge() { return 25; }
float AppTheme::getShapesLarge() { return 20; }
float AppTheme::getShapesMedium() { return 10; }
float AppTheme::getShapesSmall() { return 4; }

// Fonts
int AppTheme::getFontSizeH4() { return 60; }
int AppTheme::getFontSizeH5() { return 45; }
int AppTheme::getFontSizeH6() { return 35; }
int AppTheme::getFontSizeBody1() { return 30; }
int AppTheme::getFontSizeBody2() { return 28; }
int AppTheme::getFontSizeCaption() { return 24; }
