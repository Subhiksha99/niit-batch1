import React from 'react';
import { Nav } from './components/nav'
import Login from './components/login';
import Counter from './components/counter';
import PageNotFound from './components/pageNotFound';
import Products from './components/products';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (<React.Fragment>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='' element={<Home />} />,
        <Route path='login' element={<Login />} />,
        <Route path='products' element={<Products />} />,
        <Route path='counter' element={<Counter />} />,
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment >)
}

export default App


