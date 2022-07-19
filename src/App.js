import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth, db } from "./shared/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import './App.css';
import './fonts/fonts.css'
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';

function App() {

  const [is_login, setIsLogin] = React.useState(false);

  console.log(auth.currentUser);

  const loginCheck = async (user) => {
    if(user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }
  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck)
  });

  return (
    <div className="App">
      <Header isLogin={ is_login }/>
      <Routes>
        <Route path="/" exact element = { <Main /> } />
        <Route path="/signup" element = { <SignUp /> } />
        <Route path="/login" element = { <Login /> } />
      </Routes>
    </div>
  );
}

export default App;