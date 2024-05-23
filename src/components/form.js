import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: ''
      }
    }
    //create handler
    usernameHandler = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    commentHandler = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }
  render() {
    return (
    <form> 
        <div>
            <label>UserName: </label>
            <input type='text' value={this.state.username} onChange={this.usernameHandler} />
        </div>
        <div>
            <label>Comment: </label>
            <textarea value= {this.state.comment} onChange={this.commentHandler}></textarea>
        </div>
    </form>
 
    )
  }
}

export default Form
