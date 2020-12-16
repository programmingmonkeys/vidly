import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = e => {
    const account = { ...this.state.account }
    account.username = e.currentTarget.value
    this.setState({ account })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>
        </form>
        <button className="btn btn-primary">Login</button>
      </div>
    )
  }
}

export default LoginForm
