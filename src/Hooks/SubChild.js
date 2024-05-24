import React, { useEffect } from 'react'
let renderCount =0
function SubChild() {
    useEffect( () =>{
        renderCount ++;
    })
  return (
    <div>
      rendercount: {renderCount}
    </div>
  )
}

export default SubChild
