/**
 * Created by zhengjin on 2024/2/29.
 */

// demo01, base64 encode and decode
function jsDemo01 () {
  let res = Buffer.from('hello world').toString('base64')
  console.log('base64 encode:', res)

  let raw = Buffer.from(res, 'base64').toString('ascii')
  console.log('base64 decode:', raw)
}

// demo02, var and let
function jsDemo02 () {
  declareByVar()
  declareByLet()
}

var x = 1

function declareByVar () {
  console.log(x) // undefined
  if (true) {
    var x = 2 // 声明被提升
  }
  console.log(x) // 2
}

let y = 11

function declareByLet () {
  console.log(y) // 11
  if (true) {
    let y = 12
  }
  console.log(y) // 11
}


if (require.main === module) {
  // jsDemo01()
  jsDemo02()
}
