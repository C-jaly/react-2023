/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-08 16:58:23
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-15 17:24:43
 * @Description: file content
 */
import React, { Component } from 'react'
class About extends Component {
  constructor(props) {
    super(props);
    this.customRef = React.createRef()
  }
  state = {  }
  componentDidMount() {
    console.log('this.customRef', this.customRef)
    this.customRef.current.focus();
  }
  render() {
    console.log(this)
    return (<div>
      <div>About</div>
      <CustonInput ref={this.customRef}></CustonInput>
    </div>);
  }
}
 
export default About;

// function CustonInput(props) {
//   return (<input type="text"></input>)
// }
const CustonInput =  React.forwardRef((props, ref) => {
  return (<input ref={ref} type="text"></input>)
})