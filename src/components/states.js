import React, { Component } from 'react'

 class Subscribe extends Component {
    constructor() {
      super()
    
      this.state = {
         Channel: "SH TECH",
      };
    }
     changeMessage() {
        this.setState({
            Channel: "Thanks for Subscribe our channel",
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.Channel}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Subscribe
