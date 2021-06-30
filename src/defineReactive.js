import observe from './observe'
import Dep from './Dep'

// 封装，为了构造一个闭包环境
export default function defineReactive(data,key,value = data[key]) {

    // 闭包中的dep
    const dep = new Dep();

    // 子元素也要进行observe,至此形成了递归。
    // 这个递归不是自己调用自己，而是多个函数、类循环调用。
    let childOb = observe(value);

    Object.defineProperty(data,key,{
        // 可枚举
        enumerable:true,
        // 可以被配置
        configurable:true,
        get() {
            // 如果现在处于依赖收集阶段
            if(Dep.target) { // 如果当前全局存在Watcher，则正在依赖收集
                dep.depend()
                if(childOb) {
                    console.log(`${key}`,111)
                    childOb.dep.depend()
                }
            }
            return value
        },
        set(newVal) {
            value = newVal
            // 当设置了新值，新值也要observe
            childOb = observe(newVal)
            // 发布订阅模式，通知dep
            dep.notify()
        }
    })
}