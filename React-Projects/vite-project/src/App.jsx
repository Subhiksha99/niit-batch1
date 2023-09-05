import React from 'react';

import { Nav } from './components/nav'
import Login from './components/login';
import Counter from './components/counter';
import CounterFunc from './components/counterFunc';
import Products from './components/products';

function App() {



  return (<React.Fragment>
    <Nav />
    <Products />
    <Login />
    <Counter />
    <CounterFunc />
  </React.Fragment >)
}

export default App
