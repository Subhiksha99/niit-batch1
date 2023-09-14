import React, { lazy } from 'react'
import Nav from './components/nav'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

import CustomerAdd from './components/customerAdd';
import UpdateCustomer from './components/updateCustomer';
import Counter from './components/counter';
import Customers from './components/customers';
import Products from './components/products';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/products" element={<Products />} />,
        <Route path="/customers" element={<Customers />} />,
        <Route path="/login" element={<Login />} />,
        <Route path="/register" element={<Register />} />,
        <Route path="/counter" element={<Counter />} />,
        <Route path="/customer/update/:id" element={<UpdateCustomer />} />
        <Route path="/customer/add" element={< CustomerAdd />} />,
      </Routes>
    </>
  )
}

export default App
