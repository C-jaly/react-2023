/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-15 23:31:10
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-15 23:39:53
 * @Description: file content
 */
import { useContext } from "react"
import RouteContext from "../context/context"

export default function MyOutlet() {
  const context = useContext(RouteContext);
  console.log(context)
  return (
    <>
    {context.outlet}
    </>)
}