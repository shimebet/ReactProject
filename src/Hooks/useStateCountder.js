import React, { useState } from 'react'

function UseStateCountder() {
    //array distracting
    const [count,countupdater]= useState(0)
  return (
    <div>
      <button onClick={() =>countupdater(count+1)}>Count {count}</button>
    </div>
  )
}

export default UseStateCountder
