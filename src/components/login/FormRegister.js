import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

export default class FormRegister extends Component {
  state = {
    buttonLoading: false
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.setState({ buttonLoading: true })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number! Eg: 61234567891', max: 12, min: 7, type: 'number' }]
          })(<Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Valid phone number, Eg: 61234567891" />)}
        </FormItem>
        <Button type="primary" htmlType="submit" loading={this.state.buttonLoading} className="login-form-button">
          Create account
        </Button>
        <br />
        <br />
      </Form>
    )
  }
}
