import React, { useEffect, useRef } from 'react';

function InputFocusUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
    </div>
  );
}

export default InputFocusUseRef;
