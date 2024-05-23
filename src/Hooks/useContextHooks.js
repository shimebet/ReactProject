import React, { useContext } from 'react';
import { OwnerContext, ChennalContext } from '../App'; // Corrected import

function UseContextHooks() {
  const owner = useContext(OwnerContext);
  const channel = useContext(ChennalContext); // Corrected usage

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #ddd',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px'
  };

  const textStyle = {
    fontWeight: 'bold',
    color: '#333'
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <span style={textStyle}>{owner}</span> - <span style={textStyle}>{channel}</span>
      </div>
    </div>
  );
}

export default UseContextHooks;
