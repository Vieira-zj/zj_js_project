#!/bin/bash
set -eu

function init() {
  tsc --init
}

function get_file_name() {
  fullname=${1}
  end=${#fullname}-3
  name=${fullname:0:$end}
  echo ${name}
}

function run_ts_file() {
  name=$(get_file_name $1)
  tsc ${name}.ts -t esnext --experimentalDecorators && node dist/${name}.js
}

function run_ts() {
  name=$(get_file_name $1)
  tsc && node dist/${name}.js
}

# Compile and package multiple ts files to one js file for namespaces.
function compile_package() {
  # Note: must compile in order: ts_demo_01.ts -> hello.ts
  tsc -t esnext --experimentalDecorators --module amd --outDir ./dist --outFile ./dist/page.js --rootDir . ts_demo_01.ts hello.ts
}

run_ts $1
