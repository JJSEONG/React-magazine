import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import './fonts/fonts.css'
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
          <Routes>
            <Route path="/signup" element = { <SignUp /> } />
            <Route path="/login" element = { <Login /> } />
            <Route path="/" exact element = { <Main /> } />
          </Routes>
      </div>
    </div>
  );
}

export default App;

