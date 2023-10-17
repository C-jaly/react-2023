/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-06 18:42:46
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-11 17:14:31
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import router from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);
// const root = ReactDOM.render(router, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<div>Hello World</div>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
