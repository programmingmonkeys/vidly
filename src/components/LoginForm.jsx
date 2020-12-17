import React from 'react'
import Joi from 'joi-browser'
import Form from './common/Form'
import Input from './common/Input'

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = () => {
    console.log('submitted')
  }

  render() {
    const { data, errors } = this.state

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
        </form>
        <button disabled={this.validate()} className="btn btn-primary">
          Login
        </button>
      </div>
    )
  }
}

export default LoginForm
