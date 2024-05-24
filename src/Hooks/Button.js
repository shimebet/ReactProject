import React from 'react';

function Button({ handleClick, children }) {
    console.log('Button rendering -', children);
    return (
        <div style={{ margin: '10px 0' }}>
            <button
                onClick={handleClick}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#007BFF',
                    color: 'white',
                }}
            >
                {children}
            </button>
        </div>
    );
}

export default React.memo(Button);
