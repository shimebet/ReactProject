import React from 'react'

const FullName = (props) => {
    return (
        <div>
  <h1>{props.name} Kebede  {props.Age}</h1> 
{props.children}
        </div>
      
);
}
 
export default FullName;