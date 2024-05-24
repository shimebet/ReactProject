import React, { useState, useCallback } from 'react';
import Counter from './Counter';
import Button from './Button';

function UseCallBack() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increment1 = useCallback(() => {
        setCounter1(prevCounter1 => prevCounter1 + 1);
    }, []);

    const increment2 = useCallback(() => {
        setCounter2(prevCounter2 => prevCounter2 + 1);
    }, []);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <Counter text="Count by 1: " count={counter1} />
            <Button handleClick={increment1}>+1</Button>

            <Counter text="Count by 2: " count={counter2} />
            <Button handleClick={increment2}>+2</Button>
        </div>
    );
}

export default UseCallBack;
