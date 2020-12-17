import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from './common/Input'

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }

  validate = () => {
    const options = { abortEarly: false }
    const { error } = Joi.validate(this.state.account, this.schema, options)

    if (!error) return null

    const errors = {}
    for (let item of error.details) errors[item.path[0]] = item.message
    return errors
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submit button fired')

    const errors = this.validate()

    this.setState({ errors: errors || {} })

    if (errors) return

    console.log('submitted')
  }

  validateProperty = ({ name, value }) => {
    if (name === 'username') if (value.trim() === '') return 'Username is required'
    if (name === 'password') if (value.trim() === '') return 'Password is required'
  }

  handleChange = ({ currentTarget: input }) => {
    console.log('change fired')
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = { ...this.state.data }
    data[input.name] = input.value

    this.setState({ data, errors })
  }

  render() {
    const { account, errors } = this.state

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
        </form>
        <button className="btn btn-primary">Login</button>
      </div>
    )
  }
}

export default LoginForm
