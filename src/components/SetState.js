/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-11 14:42:17
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-15 10:12:29
 * @Description: file content
 */
import React from 'react';

export class CounterClass extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
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
  render() {
    console.log('render CounterClass', this.state.count)
    return (
      <div>
        类式组件 {Math.floor(Math.random() * 10)}
        <button onClick={this.handleClick}>
          你点击了 {this.state.count} 次
        </button>
        <button onClick={this.handleClickAlert}>
        点击3秒后alert，props.num: {this.props.num}</button>
      </div>
    );
  }
}
