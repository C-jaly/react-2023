/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-12 19:08:36
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-12 19:22:16
 * @Description: file content
 */
import { useState } from "react";

export default function useModal() {
  const [ show, setShowModal ] = useState(false)
  const toggleModal = () => {
    setShowModal(c => !c);
  }
  return [show, toggleModal]
}