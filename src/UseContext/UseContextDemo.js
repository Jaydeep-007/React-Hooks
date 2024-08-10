import React, { createContext, useState, useContext } from 'react';

// Create a Context with default values
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // State to manage the theme
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  // Use the context in a component
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '20px', backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Main component using the ThemeProvider
const UseContextDemo = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default UseContextDemo;
