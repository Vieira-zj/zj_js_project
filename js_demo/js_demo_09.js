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

if (require.main === module) {
  jsDemo01()
}
