/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-08 18:49:53
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-08 19:19:40
 * @Description: file content
 */
import { createContext } from "react";

export const mainContext = createContext()

// import { createContext } from "react";

// export const mainContext = createContext({
//   name: 'defaultName',
//   changeName(name) {
//     console.log(this, this.name)
//     this.name = name;
//   }
// })