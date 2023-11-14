/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-06 18:42:46
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-26 14:02:38
 * @Description: file content
 */
import logo from './logo.svg';
import './App.css';
import { Component, useState, useEffect } from 'react'
import { Outlet}  from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  // 更新 state 使下一次渲染能够显示降级后的 UI
  static getDerivedStateFromError(err) {
    return {hasError: true}
  }
  // 更新 state 使下一次渲染能够显示降级后的 UI
  componentDidCatch(err) {

  }
  render() { 
    const { hasError } = this.state;
    if (hasError) {
      return <h1>error</h1>
    }
    return (<div className='App'>
      <Outlet />
      <div className='acls1'><span>hahhh</span></div>
      <div className='acls2'>zezezee</div>
    </div>);
  }
}
 

export default App;

// function Child() {
//   useEffect(() => {
//     console.log('Child');
//   }, [])
//   return <h1>child</h1>;
// }

// function Father() {
//   useEffect(() => {
//     console.log('Father');
//   }, [])

//   return <Child/>;
// }

// function App() {
//   useEffect(() => {
//     console.log('App');
//   }, [])

//   return <Father/>;
// }
// export default App;