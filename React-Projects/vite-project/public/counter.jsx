import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        if (this.state.count >= 1) {
            this.setState({ count: this.state.count - 1 });
        }
    }
    render() {
        return (
            <div className='d-flex justify-content-center mt-3'>
                <input type="button" onClick={this.increment} value="Increment" className="btn btn-primary" />
                <h3 className='text-center mx-3'>{this.state.count}</h3>
                <input type="button" onClick={this.decrement} value="Decrement" className='btn btn-secondary' />
            </div>
        );
    }
}

export default Counter;