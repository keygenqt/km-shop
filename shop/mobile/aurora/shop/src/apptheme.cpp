#include "apptheme.h"


AppTheme::AppTheme(QObject *parent) : QObject(parent) {}

// Colors
QString AppTheme::getColorVariant1() { return "#329cd5"; }
QString AppTheme::getColorVariant2() { return "#955BA5"; }
QString AppTheme::getColorVariant3() { return "#3E6C91"; }
QString AppTheme::getColorVariant4() { return "#2596aa"; }
QString AppTheme::getColorVariant5() { return "#1D81D6"; }
QString AppTheme::getColorVariant6() { return "#4CAF50"; }

// Paddings
int AppTheme::getPaddingLarge() { return 30; }
int AppTheme::getPaddingMedium() { return 20; }
int AppTheme::getPaddingSmall() { return 10; }

// Shapes
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
