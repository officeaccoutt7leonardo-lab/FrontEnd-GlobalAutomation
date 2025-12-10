// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalePage from './pages/SalePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalePage />} />
      </Routes>
    </Router>
  );
}

export default App;