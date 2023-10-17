import { useState, Fragment, useRef, useEffect } from 'react';
import { Modal, useModal } from './Modal'; 

export default function Counter(props = 0) {
  const [a, setA] = useState(0)
  const [b, setB] = useState('b')
  const [show, toggleModal] = useModal();
  const intervalRef= useRef();
  const valueRef = useRef(props);

  console.log('render Counter', `a: ${a}`, `b: ${b}`, props.num)
  function handleClickWithPromise() {
    Promise.resolve().then(() => {
      setA((a) => a + 1)
      setB('bb')
    })
  }
  // useEffect(() => {
    // intervalRef.current = setTimeout(() => {
    //   console.log('执行setInterval', intervalRef.current, a)
    //   setA(a => a + 1)
    //   setB(intervalRef.current)
    // }, 3000)
    // return () => {
    //   console.log('清除定时器', intervalRef.current)
    //   clearInterval(intervalRef.current);
    // }
  // }, [])
  useEffect(() => {
    console.log('useEffect', props.num, valueRef)
    valueRef.current = props.num;
  }, [props])
  useEffect(()=>{
    console.log('Counter useEffect')
  },[])
  function handleClickWithoutPromise() {
    setA((a) => a + 1)
    setB('bb')
  }
  
  function handleClickAlert() {
    setTimeout(() => alert('Followed ' + props.num), 3000);
  }
  function changeValueRef() {
    
  }

  return (
    <Fragment>
      Counter函数式组件{Math.floor(Math.random() * 10)}
      <button onClick={handleClickWithPromise}>
        {a}-{b} 同步执行      </button>
      <button onClick={handleClickWithoutPromise}>
        {a}-{b} 异步执行      </button>
        <button onClick={handleClickAlert}>
        点击3秒后alert，props.num: {props.num}</button>
        <hr></hr>
        <button onClick={toggleModal}>点击弹窗</button>
        <Modal show={show} onConfirm={toggleModal} onCancel={toggleModal} />
    </Fragment>
  )
}
