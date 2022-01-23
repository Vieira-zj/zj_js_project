#!/bin/bash
set -eu

function get_file_name() {
  fullname=${1}
  end=${#fullname}-3
  name=${fullname:0:$end}
  echo ${name}
}

function run_single_ts() {
  name=$(get_file_name $1)
  tsc ${name}.ts -t esnext --experimentalDecorators && node ${name}.js
}

function run_ts() {
  name=$(get_file_name $1)
  tsc
  node ${name}.js
}

# run_single_ts $1
run_ts $1
