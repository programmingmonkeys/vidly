import React, { Component } from 'react'

import Input from './common/Input'

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = ({ currentTarget: i }) => {
    const account = { ...this.state.account }
    account[i.name] = i.value
    this.setState({ account })
  }

  render() {
    const { account } = this.state

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input name="username" value={account.username} label="Username" onChange={this.handleChange} />
          <Input name="password" value={account.password} label="Password" onChange={this.handleChange} />
        </form>
        <button className="btn btn-primary">Login</button>
      </div>
    )
  }
}

export default LoginForm
