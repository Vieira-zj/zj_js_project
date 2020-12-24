var im = require('istanbul-middleware')
var isCoverageEnabled = process.env.COVERAGE == 'true'

// before your code is require()-ed, hook the loader for coverage
if (isCoverageEnabled) {
  console.log('Hook loader for coverage - ensure this is not production!')
  im.hookLoader(__dirname)
  // cover all files except under node_modules
}

// var stuff = require('./lib')
var express = require('express')
var app = express()

// add the coverage handler
if (isCoverageEnabled) {
  // enable coverage endpoints under /coverage
  app.use('/coverage', im.createHandler())
}

console.log('istanbul-middleware server side started at :8081')
app.listen(8081)
