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

// demo 02, object property
let isDemo02Run = false
if (isDemo02Run) {
    (function () {
        let obj1 = {
            data: ['Jan', 'Feb', 'Mar']
        }
        console.log('object1 data:', obj1.data.join(', '))

        let obj2 = {
            data: (() => {
                return ['Jan', 'Feb', 'Mar']
            })()
        }
        console.log('object2 data:', obj2.data.join(', '))

        let obj3 = {
            data () {
                return ['Jan', 'Feb', 'Mar']
            }
        }
        console.log('object3 data:', obj3.data().join(', '))
    })()
}

// demo 03, instance access
let isDemo03Run = false
if (isDemo03Run) {
    (function () {
        inst = {
            count: 1,
            cal: {
                increment (num) {
                    // cannot use this.count
                    inst.count = inst.count + num
                },
                decrement (num) {
                    inst.count = inst.count - num
                }
            }
        }

        inst.cal.increment(5)
        console.log('count:', inst.count)
        inst.cal.decrement(3)
        console.log('count:', inst.count)
    })()
}


console.log(__filename, 'DONE.')
