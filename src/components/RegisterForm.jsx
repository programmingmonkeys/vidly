import React from 'react'
import Joi from 'joi-browser'
import Form from './common/Form'
import * as userService from '../services/UserService'

import {loginWithJwt} from '../services/authService'

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
  }

  schema = {
    username: Joi.string().required().email().label('Username'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
  }

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data)  
      loginWithJwt(response.headers['x-auth-token'])
      window.location = '/' // this.props.history.push('/')
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = ex.response.data
        this.setState({errors})
      }
    }
    
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    )
  }
}

export default RegisterForm
