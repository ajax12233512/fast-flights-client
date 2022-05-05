import './App.css';
import Home from './pages/Home/Home';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    fetch('/api/test', {
      method: 'GET',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  })

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
