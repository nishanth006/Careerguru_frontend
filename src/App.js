import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard'
import Login from './Login';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}
export default App;
// heloo