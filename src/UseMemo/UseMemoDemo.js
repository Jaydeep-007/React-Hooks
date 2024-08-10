import React, { useState, useMemo } from 'react';

// Expensive calculation function
const calculateFactorial = (num) => {
  console.log('Calculating factorial...');
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // Memoized factorial calculation
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <h1>UseMemo Demo</h1>
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      </div>
      <div>
        <h2>Factorial of {number}: {factorial}</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default UseMemoDemo;
