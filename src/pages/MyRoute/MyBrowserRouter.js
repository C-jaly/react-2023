/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-15 22:17:48
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-15 23:20:07
 * @Description: file content
 */
import MyRoute from "./MyRoute"
import MyRoutes from "./MyRoutes"
import Child1 from "./component/Child1"
import Child2 from "./component/Child2"
import Parent1 from "./component/Parent1"
import Parent2 from "./component/Parent2"

export default function() {
  return (
  <MyRoutes location="parent1/child2">
    <MyRoute path="parent1" element={<Parent1 />}>
      <MyRoute path="child1" element={<Child1 />}></MyRoute>
      <MyRoute path="child2" element={<Child2 />}></MyRoute>
    </MyRoute>
    <MyRoute path="parent2" element={<Parent2 />}></MyRoute>
  </MyRoutes>
  )
}