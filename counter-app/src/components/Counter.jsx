import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.state.count === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? <h1>Zero</h1> : count
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    )
  }
}
export default Counter
