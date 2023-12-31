/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-11 14:45:36
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-26 12:49:00
 * @Description: file content
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CounterClass } from "../components/SetState"
import Counter from "../components/UseState"
import Store from "../store/store";
import { observer } from "mobx-react";

function Hook() {
  console.log('render Hook num:')
  const [num, setNum] = useState(0)
  const navigate = useNavigate()
  function handleClick() {
    // setNum(c => c+1);
    setNum(1)
  }
  function handleToAbout() {
    navigate('/usemodal/234234?query1=2', { state: '1', aaa: 'zezeze' })
    
  }
  useEffect(()=>{
    console.log('Hook useEffect')
  },[])
  return (
    <>
    <button onClick={handleToAbout}>导航去About页面{Math.random()}</button>
    <button onClick={handleClick}>点击修改num</button>
      {/* React18后使用ReactDom.createRoot创建的应用setState都是异步的 */}
      {/* React18后使用ReactDom.render创建的应用setState在原生的dom事件以及setTimeout，promise都是同步的 */}
      {/* <CounterClass num={num} />
      <Counter num={num}></Counter> */}
      <CounterClass num={0} />
      <Counter num={0}></Counter>
      <div>store内容{Store.storeValue}</div>
      <button onClick={() => Store.changeStoreValue()}>修改store值</button>
      
    </>
  )
}
export default observer(Hook)
