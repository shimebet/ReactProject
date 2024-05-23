import React, { useState } from 'react';
import './Usestatecounter2.css'; // Import the CSS file

function Usestatecounter2() {
    //usestate in previous state
  const initialValue = 0;
  const [count, counterUpdater] = useState(initialValue);

  return (
    <div className="counter-container">
      <p className="count-display">Count: {count}</p>
      <button className="counter-button" onClick={() => counterUpdater(initialValue)}>Reset</button>
      <button className="counter-button" onClick={() => counterUpdater(count + 1)}>Increment</button>
      <button className="counter-button" onClick={() => counterUpdater(count - 1)}>Decrement</button>
    </div>
  );
}

export default Usestatecounter2;
