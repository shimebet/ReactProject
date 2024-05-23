import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      tutorials: '',
    };
  }

  //create handler
  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  commentHandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  listHandler = (event) => {
    this.setState({
      tutorials: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.comment} ${this.state.tutorials}`);
  };

  render() {
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
    };

    const inputStyle = {
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    };

    const labelStyle = {
      marginBottom: '5px',
      fontWeight: 'bold',
    };

    const buttonStyle = {
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#28a745',
      color: '#fff',
      cursor: 'pointer',
    };

    return (
      <form onSubmit={this.submitHandler} style={formStyle}>
        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>UserName: </label>
          <input type="text" value={this.state.username} onChange={this.usernameHandler} style={inputStyle} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>Comment: </label>
          <textarea value={this.state.comment} onChange={this.commentHandler} style={inputStyle}></textarea>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>Tutorials: </label>
          <select value={this.state.tutorials} onChange={this.listHandler} style={inputStyle}>
            <option value="Javascript">Javascript</option>
            <option value="Java">Java</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    );
  }
}

export default Form;
