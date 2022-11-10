#!/bin/bash

SHARED=$(ls ../ | grep 'shared')

parse-hocon package.conf > package.json

npm install "../$SHARED"