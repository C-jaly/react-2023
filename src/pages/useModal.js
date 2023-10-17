/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-12 21:07:29
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-15 20:19:12
 * @Description: file content
 */
import React, { useState, useMemo } from "react";
import Modal from "../components/ModalJS/Modal";
import Toast from "../components/ModalJS/Toast";
import { useParams, useSearchParams, Outlet } from "react-router-dom";

/* 挂载方式调用modal */
export default function UseModal() {
  const [visible, setVisible] = useState(false);
  const [nameShow, setNameShow] = useState(false);
  const params = useParams()
  const [search] = useSearchParams()
  
  console.log('UseModal params:', params, 'search: ', search.get('query1'))
  const handleClick = () => {
    setVisible(!visible);
    setNameShow(!nameShow);
  };
  /* 防止 Model 的 PureComponent 失去作用 */
  const [handleClose, handleOk, handleCancel] = useMemo(() => {
    const Ok = () => console.log("点击确定按钮");
    const Close = () => setVisible(false);
    const Cancel = () => console.log("点击取消按钮");
    return [Close, Ok, Cancel];
  }, []);
  function handleShowToast() {
    Toast.info('hhahhhhh')
  }
  return (
    <div>
      {/* <Modal
        onCancel={handleCancel}
        onClose={handleClose}
        onOk={handleOk}
        title={"标题"}
        visible={visible}
        width={700}
      >
        <div className="feel">内容。。。。。。。</div>
      </Modal> */}
      <button
        onClick={() => {
          setVisible(!visible);
          setNameShow(false);
        }}
      >
        {" "}
        model show{" "}
      </button>
      <button onClick={handleClick}> model show ( 显示作者 ) </button>
      <button onClick={handleShowToast}> 点击展示Toast </button>
      <Outlet />
    </div>
  );
}
