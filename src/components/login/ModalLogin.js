import React, { Component } from 'react'
import { Modal, Button, Form } from 'antd'
import FormLogin from './FormLogin'
import FormForgot from './FormForgot'
import FormRegister from './FormRegister'

export default class ModalLogin extends Component {
  state = {
    visible: false,
    confirmLoading: false,
    showForm: 'login'
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleShowForgot = () => {
    this.setState({
      showForm: 'forgot'
    })
  }
  handleShowLogin = () => {
    this.setState({
      showForm: 'login'
    })
  }
  handleShowRegister = () => {
    this.setState({
      showForm: 'register'
    })
  }
  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  render() {
    const { visible, confirmLoading } = this.state
    const MyFormLogin = Form.create()(FormLogin)
    const MyFormForgot = Form.create()(FormForgot)
    const MyFormRegister = Form.create()(FormRegister)
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Login
        </Button>
        <Modal footer={null} width="380px" visible={visible} onOk={this.handleOk} confirmLoading={confirmLoading} onCancel={this.handleCancel}>
          {this.state.showForm === 'login' && (
            <div>
              <h1>Login</h1>
              <MyFormLogin />
              <a className="login-form-forgot" onClick={this.handleShowRegister}>
                Create account
              </a>
              {' or '}
              <a className="login-form-forgot" onClick={this.handleShowForgot}>
                Forgot password
              </a>
            </div>
          )}
          {this.state.showForm === 'forgot' && (
            <div>
              <h1>Forgot Password</h1>
              <MyFormForgot />
              <a className="login-form-forgot" onClick={this.handleShowRegister}>
                Create account
              </a>
              {' or '}
              <a className="login-form-forgot" onClick={this.handleShowLogin}>
                Login
              </a>
            </div>
          )}
          {this.state.showForm === 'register' && (
            <div>
              <h1>Create Account</h1>
              <MyFormRegister />
              <a className="login-form-forgot" onClick={this.handleShowForgot}>
                Forgot password
              </a>
              {' or '}
              <a className="login-form-forgot" onClick={this.handleShowLogin}>
                Login
              </a>
            </div>
          )}
        </Modal>
      </div>
    )
  }
}
