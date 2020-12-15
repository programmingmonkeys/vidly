import React from 'react'
import ReactDOM from 'react-dom'
import Counters from './components/Counters'

import './index.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root'),
)
