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

new Watcher(obj,'a.m.n',(val)=>{
    console.log('☆',val)
})

obj.a.m = 9;

console.log(obj)

// console.log(obj.d)

// obj.d.shift()

