import defineReactive from './defineReactive'

import observe from './observe'

var obj = {
    a:{
        m:{
            n:5
        }
    },
    b:3,
    d:[1,2,3]
}


observe(obj);

obj.a.m = 222

console.log(obj.a.m)

console.log(obj.d)

// obj.d.push(33)

// obj.d.shift()

// obj.d.length =1

obj.d[2] = 4

obj.d[6] = 555

console.log(obj.d)
// console.log(obj.d)




// defineReactive(obj,'a',3)

