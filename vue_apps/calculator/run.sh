#!/bin/bash
set -eu

function deploy_coverage_dist {
  nginx -t
  if [[ $? -ne 0 ]]; then
    echo 'nginx check failed.'
    exit 99
  fi

  npm run build-test
  cp -r dist/* /usr/local/var/www
}

function start_coverage_server {
  COVERAGE=true node server.js &
}

deploy_coverage_dist
echo 'Done'
