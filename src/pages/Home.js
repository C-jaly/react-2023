/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-08 16:58:13
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-17 09:43:52
 * @Description: file content
 */
import React from 'react'
import HomeHeader from '../components/HomeHeader';
import { mainContext } from '../context/context';
import withrouter from '../util/withrouter'

@withrouter
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default',
      tab: 0
    }
    this.router = this.props.router
  }
  changeValue = (name) => {
    console.log(this, this.__proto__);
    this.setState({
      // value: name
      tab: 1
    })
  }
  handleToAbout = () => {
   console.log(this.router)
  }
  render() {
    return (<div>
      <button onClick={this.handleToAbout}>导航去About页面</button>
      <mainContext.Provider value={{name: this.state.value, changeName: this.changeValue}}>
        <div>Home</div>
        <button onClick={() => this.changeValue()}>Home点击修改</button>
        <HomeHeader value={this.state.value} changeValue={this.changeValue}></HomeHeader>
      </mainContext.Provider>
      
    </div>);
  }
}
 
export default Home;
