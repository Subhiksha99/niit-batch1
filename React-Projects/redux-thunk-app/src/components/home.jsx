import React, { useState, useCallback } from 'react'

const Home = () => {
    const [count, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    // increment
    const incr = () => {
        console.log("incr()");
        //setCount(count + 1);
        calc(1);
    };

    // decrement
    const decr = () => {
        console.log("decr()");
        //setCount(count - 1);
        calc(-1);
    }

    const calc = (num) => {
        setCount(count + num);
    }
    // set login
    const login = () => {
        console.log("login");
        setIsLogin(!isLogin);
    }

    return (
        <div>
            <h1>Home Component</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input type="button" value="Decrement" onClick={decr} />
                <h3 style={{ margin: "15px" }}>{count}</h3>
                <input type="button" value="Increment" onClick={incr} />
            </div>
            <hr />
            <h1>isLogin: {isLogin ? 'true' : 'false'}</h1>
            <button type="button" onClick={login}>Login</button>
        </div>
    );
}

export default Home;