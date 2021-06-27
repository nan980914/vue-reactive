import observe from './observe'

// 封装，为了构造一个闭包环境
export default function defineReactive(data,key,value = data[key]) {

    // 子元素也要进行observe,至此形成了递归。
    // 这个递归不是自己调用自己，而是多个函数、类循环调用。
    let childob = observe(value);

    Object.defineProperty(data,key,{
        // 可枚举
        enumerable:true,
        // 可以被配置
        configurable:true,
        get() {
            console.log('你正在试图访问属性')
            return value
        },
        set(newVal) {
            console.log('你正在试图设置属性')
            value = newVal
            // 当设置了新值，新值也要observe
            childob = observe(newVal)
        }
    })
}