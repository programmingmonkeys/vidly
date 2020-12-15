import React, { Component } from 'react'

class Counter extends Component {
  state = {
    value: this.props.value,
  }

  handleIncrement = () => {
    this.setState({ count: this.state.value + 1 })
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { value: count } = this.state
    return count === 0 ? 'Zero' : count
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
