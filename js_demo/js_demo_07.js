/**
 * Created by zhengjin on 2018/1/27.
 */

// demo 01, task execution order
let isDemo01Run = false
if (isDemo01Run) {
    (function () {
        console.log('1')

        // async task
        setTimeout(function () {
            console.log('2')
        }, 0)

        // async micro task
        Promise.resolve().then(function () {
            console.log('3')
        }).then(function () {
            console.log('4')
        })

        console.log('5')
    })()
}

console.log(__filename, 'DONE.')
