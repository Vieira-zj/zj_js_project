/**
 * Created by zhengjin on 2021/10/24.
 */


/**
 * Browser Utils
 */

// 回到顶部
const goToTop = () => window.scrollTo(0, 0)

// 获取浏览器Cookie的值
const getCookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift()

// 复制到剪贴板
const copyToClipboard = (text) => navigator.clipboard.writeText(text)

// 获取用户选择的文本
const getSelectedText = () => window.getSelection().toString()

// 从 URL 获取查询参数
const getParameters = (URL) => {
  URL = JSON.parse(
    '{"' +
    decodeURI(URL.split("?")[1])
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
  )
  return JSON.stringify(URL)
}

// Object.fromEntries(new URLSearchParams(window.location.search))


/**
 * Common Utils
 */

// 求数字的平均值
const average = (...args) => args.reduce((a, b) => a + b) / args.length

// 英文字符串首字母大写
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

// 翻转字符串
const reverse = (str) => str.split('').reverse().join('')

// 数组去重
const arrayDistinct = (arr) => [...new Set(arr)]

// 校验数组是否为空
const arrIsNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0

// 打乱数组
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random())

// 颜色RGB转十六进制
const rgbToHex = (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

// 生成随机十六进制颜色
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`

// 对象复制
const deepCopy = (obj) => {
  let str = JSON.stringify(obj)
  return JSON.parse(str)
}

// 防抖函数
const debounce = (func, interval) => {
  let timer = null
  return (...values) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func(...values)
    }, interval)
  }
}


/**
 * Datetime Utils
 */

// 检查日期是否合法
const isDateValid = (val) => !Number.isNaN(new Date(val).valueOf())

// 查找日期位于一年中的第几天
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

// 计算2个日期之间相差多少天
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)


if (require.main === module) {
  console.log('average:', average(1, 2, 3, 4))
  // console.log('capitalize:', capitalize("hello"))
  // console.log('array distinct:', arrayDistinct([1, 2, 3, 3, 4, 4, 5, 5, 6]))
  // console.log('string reverse:', reverse('hello world'))
  // console.log('arrIsNotEmpty:', arrIsNotEmpty([1, 2, 3]))

  // console.log('shuffle array:', shuffleArray([1, 2, 3, 4, 5, 6]))

  // console.log('rgb to hex:', rgbToHex(0, 51, 255))
  // console.log('random hex:', randomHex())

  // console.log('date validate:', isDateValid("December 17, 1995 03:24:00"))
  // console.log('day of year:', dayOfYear(new Date()))
  // console.log('day diff:', dayDiff(new Date("2020-10-21"), new Date("2021-10-22")))

  console.log(__filename, 'DONE.')
}
