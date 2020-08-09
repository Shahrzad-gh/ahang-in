import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Search/>
    </div>
  );
}

export default App;
