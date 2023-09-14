import React from 'react';
import Home from './components/home';
import Counter from './components/counter'
import { incrementAction, decrementAction } from './actions/counterAction';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  // useSelector - get state/data from store
  // useDispatch - dispatch an action

  // get counter state from redux store
  const count = useSelector(state => state.count);
  // functions to dispatch incrementAction/decrementAction

  const dispatch = useDispatch();

  const increment = () => {
    // dispatch increment action
    dispatch(incrementAction());
  }

  const decrement = () => {
    if (count >= 1) {
      // dispatch decrement action
      dispatch(decrementAction());

    }
  }

  return (
    <>
      <Home count={count} />
      <Counter count={count} increment={increment} decrement={decrement} />
    </>
  )
}

export default App
