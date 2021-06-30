import observe from './observe'
import Watcher from './Watcher'

var obj = {
    a:{
        m:{
            n:5
        }
    },
    b:3,
    c: {
        cc:2
    },
    d:[1,2,3]
}


observe(obj);

// obj.d.pop()
// obj.d.splice(1,0,[33,44])

new Watcher(obj,'a',(val)=>{
    console.log(2222)
    console.log('☆☆☆☆☆☆☆☆☆☆',val)
})

obj.a.m= 2

console.log(obj)

// console.log(obj.d)

// obj.d.shift()

