/**
 * Constants
 */
const TEST_ENV = 'test'
const URL = 'http://localhost:17891/ping'

const METHOD_GET = 'GET'
const METHOD_POST = 'POST'

/**
 * Utils
 */
function errorHandler (vm, err) {
  console.error(err)
  vm.$message({
    showClose: true,
    message: err,
    type: 'error',
  })
}

function isContentTypeJson (content) {
  let contentType = content.toLowerCase()
  if (contentType.indexOf('text') != -1) {
    return false
  } else if (contentType.indexOf('json') != -1) {
    return true
  } else {
    throw new Error('Invalid content type')
  }
}

function createHeaders (headers) {
  ret = {}
  for (let header of headers) {
    if (Boolean(header.name) && Boolean(header.value)) {
      ret[header.name] = header.value
    }
  }
  return ret
}
