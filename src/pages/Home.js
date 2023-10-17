/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-08 16:58:13
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-17 16:21:33
 * @Description: file content
 */
import React from 'react'
import HomeHeader from '../components/HomeHeader';
import { mainContext } from '../context/context';
import withrouter from '../util/withrouter'
import { observer } from 'mobx-react';
import Store from '../store/store';

@withrouter
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default',
      tab: 0
    }
  }
  changeValue = (name) => {
    console.log(this, this.__proto__);
    this.setState({
      // value: name
      tab: 1
    })
  }
  navigateTo = (path) => {
   console.log(this.props.router)
   this.props.router.navigate(path)
  }
  handleChangeStore = () => {
    Store.changeStoreValue()
    // Store.setList();
  }
  render() {
    const { storeValue } = Store
    return (<div>
      <button onClick={() => this.navigateTo('/about')}>导航去About页面</button>
      <button onClick={() => this.navigateTo('/hook')}>导航去Hook页面</button>
      <button onClick={() => this.navigateTo('/usemodal')}>导航去Usemodal页面</button>
      <mainContext.Provider value={{name: this.state.value, changeName: this.changeValue}}>
        <div>Home</div>
        <button onClick={() => this.changeValue()}>Home点击修改</button>
        <HomeHeader value={this.state.value} changeValue={this.changeValue}></HomeHeader>
      </mainContext.Provider>
      <div className='home__store'>
        <div>mobx store中的内容{storeValue}</div>
        <button onClick={() => this.handleChangeStore()}>点击触发store中的内容更改</button>
        </div>
      
    </div>);
  }
}
 
export default Home;
