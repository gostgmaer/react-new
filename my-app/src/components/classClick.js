import React, { Component } from 'react'

export class classClick extends Component {
    clickHandler(){
        console.log('log the Button class Component');
    }
  render() {
    return (
      <div><button className='btn' onClick={this.clickHandler}>Click Me</button></div>
    )
  }
}

export default classClick