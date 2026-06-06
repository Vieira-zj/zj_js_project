#!/bin/bash
set -eu

function run_babel() {
  local dst="./dist"
  if [[ -d ${dst} ]]; then
    rm -r ${dst}
  fi

  npx babel src.js --out-dir ${dst}
}

run_babel
