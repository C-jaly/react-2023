import React, { Component } from 'react'
import { mainContext } from '../context/context';
class HomeHeaderTop extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = mainContext
  state = {  }
  onTriggerEvent = () => {
    console.log(this.context);
    this.context.changeName('HomeHeaderTop');
  }
  render() { 
    return ( <div>
      由我HomeHeaderTop组件来组成头部的头部
      <div>拿到的context:{this.context.name}</div>
      <button onClick={() => this.onTriggerEvent()}>HomeHeaderTop点击触发context能穿方法吗</button>
    </div> );
  }
}
 
export default HomeHeaderTop;