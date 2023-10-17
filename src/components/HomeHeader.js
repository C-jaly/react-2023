/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-08 18:19:22
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-15 10:17:38
 * @Description: file content
 */
import React, { Component } from 'react'
import HomeHeaderTop from './HomeHeaderTop';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    console.log('render HomeHeader')
    return (<div>
      <div>由我HomeHeader来组成头部{Math.floor(Math.random()*10)}</div>
      <button type='primary' onClick={() => this.props.changeValue('HomeHeader')}>HomeHeader点击修改Home组件的state</button>
      <div>Home传来的: {this.props.value}</div>
      <HomeHeaderTop></HomeHeaderTop>
    </div>);
  }
}
 
export default HomeHeader;
