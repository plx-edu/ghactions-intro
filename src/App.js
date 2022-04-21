import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';


function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <div className='navbr' ></div>
        <NavLink to="dashboard">Dashboard</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
