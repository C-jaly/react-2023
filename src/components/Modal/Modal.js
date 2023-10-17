/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-12 18:59:15
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-12 19:27:05
 * @Description: file content
 */

import { createPortal } from "react-dom";

function Modal(props) {
  if (!props.show) {
    return null;
  }
  function handCancel() {
    props.onCancel && props.onCancel();

  }
  function handConfirm() {
    props.onConfirm && props.onConfirm();
  }
  return createPortal(<div>
    <div className="header">{props.title || '标题'}</div>
    <div className="content">{props.content || '内容'}</div>
    <div className="content">
      <button onClick={handConfirm}>确定</button>
      <button onClick={handCancel}>取消</button>
    </div>
  </div>, document.body)
}
export default Modal;