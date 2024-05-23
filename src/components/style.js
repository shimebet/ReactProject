import React from 'react';
import './style.css';

function Style(props) {
  let className = props.heading ? 'heading' : '';
  return (
    <div>
        {/* apply conditional style */}
      <h1 className={`${className} large_font`}>Style for react component</h1>
    </div>
  );
}

export default Style;
