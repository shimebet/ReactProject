import React, { Component } from 'react'

 class Event_Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "GOOD BYE",
      };
      //third way used to event binding which is recomended for good performance
      this.Handler = this.Handler.bind(this);
    }
    Handler(){
        this.setState({
            message: "BYE BYE",
        });
        //alert(this); this key word is undefined inplace we use event binding key word in onclick as follow
        console.log(this);
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.Handler.bind(this)}>CLick</button> */}
        {/* <button onClick={() => this.Handler()}>CLick</button> */}
        <button onClick={this.Handler}>CLick</button>
      </div>
    )
  }
}

export default Event_Binding
