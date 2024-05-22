import logo from './logo.svg';
import './App.css';
//import Hello from './components/func_compionents';
   // if we use arrow function we impoert as follow
import {Hello} from './components/func_compionents';
import Hi from './components/class_componenets';
function App() {
  return (
<div className='App'>
  {/* <Hello></Hello>  also posible*/}
<Hello />
<Hi />
</div>
  );
}

export default App;
