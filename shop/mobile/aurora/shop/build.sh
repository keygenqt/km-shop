#!/bin/bash

## Js Lib build
folderBuildJs="$PWD/shared/build/packages/js"
folderBuildWebpack="$PWD/shop/mobile/aurora/kmm-js-build"
folderBuildWebpackShared="$PWD/shop/mobile/aurora/kmm-js-build/shared"
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

sleep 1

## Change dir
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd "$SCRIPT_DIR/../" || exit

## Lottie download
if [ -d "$PWD/shop/qml/lottie-qml" ] ; then
  rm -rf "$PWD/shop/qml/lottie-qml"
fi

git clone https://github.com/keygenqt/lottie-qml.git "$PWD/shop/qml/lottie-qml"

## Deleting files
rm -rf "$PWD/shop/qml/lottie-qml/.git"
rm -rf "$PWD/shop/qml/lottie-qml/data"

rm "$PWD/shop/qml/lottie-qml/.gitignore"
rm "$PWD/shop/qml/lottie-qml/CMakeLists.txt"
rm "$PWD/shop/qml/lottie-qml/COPYING.LGPL-2.1"
rm "$PWD/shop/qml/lottie-qml/README.md"
rm "$PWD/shop/qml/lottie-qml/tester.qml"

sleep 1

## Aurora build
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
