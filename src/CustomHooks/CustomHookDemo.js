import React from 'react';
import useLocalStorage from './useLocalStorage';

const CustomHookDemo = () => {
  // Use the custom hook to manage a count value in localStorage
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Custom Hook Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default CustomHookDemo;
