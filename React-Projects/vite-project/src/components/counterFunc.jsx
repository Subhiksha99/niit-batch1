import React, { useState } from 'react';

// useState - defines state in functional component
const CounterFunc = () => {
    // Define state
    const [count, setCount] = useState(0);

    const increment = () => {
        // update state
        setCount(count + 1);
    }

    const decrement = () => {
        if (count >= 1) {
            // update state
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div className='d-flex justify-content-center mt-3'>
                <input type="button" onClick={increment} value="Increment" className="btn btn-primary" />
                <h3 className='text-center mx-3'>{count}</h3>
                <input type="button" onClick={decrement} value="Decrement" className='btn btn-secondary' />
            </div>
        </div>
    );
}

export default CounterFunc;