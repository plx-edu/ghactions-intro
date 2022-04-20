import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';

const navStyle = {
  width: "100%",
  height: "25px",

  marginBottom: "10px",

  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  borderBottom: "1px solid lightgrey"
};

function App() {
  return (
    <BrowserRouter>
      <div style={navStyle}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
