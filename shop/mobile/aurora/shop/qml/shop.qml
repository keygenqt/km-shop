/*******************************************************************************
**
** Copyright (C) 2022 com.keygenqt
**
** This file is part of the ShopKMM project.
**
** Redistribution and use in source and binary forms,
** with or without modification, are permitted provided
** that the following conditions are met:
**
** * Redistributions of source code must retain the above copyright notice,
**   this list of conditions and the following disclaimer.
** * Redistributions in binary form must reproduce the above copyright notice,
**   this list of conditions and the following disclaimer
**   in the documentation and/or other materials provided with the distribution.
** * Neither the name of the copyright holder nor the names of its contributors
**   may be used to endorse or promote products derived from this software
**   without specific prior written permission.
**
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
** AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
** THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
** FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
** IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
** FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
** OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
** PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
** LOSS OF USE, DATA, OR PROFITS;
** OR BUSINESS INTERRUPTION)
** HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
** WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
** (INCLUDING NEGLIGENCE OR OTHERWISE)
** ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
** EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
**
*******************************************************************************/

import QtQuick 2.0
import Sailfish.Silica 1.0
import "components" as Components
import AppTheme 1.0

ApplicationWindow {
    id: idApp
    objectName: "applicationWindow"
    initialPage: Qt.resolvedUrl("pages/SplashPage.qml")
    cover: Qt.resolvedUrl("cover/DefaultCoverPage.qml")
    allowedOrientations: Orientation.Portrait
    _defaultPageOrientations: Orientation.Portrait

    property alias constants: constants
    property alias colors: colors
    property alias helper: helper

    QtObject {
        id: constants
        property string apiUrl
        property string mapUrl
        property string pageLimit
        property string telegramUrl
        property string email
        property string phone
    }

    QtObject {
        id: colors
        readonly property string highlightDarkColor: helper.getPerceptualBrightness(Theme.highlightDimmerColor) < helper.getPerceptualBrightness(Theme.highlightColor)
                                            ? Theme.highlightDimmerColor : Theme.highlightColor
        readonly property color borderColorBlock: helper.getPerceptualBrightness(idApp.colors.highlightDarkColor) < 500
                                                  ? "#444444" : idApp.colors.highlightDarkColor
    }

    QtObject {
        id: helper

        /**
        * Find error array validate
        */
        function findError(field, validate) {
           if (!validate) {
               return ""
           }
           for (var index = 0; index < validate.length; index++) {
               if (validate[index].filed === field) {
                   return validate[index].errors[0]
               }
           }
           return ""
        }

        /**
        * Get Lightness Ratio
        */
        function getPerceptualBrightness(color) {
            var string
            // check base color, but has litle bit more...
            if (color === 'white') {
                string = "#ffffff"
            }
            else if (color === 'black') {
                string = "#000000"
            } else {
                string = String(color)
            }
            var r = parseInt(string.substring(1,3),16);
            var g = parseInt(string.substring(3,5),16);
            var b = parseInt(string.substring(5,7),16);
            return r*2 + g*3 + b;
        }

        /**
        * Start the timer and execute the provided callback
        */
        function setTimeout(callback, milliseconds) {
            timer.interval = milliseconds;
            timer.repeat = false;
            timer.triggered.connect(callback);
            timer.start();
        }

        /**
        * Stop the timer and unregister the callback
        */
        function clearTimeout() {
            timer.stop();
        }
    }

    Timer {
        id: timer
    }

    Components.KMMAgent {
        id: agent
        onCompleted: {
            // read constants
            run("return kmm.AppConstants.links.API_URL", function(result) { constants.apiUrl = result } )
            run("return kmm.AppConstants.links.URL_MAP", function(result) { constants.mapUrl = result } )
            run("return kmm.AppConstants.other.PAGE_LIMIT", function(result) { constants.pageLimit = result } )
            run("return kmm.AppConstants.other.CONTACT_TG", function(result) { constants.telegramUrl = result } )
            run("return kmm.AppConstants.other.CONTACT_EMAIL", function(result) { constants.email = result } )
            run("return kmm.AppConstants.other.CONTACT_PHONE", function(result) { constants.phone = result } )
            // run home page
            pageStack.animatorReplace(Qt.resolvedUrl("pages/MainPage.qml"), {}, PageStackAction.Replace)
        }
    }

    AppTheme {
        id: appTheme
    }
}
