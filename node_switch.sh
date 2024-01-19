#!/bin/bash
set -eu

function switch_node() {
	local version=$1
	local node_link='/usr/local/bin/node'
	local npm_link='/usr/local/bin/npm'
	rm ${node_link}
	ln -s /usr/local/Cellar/${version}/bin/node ${node_link}
	rm ${npm_link}
	ln -s /usr/local/Cellar/${version}/bin/npm ${npm_link}
}

# switch_node node@14/14.21.3_1
# switch_node node@18/18.19.0
# switch_node node/19.7.0

echo "node version: $(node -v)"
echo "npm version: $(npm -v)"

echo 'switch node done'
