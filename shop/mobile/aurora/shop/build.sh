#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$SCRIPT_DIR/../"

sfdk='~/AuroraOS/bin/sfdk'
target='AuroraOS-4.0.2.209-base-i486.default.default'
engine='AuroraOS-4.0.2.209-base-i486.default'
path="~/.config/AuroraOS-SDK/libsfdk/build-target-tools/aurora-os-build-engine/$engine"
folder='build-Android-Stuido-Debug'

if [ -d $folder ]
then
     rm -rf $folder
fi

#if [ -d "./RPMS" ]
#then
#     rm -rf "./RPMS"
#fi

mkdir $folder
cd $folder

pwd

eval "$sfdk config --push target $target"
eval "$path/qmake ../shop/com.keygenqt.shop.pro -spec linux-g++-32 CONFIG+=debug CONFIG+=qml_debug && $path/make qmake_all"
eval "$sfdk package"
eval "$sfdk config --push device 'Aurora OS Emulator 4.0.2.209-base'"
eval "$sfdk deploy --sdk --silent"
eval "$sfdk device exec /usr/bin/com.keygenqt.shop"

exit

eval "$path/qmake ../shop/com.keygenqt.shop.pro -spec linux-g++-32 CONFIG+=debug CONFIG+=qml_debug && $path/make qmake_all"
eval "$sfdk package"
#mv RPMS ../RPMS
#cd ../

eval "$sfdk config --push device 'Aurora OS Emulator 4.0.2.209-base'"
eval "$sfdk deploy --sdk --silent"
eval "$sfdk device exec /usr/bin/com.keygenqt.shop"
