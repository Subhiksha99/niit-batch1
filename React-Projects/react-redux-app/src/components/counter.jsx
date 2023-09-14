import React, { useState } from 'react';

// useState - defines state in functional component
const Counter = (props) => {
    // Define state


    return (
        <div className='mt-3'>
            < h1 className='text-center mb-3' data-test="title">Counter App</h1 >
            <div className='d-flex justify-content-center'>
                <input type="button" data-test="incr-btn" onClick={props.increment} value="Increment" className="btn btn-primary" />
                <h3 data-test="count-header" className='text-center mx-3'>{props.count}</h3>
                < input data-test="decr-btn" type="button" onClick={props.decrement} value="Decrement" className='btn btn-secondary' />
            </div >
            {/* <form>
                <div className="mb-3">
                    <input data-test="step-input" className="form-control mx-auto mt-3" style={{ width: "250px" }} type="number" />
                </div>
            </form> */}
        </div >
    );
}

export default Counter;