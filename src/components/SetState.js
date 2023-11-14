/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-11 14:42:17
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-28 16:53:48
 * @Description: file content
 */
import React from 'react';
import './style.css'
export class CounterClass extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState(c => ({ count: c.count + 1 }));
    console.log('count1', this.state.count);
    this.setState(c => ({ count: c.count + 1 }));
    console.log('count1', this.state.count);
    setTimeout(() => {
      this.setState(c => ({ count: c.count + 1 }));
      console.log('count1', this.state.count);
      this.setState(c => ({ count: c.count + 1 }));
      console.log('count2', this.state.count);
    }, 1000);
  };
  handleClickAlert = () => {
    // setTimeout(showMessage, 3000);
    setTimeout(() => alert('Followed ' + this.props.num), 3000);
  }

  iterator() {
    var obj = {name:1, age:2}
    obj[Symbol.iterator] = function() {
      return {
        entries: Object.entries(obj),
        index: 0,
        next() {
          const index = this.index;
          if (this.index < this.entries.length) {
            this.index ++;
            return {value: this.entries[index], done: false}
          }
          return {value: undefined, done: true}
        }
      }
    }
    obj[Symbol.iterator] = function* helloWorldGenerator() {
      const entries = Object.entries(obj)
      for (let i = 0; i< entries.length;i++) {
        yield entries[i];
      }
    }
    for(let i of obj) {
      console.log('i', i);
    }
    var arr = [1, 2, [3, 4, [5, 6], 7], 8]
    function *flat() {

    }
    function flatFor(arr, newArr) {
      for (let i = 0; i< arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flatFor(arr[i], newArr)
        } else {
          newArr.push(arr[i])
        }
      }
    }
    var newArr = [];
    flatFor(arr, newArr)
    console.log(newArr)
    function flatReduce(arr, newArr = []) {
      arr.reduce((count, item) => {
        if (Array.isArray(item)) {
          return flatReduce(item, count)
        } else {
          count.push(item);
          return count
        }
      }, newArr)
      return newArr
    }
    console.log('flatReduce', flatReduce(arr))
  }

  render() {
    console.log('render CounterClass', this.state.count)
    this.iterator()
    return (
      <div>
        类式组件 {Math.floor(Math.random() * 10)}
        <button onClick={this.handleClick}>
          你点击了 {this.state.count} 次
        </button>
        <button onClick={this.handleClickAlert}>
        点击3秒后alert，props.num: {this.props.num}</button>
        <div className='outer'>
          <div className='inner1'>1</div>
          <div className='inner2'>2</div>
          <div className='inner3'>3</div>
          <div className='inner4'>4</div>
          <div className='inner5'>5</div>
          <div className='inner6'>6</div>
          <div className='inner7'>7</div>
          <div className='inner8'>8</div>
          <div className='inner9'>9</div>
        </div>
        <div className='flex-box'>
          <div className='flex'>flex1</div>
          <div className='flex'>flex2</div>
          <div className='flex'>flex3</div>
          <div className='flex'>flex4</div>
          <div className='flex'>flex5</div>
          <div className='flex'>flex6</div>
        </div>
        <div className='center-container'>
          <div className='center'>flex6</div>
        </div>
      </div>
      
    );
  }
}
