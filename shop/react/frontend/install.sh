#!/bin/bash

SHARED=$(ls ../shared*)

parse-hocon package.conf > package.json

npm install "$SHARED"