var uid = 0;
export default class Dep {
  constructor() {
    this.id = uid++;

    // 用一个数组来存储自己的订阅者Watcher实例
    this.subs = [];
  }
  // 添加订阅
  addSub(sub) {
    this.subs.push(sub);
  }
  // 添加依赖
  depend() {
    // Dep.target 就是一个我们自己指定的全局的位置，全局唯一
    // Dep.target 其实就是watcher
    if(Dep.target) {
      // this.addSub(Dep.target);
      Dep.target.addDep(this)
    }
  }
  // 通知更新
  notify() {
    console.log("notify");
    // 浅克隆一份
    const subs = this.subs.slice();
    // 遍历
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
