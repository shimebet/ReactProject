import logo from './logo.svg';
import './App.css';
import FullName from './components/props';
//import Hello from './components/func_compionents';
   // if we use arrow function we impoert as follow
// import {Hello} from './components/func_compionents';
// import Hi from './components/class_componenets';
// import WellCome from "./components/jsx";
function App() {
  return (
<div className='App'>
  {/* <Hello></Hello>  also posible*/}
{/* <Hello />
<Hi /> */}
{/* <WellCome /> */}
<FullName name="abebe" Age = "28"> 
<p>this first person </p>
</FullName>
<FullName name= "jamala" Age = "27"> 
<p>this second person </p>
</FullName>
<FullName name ="roba" Age = "26">
<button>click me</button>
</FullName>
</div>
  );
}

export default App;
