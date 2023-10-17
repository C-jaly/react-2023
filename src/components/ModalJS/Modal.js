import {Dialog} from "./dialog";
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
class Modal extends React.PureComponent {
    // 渲染底部按钮
  renderFooter = () => {
    const {onOk, onCancel, cancelText, okText, footer} = this.props
    //    触发onOk / onCancel回调
    if (footer && React.isValidElement(footer)) return footer
    return <div className="model_bottom">
      <div className="model_btn_box">
        <button className="searchbtn"
          onClick={(e) => {
              onOk && onOk(e)
          }}>{okText || '确定'}
        </button>
        <button className="concellbtn"
          onClick={(e) => {
              onCancel && onCancel(e)
          }}>{cancelText || '取消'}
        </button>
      </div>
    </div>
  }
    // 渲染底部
  renderTop = () => {
    const {title, onClose} = this.props
    return <div className="model_top">
      <p>{title}</p>
      <span className="model_top_close" onClick={() => onClose && onClose()}>X</span>
    </div>
  }
  // 渲染弹窗内容
  renderContent = () => {
    const {content, children} = this.props
    return React.isValidElement(content) ? content : children ? children : null
  }
  render() {
    const {visible, width = 500, closeCb, onClose} = this.props
    return <Dialog
      closeCb={closeCb}
      onClose={onClose}
      visible={visible}
      width={width}
    >
      {this.renderTop()}
      {this.renderContent()}
      {this.renderFooter()}
    </Dialog>
  }
}
// 静态方法
let ModalContainer = null
const modelSymbol = Symbol('$$_model_Container_hidden')
// 静态属性show——控制
Modal.show = (config) => {
    //  如果modal已经存在，name就不需要第二次show
    if (ModalContainer) return
    const props = {...config, visible: true}
    const container = ModalContainer = document.createElement('div')
    // 创建一个管理者，管理model状态
    const manager = container[modelSymbol] = {
        setShow: null,
        mounted: false,
        hidden() {
            const {setShow} = manager
            setShow && setShow(false)
        },
        destroy() {
            //    卸载组件
            ReactDOM.unmountComponentAtNode(container)
            // 移除节点
            document.body.removeChild(container)
            // 置空元素
            ModalContainer = null
        }
    }
    const ModelApp = (props) => {
        const [show, setShow] = useState(false)
        manager.setShow = setShow
        const {visible, ...trueProps} = props
        useEffect(() => {
            // 加载完成，设置状态
            manager.mounted = true
            setShow(visible)
        }, [])
        return <Modal {...trueProps} closeCb={() => manager.mounted && manager.destroy()} visible={show}/>
    }
    // 插入到body中
    document.appendChild(container)
    // 渲染React元素
    ReactDOM.render(<ModelApp/>, container)
    return manager
}
Modal.hidden = () => {
    if(!ModalContainer) return
    // 如果存在ModalContainer 那么隐藏ModalContainer
    ModalContainer[modelSymbol] && ModalContainer[modelSymbol].hidden()
}
export default Modal

