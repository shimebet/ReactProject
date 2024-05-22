import React from 'react'

function Event_fuc() {
    function Handler(){
        //console.log("clicked");
        alert("clicked on function");
    }
  return (
    <div>
      <button onClick={Handler}>ClickMe</button>
    </div>
  )
}

export default Event_fuc
