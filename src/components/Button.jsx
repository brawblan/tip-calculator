import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { name, value, onClick } = this.props
    return (
      <button
        id={`${name}${value}`}
        name={name}
        value={value}
        onClick={onClick}
      >
        {value}
      </button>
    )
  }
}

export default Button
