import Observer from './Observer'

// 创建observe函数
export default function observe(value) {
    // 如果value不是对象，什么都不做
    if(!(value instanceof Object)) return;
    var ob;
    if(typeof value.__ob__ !== 'undefined') {
        ob = value.__ob__;
    } else {
        ob = new Observer(value)
    }
    return ob;
}