/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-15 18:49:10
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-17 09:42:20
 * @Description: file content
 */
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function withRouter(Component) {
  return function(props) {
    const navigate = useNavigate();
    const params = useParams()
    const search = useSearchParams()
    return (
    <Component
      {...props}
      router={{navigate, params, search}}
    />)
  }
}
