/*
 * @Author: chenjianli 15988827943@163.com
 * @Date: 2023-10-12 21:32:47
 * @LastEditors: chenjianli
 * @LastEditTime: 2023-10-14 12:46:43
 * @Description: file content
 */
import { createRoot } from 'react-dom/client'
export default {
  info(options) {
    if (this.root) {
      this.hide();
    }
    this.container = document.createElement('div')
    document.body.appendChild(this.container);
    this.root = createRoot(this.container)
    const props = typeof options === 'string' ? {content: options} : options
    console.log(props);
    this.root.render(<Toast {...props} />)
  },
  hide() {
    this.root.unmount()
    this.container.parentNode.removeChild(this.container)
  }
}

function Toast({icon = '', content = '信息'}) {
  return (<div>
      {icon && <img src={icon} />}
      <span>{content}</span>
    </div>)
}