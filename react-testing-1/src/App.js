import React, { Component, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
    if (error) setError(false);
  };

  const decrementHandler = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
    else setError(true);
  };

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <div
        data-test="error-message"
        className={`error ${error ? '' : 'hidden'}`}>
        The counter cannot go below 0
      </div>
      <button data-test="increment-button" onClick={incrementHandler}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={decrementHandler}>
        Decrement counter
      </button>
    </div>
  );
}

export default App;
