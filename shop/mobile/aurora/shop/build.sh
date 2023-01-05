#!/bin/bash

## Js Lib build
folderBuildJs="$PWD/shared/build/packages/js"
folderBuildWebpack="$PWD/shop/mobile/aurora/kmm-js-build"
folderBuildWebpackShared="$PWD/shop/mobile/aurora/kmm-js-build/src/kmm-module"
distJsAurora="$PWD/shop/mobile/aurora/shop/qml/js-webpack/kmm.min.js"
distJs="$PWD/shop/mobile/aurora/kmm-js-build/dist/kmm.min.js"

if [ -d "$folderBuildWebpackShared" ] ; then
   rm -rf "$folderBuildWebpackShared"
fi

mv "$folderBuildJs" "$folderBuildWebpackShared"

cd "$folderBuildWebpack" || exit

npm update
npm run build

if [ -f "$distJsAurora" ] ; then
  rm "$distJsAurora"
fi

cp "$distJs" "$distJsAurora"

## Aurora build
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$SCRIPT_DIR/../" || exit

sfdk="$HOME/AuroraOS/bin/sfdk"
target='AuroraOS-4.0.2.209-base-i486.default.default'
engine='AuroraOS-4.0.2.209-base-i486.default'
path="$HOME/.config/AuroraOS-SDK/libsfdk/build-target-tools/aurora-os-build-engine/$engine"
folder='build-Android-Stuido-Debug'

if [ -d $folder ] ; then
   rm -rf $folder
fi

mkdir $folder
cd $folder || exit

eval "$sfdk config --push target $target"
eval "$path/qmake ../shop/com.keygenqt.shop.pro -spec linux-g++-32 CONFIG+=debug CONFIG+=qml_debug && $path/make qmake_all"
eval "$sfdk package"
eval "$sfdk config --push device 'Aurora OS Emulator 4.0.2.209-base'"
eval "$sfdk deploy --sdk --silent"
eval "$sfdk device exec /usr/bin/com.keygenqt.shop"
