import React, { Component } from 'react'

 class Event_On_Class extends Component {
     Click_handler() {
       // console.log("clicked")
       alert("action trigerred");
    }
  render() {
    return (
      <div>
        <button onClick={this.Click_handler}>Click</button>
      </div>
    )
  }
}

export default Event_On_Class
