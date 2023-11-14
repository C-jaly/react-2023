/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-18 14:47:19
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-11-14 19:03:46
 * @Description: file content
 */
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))