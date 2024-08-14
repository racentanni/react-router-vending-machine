// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </Router>
  );
}

export default App;
