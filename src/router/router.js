/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-08 17:04:35
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-15 22:31:42
 * @Description: file content
 */
import { createBrowserRouter, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import MyBrowserRouter from '../pages/MyRoute/MyBrowserRouter'
import Hook from '../pages/Hook'
import UseModal from '../pages/useModal'
import Child from '../pages/Child'

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [{
//       path: 'home',
//       element: <Home />
//     }, {
//       path: 'about',
//       element: <About />
//     }]
//   }])
{/* <Navigate to="/home"></Navigate> */}
const router = (<Router>
  <Routes>
    <Route path='/*' element={<App/>}>
      <Route index path='home' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='router' element={<MyBrowserRouter />}></Route>
      <Route path='hook' element={<Hook />}></Route>
      <Route path='usemodal' element={<UseModal />}>
        <Route path=':id' element={<Child />}></Route>
      </Route>
    </Route>
  </Routes>
</Router>)

export default router;