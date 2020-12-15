import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/Counter'

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root'),
)
