import React, { useCallback, useState, memo } from 'react'
import Products from './components/products'
import Home from './components/home';
import ProductDetails from './components/productDetails';
import Counter from './components/counter';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';


function App() {
  console.log("App - Parent Component")
  // Define state
  const [count, setCount] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const [isLogin, setIsLogin] = useState(false);


  const increment = () => {
    // update state
    console.log("increment() method");
    setCount(count + parseInt(stepValue));
  }

  const decrement = () => {
    console.log("decrement() method");
    if (count >= 1) {
      // update state
      setCount(count - stepValue);
    }
  }

  const handleStepValue = (value) => {
    console.log("updateStepValue() method");
    setStepValue(value);
  }

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };


  return (
    <>
      < Routes >
        <Route path='/' exact element={<Home />} />
        <Route path='/counter' exact element={
          <Counter
            count={count}
            decrement={decrement}
            increment={increment}
            stepValue={stepValue}
            updateStepValue={handleStepValue}
          />
        } />
        <Route path="/login" element={<Login />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/products' element={<Products />} />
      </Routes >
    </>
  )
}

export default App;
