import React, { useEffect, useState } from 'react';

function UseEffectHoooks() {
  // Array destructuring
  const [counter, updateCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
        You Clicked {counter} Times
      </p>
      <button 
        onClick={() => updateCounter(counter + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px'
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default UseEffectHoooks;
