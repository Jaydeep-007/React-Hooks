import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from './Common/HeaderBar';
import UseStateDemo from './UseState/UseStateDemo'
import UseEffectDemo from './UseEffect/UseEffectDemo';
import UseReducerDemo from './UseReducer/UseReducerDemo';
import UseContextDemo from './UseContext/UseContextDemo';
import UseMemoDemo from './UseMemo/UseMemoDemo';
import CustomHookDemo from './CustomHooks/CustomHookDemo';

function App() {
  return (
    <Router>
    <div>
      <HeaderBar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/use-state-demo" element={<UseStateDemo />} />
          <Route path="/use-effect-demo" element={<UseEffectDemo />} />
          <Route path="/use-reducer-demo" element={<UseReducerDemo />} />
          <Route path="/use-context-demo" element={<UseContextDemo />} />
          <Route path="/use-memo-demo" element={<UseMemoDemo />} />
          <Route path="/use-customhook-demo" element={<CustomHookDemo />} />
          <Route path="/" element={<h1>Welcome! Select a demo from the navigation above.</h1>} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
