import React from 'react'

import styles from './component.css'

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: {
        red: 255,
        green: 255,
        blue: 255,
        opacity: 1
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    let {red, green, blue, opacity} = this.state.color
    const divStyle = {
      backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`
    }
    return (
      <div>
        <div className='lump' style={divStyle}>Hello world!This is tapas component generator!</div>
        <button onClick={this.handleClick}>Click to change the color</button>
      </div>
    )
  }

  handleClick () {
    this.setState({
      color: {
        red: Math.floor(Math.random()*255),
        green: Math.floor(Math.random()*255),
        blue: Math.floor(Math.random()*255),
        opacity: Math.random()
      }
    })
  }
}

export default Component
