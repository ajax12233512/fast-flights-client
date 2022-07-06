import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home, Flights } from './pages'

import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </div>
  );
}

export default App;
