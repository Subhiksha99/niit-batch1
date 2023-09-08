import React from 'react'
import Nav from './components/nav'
import { Routes, Route } from 'react-router-dom'
import Customers from './components/customers';
import Products from './components/products';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import UserAdd from './components/userAdd';

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
        <Route path="/user/add" element={< UserAdd />} />,

      </Routes>
    </>
  )
}

export default App
