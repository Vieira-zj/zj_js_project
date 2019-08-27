#!/bin/bash
set -eu

# check vue env
node -v && npm -v

# main
if [[ $1 == "vue" ]]; then
    # $2 => dev, build
    vue -V && cd ./vue_lessons/vue_lesson_01 && npm run $2
    exit 0
fi

node ./js_demo/$1

set +eu