import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  count: 0,
  name: '',
  isEditing: false,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'TOGGLE_EDIT':
      return { ...state, isEditing: !state.isEditing };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

// Component
const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });
  const handleDecrement = () => dispatch({ type: 'DECREMENT' });
  const handleToggleEdit = () => dispatch({ type: 'TOGGLE_EDIT' });
  const handleNameChange = (e) => dispatch({ type: 'SET_NAME', payload: e.target.value });

  return (
    <div>
      <h1>UseReducer Demo</h1>
      <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <h2>Name: {state.name}</h2>
        <button onClick={handleToggleEdit}>
          {state.isEditing ? 'Stop Editing' : 'Edit Name'}
        </button>
        {state.isEditing && (
          <input
            type="text"
            value={state.name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        )}
      </div>
    </div>
  );
};

export default UseReducerDemo;
