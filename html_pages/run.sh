#!/bin/bash
set -eu

function cp_html_to_dist_dir() {
  local src=${1}
  local dst="${HOME}/Downloads/data/docker_nginx"
  set +e
  rm -r ${dst}/*
  set -e
  echo "copy ${src} ${dst}"
  cp ${src} ${dst}
}

function start_nginx() {
  podman start nginx-test
}

cp_html_to_dist_dir "post_msg_iframe/*"
