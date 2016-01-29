import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
    this.interval = setInterval(() => this.tick(), 1000)
  }

  tick () {
    this.setState({
      counter: this.state.counter + this.props.increment
    })
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <h1 className={this.props.color}>
        Hello ({this.props.increment}): {this.state.counter}
      </h1>
    )
  }
}

export class App extends Component {
  render () {
    return (
      <div>
        <Counter increment={1} />
        <Counter increment={5} />
      </div>
    )
  }
}