import React, { useMemo, useState } from 'react';
import SubChild from './SubChild';

function UseMemo() {
    const [count, setCount] = useState(0);
    function clickHandler() {
        setCount(count + 1);
    }
    const subchildMemo = useMemo(() => {
        return <SubChild />;
    }, []);

    return (
        <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h3 style={{ color: 'blue' }}>Count: {count}</h3>
            <button 
                onClick={clickHandler} 
                style={{ 
                    backgroundColor: 'green', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 20px', 
                    cursor: 'pointer', 
                    borderRadius: '5px', 
                    margin: '10px 0' 
                }}
            >
                Increment
            </button>
            {subchildMemo}
        </div>
    );
}

export default UseMemo;
