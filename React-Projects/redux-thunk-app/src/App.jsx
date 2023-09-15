import React from 'react'
import Products from './components/products'
import Home from './components/home';
import ProductDetails from './components/productDetails';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (

    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/products' element={<Products />} />
    </Routes>

  )
}

export default App
