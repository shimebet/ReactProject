import React from 'react';

function Counter({ text, count }) {
    console.log(`Rendering ${text}`);
    return (
        <div style={{ margin: '10px 0', fontSize: '18px' }}>
            {text} - {count}
        </div>
    );
}

export default React.memo(Counter);
