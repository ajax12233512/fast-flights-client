import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home, Flights } from './pages'
import Layout  from './Layout/Layout';

import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>} />
        <Route path="/flights" element={
          <Layout>
            <Flights />
          </Layout>
        } />
      </Routes>
    </div>
  );
}

export default App;
