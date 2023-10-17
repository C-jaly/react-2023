import React from "react";
class ErrorBoundary extends React.Component {
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
  // componentWillMount() {

  // }
  // componentWillUpdate() {

  // }
  // 
  static getDerivedStateFromProps() {

  }
  shouldComponentUpdate() {

  }
  // componentWillReceiveProps() {

  // }
  getSnapshotBeforeUpdate() {
    
  }
  componentDidUpdate() {

  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  


  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>error</h1>
    }
    return this.props.children
  }
}