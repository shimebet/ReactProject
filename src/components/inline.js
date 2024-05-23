import React from 'react'

function Inline() {
    //create object
    const heading = {
color: 'orange',
backgroundColor: 'black',
fontSize: '60px'
    }
  return (
    <div>
      <h1 style={heading}>Inline style for react component</h1>
    </div>
  )
}

export default Inline
