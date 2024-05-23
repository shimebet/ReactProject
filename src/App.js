import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FullName from './components/props';
import Subscribe from './components/states';
import Event_fuc from './components/event_on_func_comp';
import Event_On_Class from './components/event_on_class';
import Event_Binding from './components/event_binding';
import Condition_Render from './components/condition_render';
import ListLanguage from './components/list';
import Style from './components/style';
import Inline from './components/inline';
import './Appstyle.css';
import Styles from './Appstyle.module.css';
import Form from './components/form';
import Hello from './components/func_compionents';
//if we use arrow function we import as follows
// import {Hello} from './components/func_compionents';
// import Hi from './components/class_components';
// import WellCome from "./components/jsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home'
import Contact from './Pages/contact';
import About from './Pages/about';
import UseStateCountder from './Hooks/useStateCountder';
import Usestatecounter2 from './Hooks/usestatecounter2';
import UseStatewithObject from './Hooks/useStatewithObject';
import UseEffectHoooks from './Hooks/useEffectHoooks';
function App() {
  return (
    <div className="App">
{/* <UseStateCountder /> */}
{/* <Usestatecounter2 /> */}
{/* <UseStatewithObject /> */}
<UseEffectHoooks />



{/* <Router>
  <nav>
    <Link to ='/'>home</Link>
    <Link to ='/Contact'>contact</Link>
    <Link to ='/About'>about</Link>
  </nav>
  <Routes>
    <Route path = '/' element= {<Home />}/>
    <Route path = '/Contact' element= {<Contact />}/>
    <Route path = '/About' element= {<About />}/>
    <Route path = '*' element= {<h1>Page Not Found 404</h1>}/>
  </Routes>
</Router> */}


      {/* <Hello></Hello>  also possible */}
      {/* <Hello />
      <Hi /> */}
      {/* <WellCome /> */}
      {/* <FullName name="abebe" Age="28"> 
        <p>this first person</p>
      </FullName>
      <FullName name="jamala" Age="27"> 
        <p>this second person</p>
      </FullName>
      <FullName name="roba" Age="26">
        <button>click me</button>
      </FullName> */}
      {/* <Subscribe /> */}
      {/* <Event_fuc /> */}
      {/* <Event_On_Class /> */}
      {/* <Event_Binding /> */}
      {/* <Condition_Render /> */}
      {/* <ListLanguage /> */}
      {/* <Style heading={true}/> */}
      {/* <Inline /> */}
      {/* <h1 className="Regularcss">Regular Style</h1>
      <h1 className={Styles.modulecss}>CSS Module Style</h1> */}
      {/* <Form /> */}


    </div>
  );
}

export default App;
