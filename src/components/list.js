import React from 'react'

function ListLanguage() {
    const prog =['java', 'css','c++','python','python'];
  return (
    <div>
      {/* <h1>{prog[0]}</h1>
      <h1>{prog[1]}</h1>
      <h1>{prog[2]}</h1> */}

{
    // prog.map(name => <h1 key={name}>{name}</h1>) it have error if the same name exist
    prog.map((name, index) => <h1 key={index}> <ul> <li type='square'>{name}</li> </ul></h1>)
}
    </div>
  )
}

export default ListLanguage
