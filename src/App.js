// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function minusHandler() {
    dispatch({ type: 'decrement' });
  }

  function plusHandler() {
    dispatch({ type: 'increment' });
  }

  function resetHandler() {
    dispatch({ type: 'reset' });
  }

  return (
    <div className="App">
      <div>Increment and decrement</div>
      <div>
        <button onClick={minusHandler}>Minus</button>
      </div>
      <div>{state.count}</div>
      <div>
        <button onClick={plusHandler}>Plus</button>
      </div>
      <div>
        <button onClick={resetHandler}>RESET</button>
      </div> 
    </div>
  );
}

export default App;
