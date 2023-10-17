import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
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
    return (<div>
      <Outlet />
    </div>);
  }
}
 

export default App;
