#!/bin/bash

function ts() {
  fullname=${1}
  end=${#fullname}-3
  name=${fullname:0:$end}
  tsc ${name}.ts -t es5 && node ${name}.js
}

ts $1
