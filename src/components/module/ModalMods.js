import { Modal, Button,  } from 'antd'
import React, { Component } from 'react'

class ModalMods extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true
    })
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      })
    }, 2000)
  }
  handleCancel = () => {
    console.log('Clicked cancel button')
    this.setState({
      visible: false
    })
  }
  render() {
    const { visible, confirmLoading, ModalText } = this.state
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Modal className="no-border-bottom" width={this.props.widthMods} visible={visible} onOk={this.handleOk} confirmLoading={confirmLoading} onCancel={this.handleCancel}>
          <h1>Login</h1>
          <p>{ModalText}</p>
        </Modal>
      </div>
    )
  }
}
export default ModalMods
