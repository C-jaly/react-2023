/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-17 09:55:51
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-31 13:12:26
 * @Description: file content
 */
import { observable, action, computed, makeAutoObservable } from "mobx";

// class Store {
//   @observable storeValue = 10;
//   @observable storeList = [{name: 'xx', id: 1}];
//   @computed get ListLength() {
//     return this.storeList.length
//   }
//   @action changeStoreValue() {
//     console.log('store。js 改变storeValue')
//     this.storeValue ++;
//   }
//   @action setList() {
//     this.storeList = [...this.storeList, {name: 'sss', id: this.storeValue}]
//   }
// }
class Store {
  storeValue = 10;
  storeList = [{name: 'xx', id: 1}];
  constructor() {
    makeAutoObservable(this)
  }
  ListLength() {
    return this.storeList.length
  }
  changeStoreValue() {
    console.log('store。js 改变storeValue')
    this.storeValue ++;
  }
  setList() {
    this.storeList = [...this.storeList, {name: 'sss', id: this.storeValue}]
  }
}
const store = new Store()
export default store;


// 如果没有用到computed计算值，那么他永远不会计算
// 连续打印三次，只有第一次用到的时候会进行计算，之后判断内部依赖项没有改变，取缓存
let activeEffect = "";
const computedValue = {
  dep: [], // 收集用到这个计算属性的依赖，比如用到这个total值的autorun
  effect: "", // 同时会对内部使用的响应式数据ref或者说observable进行收集，在发生改变时进行计算
  _value: "", // 旧的缓存值，当依赖项没有更新时返回缓存值
  _dirty: false, // 判断是否重新计算的标准，不然返回缓存值
};
class ComputedRefImpl {
  _dirty = false;
  dep = [];
  _value = "";
  // 目标：收集内部依赖，get收集外部依赖
  constructor(getter) {
    // 初始化一个自身的Effect
    // 获取computed值时触发get，进行依赖收集
    // 调用effect.run执行getter，引用了响应式变量，所以触发响应式变量的依赖收集，将ReactiveEffect加入依赖列表中
    // 当响应式数据更新时触发依赖，即调用ReactiveEffect.scheduler，即第二个参数，设置dirty触发computed计算值的依赖项更新
    // computed依赖项更新时触发get，执行getter计算
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        // 触发外部依赖项更新
        triggerRefValue(this);
      }
    });
  }
  get value() {
    // 收集外部依赖
    trackRefValue(this);
    if (this._dirty) {
      // 需要重新计算， 并且触发依赖
      this._dirty = false;
      this._value = this.effect.run(); // 执行getter函数
    }
    return this._value;
  }
}
//  调用computed时触发get，进行依赖收集
// 调用effect.run执行getter，引用了响应式变量，所以触发响应式变量的依赖收集，将ReactiveEffect加入依赖列表中
//
function trackRefValue(context) {
  context.dep.add(activeEffect);
}
function triggerRefValue(context) {
  context.dep.map((item) => item());
}

class ReactiveEffect {
  active = true;
  dep = [];
  constructor(getter, scheduler) {
    this.getter = getter;
    this.scheduler = scheduler;
  }
  run() {
    activeEffect = this;
    this.getter();
    activeEffect = false;
  }
}
// computed初始化时new ReactiveEffect(getter, )

