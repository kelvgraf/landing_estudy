import React from 'react';
import './App.css';

import Home from './components/screen/Home';
import About from './components/screen/About';
import From from './components/screen/From';
import Footer from './components/screen/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <From/>
      <Footer/>
    </div>
  );
}

export default App;
