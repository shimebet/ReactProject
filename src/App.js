import logo from './logo.svg';
import './App.css';
//import FullName from './components/props';
import Subscribe from './components/states';
import Event_fuc from './components/event_on_func_comp';
import Event_On_Class from './components/event_on_class';
import Event_Binding from './components/event_binding';
import Condition_Render from './components/condition_render';
import ListLanguage from './components/list';
//import Hello from './components/func_compionents';
  // if we use arrow function we impoert as follow
// import {Hello} from './components/func_compionents';
//import Hi from './components/class_componenets';
//import WellCome from "./components/jsx";
function App() {
  return (
<div className='App'>
  {/* <Hello></Hello>  also posible*/}

{/* <Hello />
<Hi /> */}

{/* <WellCome /> */}


{/* <FullName name="abebe" Age = "28"> 
<p>this first person </p>
</FullName>
<FullName name= "jamala" Age = "27"> 
<p>this second person </p>
</FullName>
<FullName name ="roba" Age = "26">
<button>click me</button>
</FullName> */}

{/* <Subscribe />  */}

{/* <Event_fuc />  */}

{/* <Event_On_Class /> */}

{/* <Event_Binding /> */}

{/* <Condition_Render /> */}

<ListLanguage />
</div>
  );
}

export default App;
