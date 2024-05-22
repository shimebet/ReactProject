import React, { Component } from 'react'

 class Condition_Render extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isSubscribe: true,
      };
    }
    
  render() {
          //1 if else...
// if(this.state.isSubscribe){
//     return(
//         <div>
//             <h1>Subscribed</h1>
//         </div>
//     )
// }else{
//     return(
//         <div>
//             <h1>Subscribe</h1>
//         </div>
//     ) 
// }

             //2 ternary operator
return(
this.state.isSubscribe ?
<div><h1>Subscribed</h1></div>:
<div><h1>Subscribe</h1></div>

)


           //3 ways logical &&  but not recommended b/c only return one condition

// return(
//     this.state.isSubscribe && <div><h1>Subscribed</h1></div>
// )
    // return (
    //   <div>
    //     <h1>Subscribed</h1>
    //     <h1>Subscribe</h1>
    //   </div>
    // )
  }
}

export default Condition_Render
