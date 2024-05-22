// import React from 'react'

// const FullName = (props) => {
//     return (
//         <div>
//   <h1>{props.name} Kebede  {props.Age}</h1> 
// {props.children}
//         </div>
      
// );
// }
// export default FullName;
import React, { Component } from 'react'

export default class props extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} Kebede  {this.props.Age}</h1>
        {this.props.children}
      </div>
    )
  }
}
