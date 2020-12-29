import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'
import MovieForm from './components/MovieForm'
import Movies from './components/Movies'
import Customers from './components/Customers'
import Rentals from './components/Rentals'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Logout from './components/Logout'
import { getCurrentUser } from './services/authService'

// CSS
import './App.css'

// Toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
  state = {}

  componentDidMount() {
    const user = getCurrentUser()
    // console.log(user)
    this.setState({ user })
  }

  render() {
    return (
      <>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <div className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </>
    )
  }
}

export default App
