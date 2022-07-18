import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import './fonts/fonts.css'
import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element = { <Main /> } />
      </Routes>
    </div>
  );
}

export default App;
