import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#282c34', color: '#fff' }}>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/use-state-demo" style={{ color: '#61dafb', textDecoration: 'none' }}>useState</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/use-effect-demo" style={{ color: '#61dafb', textDecoration: 'none' }}>useEffect</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/use-reducer-demo" style={{ color: '#61dafb', textDecoration: 'none' }}>useReducer</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/use-context-demo" style={{ color: '#61dafb', textDecoration: 'none' }}>useContext</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/use-memo-demo" style={{ color: '#61dafb', textDecoration: 'none' }}>useMemo</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/use-customhook-demo" style={{ color: '#61dafb', textDecoration: 'none' }}>customHook</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBar;
