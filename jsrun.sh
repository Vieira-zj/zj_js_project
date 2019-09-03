#!/bin/bash
set -eu

# check vue env
node -v && npm -v && vue -V

target=$1 #build,test
project="${HOME}/Workspaces/zj_js_project/vue_lessons/vue_lesson_todos"
dist="${project}/dist"

# run test
cd ${project}
if [[ ${target} == "test" ]]; then
    npm run test:unit
fi

# run build
if [[ ${target} == "build" ]]; then
    if [ -d ${dist} ]; then
        rm -rf ${dist}/*
    fi
    npm run build && sleep 1
    
    # for vue multiple pages project
    tmpdir="/tmp/dist"
    if [ -d ${tmpdir} ]; then
        rm -rf ${tmpdir}
    fi
    cp -r ${dist} /tmp/
    echo "vue build done."
fi

set +eu
