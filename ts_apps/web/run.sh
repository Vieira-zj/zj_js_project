#!/bin/bash
set -eu

function test_index_api() {
  curl -v -L http://localhost:8080/
}

function test_healthz_api() {
  curl http://localhost:8080/healthz
}

function test_say_api() {
  curl http://localhost:8080/test/say -H 'content-type:application/json' -d '{"name":"foo", "msg":"hello"}'
}

test_say_api
