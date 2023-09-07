import React, { useEffect, useState } from 'react';
import { Nav } from './components/nav'
import Login from './components/login';
import Counter from './components/counter';
import PageNotFound from './components/pageNotFound';
import Products from './components/products';
import Home from './components/home';
import Register from './components/register';
import Logout from './components/logout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  // user initial state 
  const [user, setUser] = useState(null);

  const updateUserState = (newState) => {
    setUser(newState);
  }

  return (<React.Fragment>
    <BrowserRouter>
      <Nav user={user} />
      <Routes>
        <Route path='' element={<Home />} />,
        <Route path='login' element={<Login updateUserState={updateUserState} />} />,
        <Route path='logout' element={<Logout updateUserState={updateUserState} />} />,
        <Route path='register' element={<Register />} />,
        <Route path='products' element={<Products />} />,
        <Route path='counter' element={<Counter />} />,

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment >)
}

export default App


